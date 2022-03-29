import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$89.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>10 Supports</li>
                  <li>2% Pro Services</li>
                  <li>$100 Bonus per Year</li>
                </ul>
                <Button buttonSize='btn--medium' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>$124.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>100 Supports</li>
                  <li>3.5% Pro Services</li>
                  <li>$150 Bonus per Year</li>
                </ul>
                <Button buttonSize='btn--medium' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$289.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Unlimited Support</li>
                  <li>5% Pro Services</li>
                  <li>$200 Bonus per Year</li>
                </ul>
                <Button buttonSize='btn--medium' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
