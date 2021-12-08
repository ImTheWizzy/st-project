import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";

    function FormExample() {
        const url = "http://localhost:8081/patient/save?firstName=&lastName=&egn=&address=&phone=&birthDate=&age=&gender=&additionalInfo="
        const [data, setData] =useState({
            firstName: "",
            lastName: "",
            egn: "",
            phone: "",
            address: "",
            birthdate: "",
            age: "",
            gender: "",
            info: "",
        })
         function submit(e: React.FormEvent<HTMLFormElement>){
              e.preventDefault();
              console.log({
                      firstName: data.firstName,
                      lastName: data.lastName,
                      egn: data.egn,
                      phone: data.phone,
                      address: data.address,
                      birthdate: data.birthdate,
                      age: data.age,
                      gender: data.gender,
                      info: data.info,
                  }
              )
           axios.post(url,
               {
                   firstName: data.firstName,
                   lastName: data.lastName,
                   egn: data.egn,
                   phone: data.phone,
                   address: data.address,
                   birthdate: data.birthdate,
                   age: data.age,
                   gender: data.gender,
                   info: data.info,
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
                                          onChange={(e) => handle(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control  type="text" placeholder="Last name"
                                           value={data.lastName}
                                           onChange={(e) => handle(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="egn">
                            <Form.Label>EGN</Form.Label>
                            <Form.Control  type="text" placeholder="EGN"
                                           value={data.egn}
                                           onChange={(e) => handle(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control  type="text" placeholder="Address"
                                           value={data.address}
                                           onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control  type="text" placeholder="phone"
                                           value={data.phone}
                                           onChange={(e) => handle(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="birthdate">
                            <Form.Label>Birth date</Form.Label>
                            <Form.Control  type="text" placeholder="Birth date"
                                           value={data.birthdate}
                                           onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control  type="text" placeholder="Age"
                                           value={data.age}
                                           onChange={(e) => handle(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="Gender"
                                          value={data.gender}
                                          onChange={(e) => handle(e)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="info">
                            <Form.Label>Additional information</Form.Label>
                            <Form.Control as="textarea" placeholder="info"
                                          rows={3}
                                          value={data.info}
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

export default FormExample;