import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import { useSession } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

function PatientData() {
    const navigate = useNavigate();
    const url = `${process.env.REACT_APP_REMOTE_URL}/patient/save`
    const { user } = useSession();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        egn: "",
        phone: "",
        address: "",
        birthDate: "",
        age: "",
        genderType: "",
        additionalInfo: "",
    })

    function submit(e:any) {
        e.preventDefault();
        axios.post(url, null,{
            params:
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    egn: data.egn,
                    phone: data.phone,
                    address: data.address,
                    birthDate: data.birthDate,
                    age: data.age,
                    genderType: data.genderType,
                    additionalInfo: data.additionalInfo,
                    doctorUser: user

                }
        }).then(res => {
            console.log(res.data);
            if(res.data.message) {
                alert(res.data.message);
                navigate('/patient');
            }
        })
    }

    function handle(e:any) {
        const newData = {...data}
        // @ts-ignore
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    return (
        <>
            <div>
                <header>
                    <Row className="d-flex justify-content-center align-items-start">
                        <Col xs="4" className="bg-theme-dark rounded">
                            <h1 className="text-center">Add Patient</h1>
                        </Col>
                    </Row>
                </header>
                <main>
                    <Form onSubmit={(e) => submit(e)}>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First name"
                                          value={data.firstName}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last name"
                                          value={data.lastName}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="egn">
                            <Form.Label>EGN</Form.Label>
                            <Form.Control type="text" placeholder="EGN"
                                          value={data.egn}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address"
                                          value={data.address}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="phone"
                                          value={data.phone}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="birthDate">
                            <Form.Label>Birth date</Form.Label>
                            <Form.Control type="text" placeholder="Birth date"
                                          value={data.birthDate}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Age"
                                          value={data.age}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="genderType">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="Gender"
                                          value={data.genderType}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="additionalInfo">
                            <Form.Label>Additional information</Form.Label>
                            <Form.Control as="textarea" placeholder="info"
                                          rows={3}
                                          value={data.additionalInfo}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </main>
            </div>
        </>

    )
}

export default PatientData;