import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from "react";
import { useState } from "react";
import { FormattedMessage } from 'react-intl';

function Header({text}) {
  return (

    <footer className="bg-color" style={{backgroundColor: "darkslategrey"}}>
        <Container>
            <Row className="text-center">
                <Col>
                <h2> {text} </h2>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}
export default Header;