import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import "./HomeServiceCard.css";

const ServiceCard = (props) => {
    const { key, name, img, special, price } = props.HomeService
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="HomeServiceimage-container">
                        <CardImg top style={{
                            objectFit: "cover",
                            borderRadius: "12px"
                        }} width="100%" src={img} alt="Card image" />
                    </div>
                    <div className="HomeServicename-special">
                        <CardTitle className="HomeServicename" tag="h2">{name}</CardTitle>
                        <CardSubtitle tag="h4" className="mb-2 text-muted">{special}</CardSubtitle>
                        <CardText tag="h4" style={{ color: "#009a76", display: "flex", alignItems: "center", marginTop: "10px" }}>{price}</CardText>
                    </div>
                    <Link className="HomeServicebutton" to={`/home-service/details/${key}`}>
                        <Button className="HomeServicecontact-btn">Learn More</Button>
                    </Link>
                </CardBody>
            </Card>
        </div >
    );
};

export default ServiceCard;