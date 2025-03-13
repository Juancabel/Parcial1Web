import "./login.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login() {

    const [password, setPassword] = useState("");
    const [password_error, setPasswordB] = useState(false);

    const navigate = useNavigate();


    function HandlePasswordChange(e) {
        if (e.target.value.length < 8 && e.target.value.length > 5) {
            setPassword("La contraseña debe tener entre 5 y 8 caracteres.");
            setPasswordB(false)
        }
        else {
            setPasswordB(true)
            setPassword("");
        }
    }


    function Submit() {
        if (password_error) {
            navigate("/home")
        }
        else {
            alert("Datos incorrectos.");
        }
    }

    return (
        <div >
            <Container>
                <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <Col md={5} style= {{  height: "100vh"}}>
                    <Card className='bg-color p-4 shadow-lg' style={{ margin: "15px" }}>
                            <Card.Body>
                                <h3 className=" mb-4 text-center">Too good to go</h3>
                                <Form>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label className="text-center">Food Wasting solution </Form.Label>
                                        <img style= {{ width:100, height:100}} src="https://plus.unsplash.com/premium_photo-1661759410516-945250a82834?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={6} className="justify-content-center align-items-center">
                        <Card className='bg-color p-4 shadow-lg' style={{ margin: "15px", height: "100vh" , width: "100vh", color: "white" , backgroundColor: "darkslategrey" }}>
                            <Card.Body>
                                <Form className= "text-center"style={{}}>
                                    <Form.Group className="mb-4 text-center" controlId="formBasicEmail">
                                        <Form.Control type="username" placeholder="Username"/>
                                    </Form.Group>

                                    <Form.Group className="mb-4 text-center" controlId="formBasicPassword" style={{ color: "white" }}>
                                        <Form.Control type="password" placeholder="Password" isInvalid={!password_error} onChange={ HandlePasswordChange } />
                                        <Form.Text style={{ color: "white" }} className="text-center">{password}</Form.Text>
                                        <Form.Text style={{ color: "white" }} className="text-center"> Forgot Password</Form.Text>
                                    </Form.Group>

                                    <Button type="submit" onClick={ Submit }>
                                        Log In
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;