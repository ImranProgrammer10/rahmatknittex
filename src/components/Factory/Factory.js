import React from "react";
import { Card, Col } from "react-bootstrap";
import "./FactoryData";
 
import FactoryGallery from "./FactoryGallery";
 

const Factory = () => {
  return (
    <div className="my-5">
      <h1 className=" gallery">Factory</h1>
      <div className="row container-fluid mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
        {FactoryGallery.map((data) => {
          const { id, image, title } = data;

          return (
            <Col key={id}>
              {/* <h3>{title}</h3> */}
              {/* <img className="img-fluid img-thumbnail" src={image} alt="" /> */}
              <Card>
                <Card.Body variant="top">
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Img variant="bottom" src={image} />
              </Card>
            </Col>
          );
        })}
      </div>
    </div>
  );
};

export default Factory;