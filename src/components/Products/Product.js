import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductsData from './ProductData';
 
 

const Product = () => {
  const [products, setProducts] = useState(ProductsData);
  const handleProducts = (catItem) => {
    const results = ProductsData.filter((curItem) => {
      return curItem.category === catItem;
    });
    setProducts(results);
  };
  return (
    <>
      <Container fluid className="mx-auto my-5">
        <Row className="g-3 bg-dark mx-2">
          <Col sm={3}>
            <h3 className="my-5 text-white">Category</h3>
            <div className="bg-light border rounded  my-3">
              <Button
                onClick={() => handleProducts("T-shirt")}
                className="w-75 bg-dark my-3"
              >
                T-shirt
              </Button>
              <Button
                onClick={() => handleProducts("Polo's")}
                className="w-75 bg-dark mb-3"
              >
                Polo's
              </Button>
              <Button
                onClick={() => handleProducts("Sweats, Pants & Rugby's")}
                className="w-75 bg-dark mb-3"
              >
                Sweats, Pants & Rugby's
              </Button>
              <Button
                onClick={() => handleProducts("Shirts")}
                className="w-75 bg-dark mb-3"
              >
                Shirts
              </Button>
              <Button
                onClick={() => handleProducts("Polar Fleece")}
                className="w-75 bg-dark mb-3"
              >
                Polar Fleece
              </Button>
              <Button
                onClick={() => handleProducts("Jackets")}
                className="w-75 bg-dark mb-3"
              >
                Jackets
              </Button>
              <Button
                onClick={() => handleProducts("Underwear & Socks")}
                className="w-75 bg-dark mb-3"
              >
                Underwear & Socks
              </Button>
              <Button
                onClick={() => handleProducts("Caps")}
                className="w-75 bg-dark mb-3"
              >
                Caps
              </Button>
              <Button
                onClick={() => handleProducts("Kids,Toddler & Babywear")}
                className="w-75 bg-dark mb-3"
              >
                Kids,Toddler & Babywear
              </Button>
              <Button
                onClick={() => handleProducts("Sports")}
                className="w-75 bg-dark mb-3"
              >
                Sports
              </Button>
              <Button
                onClick={() => handleProducts("Workwear")}
                className="w-75 bg-dark mb-3"
              >
                Workwear
              </Button>
            </div>
          </Col>
          <Col className="mt-5" sm={9}>
            <Row className=" mt-5 g-3">
              {products.map((product) => {
                const { id, image } = product;
                return (
                  <Col key={id} md={4} sm={6} className="my-5">
                    <img
                      className="img-thumbnail effect"
                      src={image}
                      style={{
                        width: "250px",
                        height: "350px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
