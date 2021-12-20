import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";


function Prescription() {
    const url = "http://localhost:8081/medicalReferral/save"
    const [data, setData] = useState({
        doctorType: "",
        comment: "",
        date: "",
        uniqueReferralNumber: "",
        firstName: "",
        lastName: "",

    })
    function submit(e:any) {

        e.preventDefault();

        axios.post(url, null,{
            params:
                {
                    doctorType: data.doctorType,
                    comment: data.comment,
                    date: data.date,
                    uniqueReferralNumber: data.uniqueReferralNumber,
                    firstName: data.firstName,
                    lastName: data.lastName,

                }
        }).then(res => {

            console.log(res.data)
        })
    }

    function handle(e:any) {
        const newData = {...data}
        // @ts-ignore
        newData[e.target.id] = e.target.value
        setData(newData)
        // console.log(newData);
    }

    return (<>
            <div>
                <header>
                    <Row className="d-flex justify-content-center align-items-start">
                        <Col xs="4" className="bg-theme-dark rounded">
                            <h1 className="text-center">Medical Referral </h1>
                        </Col>
                    </Row>
                </header>
                <main>
                    <Form onSubmit={(e) => submit(e)}>
                        <Form.Group className="mb-3" controlId="doctorType">
                            <Form.Label>Doctor type</Form.Label>
                            <Form.Control type="text" placeholder="doctorType"
                                          value={data.doctorType}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="comment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" placeholder="comment" rows={3}
                                          value={data.comment}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" placeholder="date"
                                          value={data.date}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="uniqueReferralNumber">
                            <Form.Label>Referral Number</Form.Label>
                            <Form.Control type="text" placeholder="referral number"
                                          value={data.uniqueReferralNumber}
                                          onChange={(e) => handle(e)}/>
                        </Form.Group>
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="first Name"
                                              value={data.firstName}
                                              onChange={(e) => handle(e)}/>
                            </Form.Group>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="last Name"
                                                  value={data.lastName}
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

export default Prescription;