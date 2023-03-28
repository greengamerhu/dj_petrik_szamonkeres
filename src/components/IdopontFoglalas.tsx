import 'bootstrap/dist/css/bootstrap.css';

import { Component, ReactNode } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface State {
    nameField : string,
    dateField : string,
    textField : string,
    errorMsg : string,
    mgsColor : string
}
export default class IdopontFoglalas extends Component<{}, State> {
    constructor(props : {}) {
        let currenDate = new Date()
        super(props)
        this.state = {
            nameField : "",
            dateField : currenDate.getFullYear() + "-" + ("0" + (currenDate.getMonth() + 1)).slice(-2) +"-" +  ("0" + (currenDate.getDay() + 2)).slice(-2),
            textField : "",
            errorMsg : "",
            mgsColor : "red"

        }
    }
    handleForm = () => {
        const  {nameField, textField, errorMsg} = this.state
        if(nameField.trim() == "") {
            this.setState({errorMsg : "a Név mező nem lehet üres"})
            return
        }
        if(textField.trim() == "") {
            this.setState({errorMsg : "a leirás mező nem lehet üres"})
            return
        }

        this.setState({errorMsg : "Köszönjük", mgsColor : "green"})
        
    }
    render(): ReactNode {
        return <Container>
            
        <Row className='d-flex justify-content-center'>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Email </Form.Label>
                <Form.Control type="text" placeholder="Teszt Elek" value={this.state.nameField} onChange={e => this.setState({nameField : e.currentTarget.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Dátum </Form.Label>
                <Form.Control type="date" value={this.state.dateField} min={this.state.dateField} onChange={e => this.setState({dateField : e.currentTarget.value})}/>
            </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Leírás: </Form.Label>
             <Form.Control as="textarea"  value={this.state.textField} onChange={e => this.setState({textField : e.currentTarget.value})}/>
  </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  </Form.Group>
  <Button style={{width : "100%"}}  onClick={this.handleForm}>elküld</Button>
  
</Form>
        </Row>
        <Row className='text-center'>
       <h1 style={{color :  this.state.mgsColor}}>{this.state.errorMsg}</h1>

        </Row>
    </Container>
       
 
    }
}