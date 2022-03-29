import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaTimes } from 'react-icons/fa';
import { VscListSelection } from 'react-icons/vsc';
import logo from '../../../Logo.png';
import useAuth from '../../../hooks/useAuth';


function Navbar() {
  const { user, logOut } = useAuth();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return window.removeEventListener('resize', showButton)
  }, []);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' style={{ width: '136px' }} className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes style={{ color: '#009a76' }} /> : <VscListSelection style={{ color: '#009a76' }} />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#009a76' }} to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#009a76' }}
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#009a76' }}
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            {!user.email && <li className='nav-item'>
              <NavLink activeStyle={{ fontWeight: '800', fontSize: '18px', color: '#009a76' }}
                to='/pricing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pricings
              </NavLink>
            </li>}
            <div className=" nav-menu-btn">
              {user.email ?
                (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Button className='btn-link' buttonStyle='btn--outline' onClick={logOut}>Sign Out</Button>
                  {user.photoURL ?
                    <div style={{ backgroundColor: 'yellow', width: "50px", height: "50px", borderRadius: '8px', marginLeft: '10px', border: '2px solid #009a76' }}>
                      <img style={{ width: "100%", height: "100%", objectFit: 'cover', borderRadius: '6px' }} src={user.photoURL} alt="" />
                    </div> :
                    <div style={{ display: 'none', backgroundColor: 'yellow', width: "50px", height: "50px", borderRadius: '8px', marginLeft: '10px', border: '2px solid #009a76' }}>
                      <img style={{ display: 'none', width: "100%", height: "100%", objectFit: 'cover', borderRadius: '6px' }} src={user.photoURL} alt="" />
                    </div>
                  }
                  <p style={{
                    fontSize: '18px', marginLeft: '10px', fontWeight: 'bold', color: '#00b27c'
                  }}>{user.displayName}</p>
                </div>
                )
                :
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-btn'>
                    {button ?
                      (<Link to='/sign-in' className='btn-link'>
                        <Button buttonStyle='btn--outline'>SIGN IN</Button>
                      </Link>)
                      :
                      (<Link to='/sign-in' className='btn-link'>
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>SIGN IN</Button>
                      </Link>)}
                  </li>
                  <li className='nav-btn'>
                    {button ? (<Link to='/sign-up' className='btn-link'><Button buttonStyle='btn--primary'>SIGN UP</Button></Link>) : (<Link to='/sign-up' className='btn-link'><Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobileMenu} >SIGN UP</Button></Link>)}
                  </li>
                </ul>
              }
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
