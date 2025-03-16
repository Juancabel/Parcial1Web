import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';

function Home() {
  const navigate = useNavigate();
  const intl = useIntl(); 

  const handleNavigation = (text) => {
    navigate("/detail", { state: { text } });
  };

  return (
    <div className="bg-image">
      <Container>
        <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
          <Col md={9}>
            <Row md={6} className="justify-content-center align-items-center">
              <div style={{ margin: "15px", color: "white", backgroundColor: "#808080", opacity: 0.8, width: "100%" }}>
                <Card className="bg-transparent p-4 shadow-lg" style={{ margin: "15px", color: "white" }} onClick={() => handleNavigation(intl.formatMessage({ id: "Menu" }))}>
                  <Card.Body>
                  <h3 className="text-center">
                  <FormattedMessage id="Menu" defaultMessage="Menu" />
                  </h3>
                  </Card.Body>
                </Card>
                <Card className="bg-transparent p-4 shadow-lg" style={{ margin: "15px", color: "white" }} onClick={() => handleNavigation(intl.formatMessage({ id: "Store" }))}>
                  <Card.Body>
                  <h3 className="text-center">
                  <FormattedMessage id="Store" defaultMessage="Store" />
                  </h3>
                  </Card.Body>
                </Card>
                <Card className="bg-transparent p-4 shadow-lg" style={{ margin: "15px", color: "white" }} onClick={() => handleNavigation(intl.formatMessage({ id: "Cart" }))}>
                  <Card.Body>
                  <h3 className="text-center">
                  <FormattedMessage id="Cart" defaultMessage="Cart" />
                  </h3>
                  </Card.Body>
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
