import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import { useSession } from "../hooks/useAuth";
import emailjs from "emailjs-com";
import patientdata from "./patient-service";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Prescription() {
  const navigate = useNavigate();
  const url = `${process.env.REACT_APP_REMOTE_URL}/prescription/save`;
  const [allPatients, setAllPatients] = useState<any[]>([]);
  const { user } = useSession();
  const [data, setData] = useState({
    medicine: "",
    comment: "",
    date: "",
    uniquePrescriptionNumber: "",
    patient_id: "",
    results: "",
  });
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_REMOTE_URL}/patient/all`, {
      params:
      {
        doctorUser: localStorage.getItem("session")
      }
    }).then(res => {
      setAllPatients(res.data);
    })
  }, [])

  function submit(e: any) {
    e.preventDefault();
    console.log(data);

    axios
      .post(url, null, {
        params: {
          medicine: data.medicine,
          comment: data.comment,
          date: data.date,
          uniquePrescriptionNumber: data.uniquePrescriptionNumber,
          doctorUser: user,
          patient_id: data.patient_id,
          results: data.results,
        },
      })
      .then((res) => {
        console.log(res.data);
        if(res.data.message) {
          alert(res.data.message);
          navigate('/patient');
        }
        if(!email && email !== ''){
          return;
        }
        emailjs.send(
          "gmail",
          "template_u80w09h",
          {
            medicine: data.medicine,
            comment: data.comment,
            uniquePrescriptionNumber: data.uniquePrescriptionNumber,
            date: data.date,
            email: email,
          },
          "user_Ggex7Dj28IYlVlg2dcjn2"
        );
      });
  }

  function handle(e: any) {
    const newData = { ...data };
    // @ts-ignore
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <>
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
              <Form.Control
                type="text"
                placeholder="medicine"
                value={data.medicine}
                onChange={(e) => handle(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="comment"
                rows={3}
                value={data.comment}
                onChange={(e) => handle(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="date"
                value={data.date}
                onChange={(e) => handle(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="uniquePrescriptionNumber">
              <Form.Label>Prescription Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="prescription number"
                value={data.uniquePrescriptionNumber}
                onChange={(e) => handle(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="patient">
              <Form.Label>Patient EGN</Form.Label>
              <Typeahead 
              id="egn-all-patients"
              labelKey={'egn'}
              options={allPatients}
              placeholder="Select Patient EGN"
              onChange={(selected: any)=>{
                console.log('selected', selected);
                setData({
                  ...data,
                  patient_id: selected[0].id
                });
              }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="results">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="results"
                value={data.results}
                onChange={(e) => handle(e)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </main>
      </div>
    </>
  );
}

export default Prescription;
