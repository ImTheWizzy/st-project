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
        uniqueReferralNumber: ""
    })

    function submit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        axios.post(url,
            {
                medicine: data.doctorType,
                comment: data.comment,
                date: data.date,
                uniqueReferralNumber: data.uniqueReferralNumber,

            }).then(res => {

            console.log(res.data)
        })
    }

    function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
                            <h1 className="text-center">Prescription</h1>
                        </Col>
                    </Row>
                </header>
                <main>
                    <Form onSubmit={(e) => submit(e)}>
                        <Form.Group className="mb-3" controlId="doctorType">
                            <Form.Label>Medicine</Form.Label>
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
                            <Form.Label>Prescription Number</Form.Label>
                            <Form.Control type="text" placeholder="uniqueReferralNumber"
                                          value={data.uniqueReferralNumber}
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