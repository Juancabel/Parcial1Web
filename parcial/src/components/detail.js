import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./header";
import Carousel from "react-bootstrap/Carousel";

function Detail() {
  const location = useLocation();
  const text = location.state?.text || "Cart"; 

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const URL = "https://my.api.mockaroo.com/detail.json?key=98148980";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setDetail(data);
      });
  }, []);

  return (
    <Container style={{ width: "100vw", height: "100vh" }}>
      <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Row>
          <Header text={text} />
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={detail?.image1} alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={detail?.image2} alt="Slide 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={detail?.image3} alt="Slide 3" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={detail?.image4} />
              <Card.Title>{detail?.txt1}</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={detail?.image5} />
              <Card.Title>{detail?.txt2}</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={detail?.image6} />
              <Card.Title>{detail?.txt3}</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={detail?.image7} />
              <Card.Title>{detail?.txt4}</Card.Title>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Detail;
