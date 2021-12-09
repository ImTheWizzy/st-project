import React from 'react';
import patientdata from "./patient-service";
import {Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import Table from "react-bootstrap/Table";



class PatientTab extends React.Component {

    url = window.location.href.split("/")

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            id: this.url[this.url.length - 1],
            patients: [],
        }
    }

    patientsArray = [];

    componentDidMount() {
        this.patientsArray = patientdata.patientsArr.filter((item: any) => item.id == this.url[this.url.length - 1])
        this.setState({
            ...this.state,
            patients: this.patientsArray
        })
    }

    render() {

        return (<div>
                <Row className="d-flex justify-content-center align-items-start">
                    <Col xs="4" className="bg-theme-dark rounded">
                        <h1 className="text-center">Patient</h1>
                    </Col>
                </Row>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>#id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>EGN</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Birth date</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.patientsArray.map((patient: any) => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.egn}</td>
                            <td>{patient.address}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.birthDate}</td>
                            <td>{patient.age}</td>
                            <td>{patient.gender?.genderType}</td>
                            <td>{patient.additionalInfo}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default PatientTab