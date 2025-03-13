import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './header'; 

function Detail({text}) {
      const [detail, setDetail] = useState([]);
       useEffect(() => {
         const URL =
           "https://my.api.mockaroo.com/detail.json?key=98148980";
         fetch(URL)
           .then((data) => data.json())
           .then((data) => {
             setDetail(data[0]);
           });
       }, []);
    return (
        <Container style={{width:"100vw", height:"100vh"}}>
            <Row >
            <Header text={text}/>
            </Row>
            <Row>

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
      </Container>
  );
}
export default Detail;