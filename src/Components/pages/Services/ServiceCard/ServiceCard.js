import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import "./ServiceCard.css";

const ServiceCard = (props) => {
    const { key, name, img, special, price } = props.service
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="image-container">
                        <CardImg top style={{
                            objectFit: "cover",
                            borderRadius: "12px"
                        }} width="100%" src={img} alt="Card image" />
                    </div>
                    <div className="name-special">
                        <CardTitle className="name" tag="h2">{name}</CardTitle>
                        <CardSubtitle tag="h4" className="mb-2 text-muted">{special}</CardSubtitle>
                        <CardText tag="h4" style={{ color: "#009a76", display: "flex", alignItems: "center", marginTop: "10px" }}>{price}</CardText>
                    </div>
                    <Link className="button" to={`/services/details/${key}`}>
                        <Button className="contact-btn">Get Now</Button>
                    </Link>
                </CardBody>
            </Card>
        </div >
    );
};

export default ServiceCard;