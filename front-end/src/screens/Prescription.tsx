import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import axios from "axios";


function Prescription() {
    const url = "http://localhost:8081/prescription/save"
    const [data, setData] =useState({
        medicine: "",
        comment: "",
        date: "",
        uniquePrescriptionNumber: ""
    })
    function submit(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault();
        console.log({
            medicine: data.medicine,
            comment: data.comment,
            date: data.date,
            uniquePrescriptionNumber: data.uniquePrescriptionNumber,
        })
        axios.post(url,
            {
                medicine: data.medicine,
                comment: data.comment,
                date: data.date,
                uniquePrescriptionNumber: data.uniquePrescriptionNumber,

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
            <h2>
                Prescription Page
            </h2>
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