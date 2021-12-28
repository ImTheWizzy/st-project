import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useSession } from "../hooks/useAuth";
import emailjs from "emailjs-com";

function Prescription() {
  const url = "http://localhost:8081/prescription/save";
  const { user } = useSession();
  const [data, setData] = useState({
    medicine: "",
    comment: "",
    date: "",
    uniquePrescriptionNumber: "",
    firstName: "",
    lastName: "",
  });
  const [email, setEmail] = useState<string>("");

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
          firstName: data.firstName,
          lastName: data.lastName,
          doctorUser: user,
        },
      })
      .then((res) => {
        console.log(res.data);

        emailjs.send(
          "gmail",
          "template_u80w09h",
          {
            firstName: data.firstName,
            lastName: data.lastName,
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
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="first Name"
                value={data.firstName}
                onChange={(e) => handle(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="last Name"
                value={data.lastName}
                onChange={(e) => handle(e)}
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
