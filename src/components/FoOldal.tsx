import 'bootstrap/dist/css/bootstrap.css';

import { Component, ReactNode } from "react";

import { Col, Container, Row } from "react-bootstrap";

export default class Fooldal extends Component {
    render(): ReactNode {
        return <Container>
            <Row >
                <Col className='text-center mt-5'>
                    <h1> Üdvözöllek DJ Petrik weboldalán!</h1>
                    <h3 >Válassz a fenti lehetőségek közül!</h3>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5'>
                    <img width={"800px"} src="dj.jpg" alt="" />
                </Col>
            </Row>

        </Container>
       
 
    }
}