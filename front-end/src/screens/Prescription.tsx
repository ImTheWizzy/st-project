import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";


function Prescription() {
    const url = "http://localhost:8081/prescription/save?medicine=&comment=&date=&uniquePrescriptionNumber="
    const [data, setData] =useState({
        medicine: "",
        comment: "",
        date: "",
        uniquePrescriptionNumber: ""
    })
    function submit(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault();

        axios.post(url,
            {
                medicine: data.medicine.toString(),
                comment: data.comment.toString(),
                date: data.date.toString(),
                uniquePrescriptionNumber: data.uniquePrescriptionNumber.toString(),

            }) .then(res => {

            console.log(res.data)
        })
    }
    function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        const newData ={...data}
        // @ts-ignore
        newData[e.target.id] =e.target.value
        setData(newData)
        // console.log(newData);

    }
    return( <>
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
            <Form.Group className="mb-3" controlId="medicine">
                <Form.Label>Medicine</Form.Label>
                <Form.Control type="text" placeholder="medicine"
                              value={data.medicine}
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
            <Form.Group className="mb-3" controlId="uniquePrescriptionNumber">
                <Form.Label>Prescription Number</Form.Label>
                <Form.Control type="text" placeholder="uniquePrescriptionNumber"
                              value={data.uniquePrescriptionNumber}
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
};

export default Prescription;