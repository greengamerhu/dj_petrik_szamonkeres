
import 'bootstrap/dist/css/bootstrap.css';

import { Component, ReactNode } from "react";

import { Col, Container, Row } from "react-bootstrap";

export default class Tapasztalat extends Component {
    render(): ReactNode {
        return <Container>
            <Row>
                <Col >
            <div>
            <h1>Pro-bono bulik</h1>
        <ul> 
            <li>Csibeavató, 2021. 08. 31.</li>
            <li>Karácsonyi bál, 2021. 12. 22.</li>
            <li>Farsangi mulatság, 2022. 02. 20.</li>
        </ul>

<h1>Professzionális bulik</h1>

<ul>
    <li>Tanárkarácsony, 2021. 12. 20.</li>
    <li>Ballagás, 2022. 04. 30.</li>
</ul>
</div>
<img src="petrik.jpg" className="float-end" width={"300px"}  alt="" />
</Col>

 </Row>

        </Container>
       
 
    }
}