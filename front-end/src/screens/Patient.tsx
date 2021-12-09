import Table from 'react-bootstrap/Table';
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button, Col, Dropdown, DropdownButton, FormControl, Row} from "react-bootstrap";
import axios from "axios";
import patientdata from "./patient-service";
import {Link} from "react-router-dom";

class Patient extends React.Component {
    state = {
        error: null,
        patients: [],
        searchType: "FirstName",
        searchValue: "",
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/patient/all`)
            .then(res => {
                const patients = res.data;
                patientdata.patientsArr = res.data;
                this.setState({patients});
            })
    };

    removeData = (id: any) => {
        axios.delete(`http://localhost:8081/patient/delete?id=${id}`)
            .then(res => {
                debugger
                const newPatients = this.state.patients.filter((patient: any) => patient.id !== id)
                console.log(newPatients)
                this.setState({patients: newPatients});

            }).catch(err => {
            console.log(err)
        })

    }
    onSearch = (e: any) => {
        e.preventDefault();

        if (this.state.searchType === "EGN") {
            axios.get(`http://localhost:8081/patient/search/egn?egn=${e.target.value}`)
                .then(res => {

                    this.setState({patients: [res.data]});

                }).catch(err => {
                console.log(err)
            });
        } else {
            if (this.state.searchType === "FirstName") {
                axios.get(`http://localhost:8081/patient/search/firstName?firstName=${e.target.value}`)
                    .then(res => {

                        this.setState({patients: [res.data]});

                    }).catch(err => {
                    console.log(err)
                });
            }
        }

    }

    render() {
        const {error, patients} = this.state;

        if (error) {
            return (
                <div>{error}</div>
            )
        } else {
            return (
                <div>
                    <header>
                        <Row className="d-flex justify-content-center align-items-start">
                            <Col xs="4" className="bg-theme-dark rounded">
                                <h1 className="text-center">Patient's information</h1>
                            </Col>
                        </Row>
                    </header>
                    <main>
                        <div>
                            <br/>
                            <Button variant="primary" href="/patientdata">Add Patient </Button>
                        </div>
                        <br/>

                        <InputGroup className="mb-3">
                            <DropdownButton
                                variant="outline-secondary"
                                title={this.state.searchType}
                                id="input-group-dropdown-1"

                            >
                                <Dropdown.Item href="#" onClick={() => this.setState({searchType: "FirstName"})}>First
                                    Name</Dropdown.Item>
                                <Dropdown.Item href="#"
                                               onClick={() => this.setState({searchType: "EGN"})}>EGN</Dropdown.Item>
                                <Dropdown.Divider/>
                            </DropdownButton>
                            <FormControl type="text" placeholder="Search" onChange={(e) => this.onSearch(e)}/>

                        </InputGroup>

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
                                <th>Delete</th>
                                <th>Add Prescription</th>
                                <th>View Patient</th>
                            </tr>
                            </thead>
                            <tbody>

                            {patients.map((patient: any) => (
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
                                    <td><Button variant="outline-danger" color="black"
                                                onClick={(e) => this.removeData(patient.id)}>Delete </Button></td>
                                    <td><Button variant="outline-primary" href="/prescription"> Add
                                        prescription </Button></td>
                                    <td><Link to={`/patientTab/${patient.id}`} > View </Link></td>

                                </tr>
                            ))}
                            </tbody>
                        </Table>

                    </main>
                </div>
            )


        }
    }

}

export default Patient;