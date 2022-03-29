import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './DetailsCard.css';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DetailsCard = (props) => {
    const { name, price, review, special, img } = props.details;
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="details-image-container">
                        <CardImg top style={{
                            objectFit: 'cover',
                            borderRadius: '12px'
                        }} width="100%" src={img} alt="Card image" />
                    </div>
                    <div className="details-name-price">
                        <CardTitle className='details-price price' tag="h1">{name}</CardTitle>
                        {!price ?
                            <CardSubtitle style={{ display: 'none' }} tag="h2" className="mb-2 text-muted">${price}</CardSubtitle>
                            :
                            <CardSubtitle tag="h2" className="mb-2 text-muted">${price}</CardSubtitle>
                        }
                        {!review ?
                            <CardText tag="h3" style={{ color: '#009a76', display: 'flex', alignItems: 'center', marginTop: '10px' }}>{review} <AiFillStar style={{ color: '#009a76', height: "18px", width: "18px", alignContent: 'center', marginLeft: '5px' }} /></CardText> :
                            <CardText tag="h3" style={{ color: '#009a76', display: 'flex', alignItems: 'center', marginTop: '10px' }}>{special} </CardText>
                        }
                        {!special ?
                            <CardText tag="p" style={{ color: '#009a76', display: 'flex', alignItems: 'center', marginTop: '10px' }}>{review} <AiFillStar style={{ color: '#009a76', height: "18px", width: "18px", alignContent: 'center', marginLeft: '5px' }} /></CardText> :
                            <CardText tag="p" style={{ color: '#009a76', display: 'flex', alignItems: 'center', marginTop: '10px' }}>{special}</CardText>
                        }
                    </div>
                    <Link className="details-button" to={`/home`}>
                        <Button className='cart-add-btn  btn-secondary'>Go Home</Button>
                    </Link>
                </CardBody>
            </Card>
        </div >
    );
};

export default DetailsCard;