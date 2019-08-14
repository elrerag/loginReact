import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios'

class LoginSection extends Component {
    constructor(props){
        super()

        this.state = {
            data: {
                textoBoton: 'Ingresar',
                mensaje: ''
            }
        }
    }

    handleSubmit(event) {
        const {mensaje} = this.state.data

        

        this.setState({
            data: {
                textoBoton: 'Cargando',
                mensaje: mensaje
            }
        })

        event.preventDefault();
        event.stopPropagation();
        axios.post(
            'https://reqres.in/api/login', 
            {
                "email": event.target.elements[0].value,
                "password": event.target.elements[1].value
            })
        .then(res => {
            console.log(res)
            this.setState({
                data: {
                    textoBoton: 'Ingresar',
                    mensaje: 
                    <ul>
                        <li>Ingreso exitoso</li>
                        <li>Token: {res.data.token}</li>
                        <li>fuente: https://reqres.in/</li>
                    </ul>
                }
            })
        })
        .catch(err => {
            this.setState({
                data: {
                    textoBoton: 'Ingresar',
                    mensaje: <ul><li>Credenciales inválidas</li></ul>
                }
            })
        })

    }

    render() {

        const {textoBoton, mensaje} = this.state.data

        return (
            <section>
                <article>
                    <Card>
                        <Card.Header>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Inicio de sesión</Card.Title>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control 
                                        required
                                        defaultValue="eve.holt@reqres.in"
                                        type="text" 
                                        placeholder="Ingrese su usuario" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control 
                                        defaultValue="cityslicka"
                                        type="password" 
                                        placeholder="Ingrese su contraseña" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Recordarme" />
                                </Form.Group>
                                <Button variant="danger" type="submit">{textoBoton}</Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer>{mensaje}</Card.Footer>
                    </Card>
                </article>
            </section>
        )
    }
}


export default LoginSection