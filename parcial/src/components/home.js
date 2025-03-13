import "./home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    function Nav(txt) {
        navigate("/detail")
    }



    return (
        <div className='bg-image'>
            <Container>
                <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <Col md={9}>
                        <Row md ={6} className="justify-content-center align-items-center">
                            <div style={{ margin: "15px", color:"white", backgroundColor: "#808080", opacity: 0.8, width: "100%" }} >
                        <Card className='bg-transparent p-4 shadow-lg' style={{ margin: "15px", color:"white" }} onClick={ Nav("menu")}>
                        <Link to={"/detail"} style={{ color:"white" }}>
                            <Card.Body>
                                <h3 className=" mb-4 text-center"> Menu</h3>
                            </Card.Body>
                            </Link>
                        </Card>
                        <Card className='bg-transparent p-4 shadow-lg' style={{ margin: "15px", color:"white" }} nClick={ Nav("stores")}>
                        <Link to={"/detail"} style={{ color:"white" }}>
                            <Card.Body>
                                <h3 className=" mb-4 text-center"> Store</h3>
                            </Card.Body>
                            </Link>
                        </Card>
                        <Card className='bg-transparent p-4 shadow-lg' style={{ margin: "15px", color:"white" }} nClick={ Nav("Cart")}>
                        <Link to={"/detail"} style={{ color:"white" }}>
                            <Card.Body>
                                <h3 className=" mb-4 text-center"> Cart</h3>
                            </Card.Body>
                            </Link>
                        </Card>
                        </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;