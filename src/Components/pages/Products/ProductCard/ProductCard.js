import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './ProductCard.css';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { key, name, price, review, img } = props.product;
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="image-container">
                        <CardImg top style={{
                            objectFit: 'cover',
                            borderRadius: '12px'
                        }} width="100%" src={img} alt="Card image" />
                    </div>
                    <div className="name-price">
                        <CardTitle className='price' tag="h2">${price}</CardTitle>
                        <CardSubtitle tag="h3" className="mb-2 text-muted">{name}</CardSubtitle>
                        <CardText tag="h4" style={{ color: '#009a76', display: 'flex', alignItems: 'center', marginTop: '10px' }}>{review} <AiFillStar style={{ color: '#009a76', height: "18px", width: "18px", alignContent: 'center', marginLeft: '5px' }} /></CardText>
                    </div>
                    <Link className="button" to={`/products/details/${key}`}>
                        <Button className='cart-add-btn  btn-secondary'>Buy Now</Button>
                    </Link>
                </CardBody>
            </Card>
        </div >
    );
};

export default ProductCard;