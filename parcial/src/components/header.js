import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from "react";
import { useState } from "react";

function Header({text}) {
  return (

    <footer className="bg-color" style={{backgroundColor: "darkslategrey"}}>
        <Container>
            <Row className="text-center">
                <Col>
                <h2> Cart </h2>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}
export default Header;