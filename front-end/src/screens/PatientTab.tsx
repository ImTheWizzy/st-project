import React, { useState } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import axios from "axios";

type Mode = 'edit' | 'prescription' | 'referrals' | 'none';
type MyState = {
    error: null,
    id: string,
    patient: any,
    mode: Mode,
    referrals: any[],
    prescriptions: any[],
};

const REFERRALS_URL = `${process.env.REACT_APP_REMOTE_URL}/medicalReferral`;
const PRESCRIPTIONS_URL = `${process.env.REACT_APP_REMOTE_URL}/prescription`;
class PatientTab extends React.Component<{}, MyState> {

    url = window.location.href.split("/");
    patient_id = this.url[this.url.length - 1];

    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            error: null,
            id: this.url[this.url.length - 1],
            patient: {},
            referrals: [],
            prescriptions: [],
            mode: 'none',
            // patient: this.state.patients.filter((item: any) => item.id == this.url[this.url.length - 1])

        }
    }

    patientsArray: any[] = [];
    patient: any;

    async getPatientData() {
        axios.get(`${process.env.REACT_APP_REMOTE_URL}/patient/all`, {
            params:
            {
                doctorUser: localStorage.getItem("session")
            }
        }).then(res => {
            try {
                const data = res.data;
                // Filter out the patient with the specific ID
                this.patientsArray = data.filter((item: any) => item.id == this.patient_id)
                // this.patient=this.patientsArray[0]
                this.setState({
                    ...this.state,
                    patient: this.patientsArray[0]
                })
            } catch (e) { }
        })
    }

    async getPrescriptions() {
        axios.get(`${PRESCRIPTIONS_URL}`, {
            params:
            {
                patient_id: this.patient_id,
            }
        }).then(res => {
            this.setState({ prescriptions: res.data.prescriptions });
        });
    }

    async getReferrals() {
        axios.get(`${REFERRALS_URL}`, {
            params:
            {
                patient_id: this.patient_id,
            }
        }).then(res => {
            this.setState({ referrals: res.data.referrals });
        });
    }

    componentDidMount() {
        this.getPatientData();
        this.getPrescriptions();
        this.getReferrals();
    }

    handleModeChange(mode: Mode) {
        this.setState(
            {
                ...this.state,
                mode: mode === this.state.mode ? 'none' : mode,
            }
        )
    }

    updateLocalPatient() {
        this.patientsArray = [this.state.patient];
        this.setState({
            ...this.state,
            patient: this.patientsArray[0]
        })
    }

    submit(e: any) {
        e.preventDefault();
        console.log(
            {
                id: this.url[this.url.length - 1],
                firstName: this.state.patient?.firstName,
                lastName: this.state.patient?.firstName,
                egn: this.state.patient?.egn,
                phone: this.state.patient?.phone,
                address: this.state.patient?.address,
                birthDate: this.state.patient?.birthDate,
                age: this.state.patient?.age,
                genderType: this.state.patient?.genderType,
                additionalInfo: this.state.patient?.additionalInfo,
            }
        )
        axios.post(`${process.env.REACT_APP_REMOTE_URL}/patient/save`, null,
            {
                params:
                {
                    id: this.url[this.url.length - 1],
                    firstName: this.state.patient?.firstName,
                    lastName: this.state.patient?.lastName,
                    egn: this.state.patient?.egn,
                    phone: this.state.patient?.phone,
                    address: this.state.patient?.address,
                    birthDate: this.state.patient?.birthDate,
                    age: this.state.patient?.age,
                    genderType: this.state.patient?.gender?.genderType,
                    additionalInfo: this.state.patient?.additionalInfo,
                    doctorUser: localStorage.getItem("session")
                }
            }).then(res => {
                console.log(res.data)
                if (res.data.message) {
                    this.updateLocalPatient();
                    alert(res.data.message);
                }
            })
    }

    handleChange(e: any, field: string) {

        const value = e.target.value
        this.setState((prevState: any) => {
            return {
                patient: {
                    ...prevState.patient,
                    [field]: value,
                }
            }
        });
    }

    handleGenderChange(e: any, field: string) {
        const value = e.target.value
        this.setState((prevState: any) => {
            return {
                patient: {
                    ...prevState.patient,
                    gender: { genderType: value }
                }
            }
        });
    }

    render() {
        return (
            <div>
                <Row className="d-flex justify-content-center align-items-start">
                    <Col xs="4" className="bg-theme-dark rounded">
                        <h1 className="text-center">Patient</h1>
                    </Col>
                </Row>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
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
                <Button onClick={e => this.handleModeChange('edit')}>Edit</Button>
                <Button onClick={e => this.handleModeChange('referrals')} className="mr-2 ml-2">Show Medical Referrals</Button>
                <Button onClick={e => this.handleModeChange('prescription')}>Show Prescriptions</Button>
                <div className="section" id="edit-section">
                    {this.state.mode === 'edit' && (
                        <Form onSubmit={(e) => this.submit(e)}>
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name"
                                    value={this.state.patient?.firstName}
                                    onChange={e => this.handleChange(e, 'firstName')}

                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name"
                                    value={this.state.patient?.lastName}
                                    onChange={e => this.handleChange(e, 'lastName')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="egn">
                                <Form.Label>EGN</Form.Label>
                                <Form.Control type="text" placeholder="EGN"
                                    value={this.state.patient?.egn}
                                    onChange={e => this.handleChange(e, 'egn')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address"
                                    value={this.state.patient?.address}
                                    onChange={e => this.handleChange(e, 'address')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="phone"
                                    value={this.state.patient?.phone}
                                    onChange={e => this.handleChange(e, 'phone')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="birthDate">
                                <Form.Label>Birth date</Form.Label>
                                <Form.Control type="text" placeholder="Birth date"
                                    value={this.state.patient?.birthDate}
                                    onChange={e => this.handleChange(e, 'birthDate')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" placeholder="Age"
                                    value={this.state.patient?.age}
                                    onChange={e => this.handleChange(e, 'age')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="genderType">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="text" placeholder="Gender"
                                    value={this.state.patient?.gender?.genderType}
                                    onChange={e => this.handleGenderChange(e, 'genderType')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="additionalInfo">
                                <Form.Label>Additional information</Form.Label>
                                <Form.Control as="textarea" placeholder="info"
                                    rows={3}
                                    value={this.state.patient?.additionalInfo}
                                    onChange={e => this.handleChange(e, 'additionalInfo')} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save changes
                            </Button>
                        </Form>
                    )}
                </div>
                {this.state.mode === 'prescription' && <div className="section">
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Unique Prescription Number</th>
                                <th>Date</th>
                                <th>Doctor</th>
                                <th>Doctor ID</th>
                                <th>Medicine</th>
                                <th>Comment</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.prescriptions.map((prescription: any) => (
                                <tr key={prescription.id}>
                                    <td>{prescription.uniquePrescriptionNumber}</td>
                                    <td>{prescription.date}</td>
                                    <td>{`${prescription.doctor.firstName} ${prescription.doctor.lastName}`}</td>
                                    <td>{prescription.doctor.uniqueDoctorNumber}</td>
                                    <td>{prescription.medicine}</td>
                                    <td>{prescription.comment}</td>
                                    <td>{prescription.results}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}
                {this.state.mode === 'referrals' && <div className="section">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Unique Referral Number</th>
                                <th>Date</th>
                                <th>Doctor</th>
                                <th>Doctor ID</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.referrals.map((referral: any) => (
                                <tr key={referral.id}>
                                    <td>{referral.uniqueReferralNumber}</td>
                                    <td>{referral.date}</td>
                                    <td>{`${referral.doctor.firstName} ${referral.doctor.lastName}`}</td>
                                    <td>{referral.doctor.uniqueDoctorNumber}</td>
                                    <td>{referral.comment}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}
            </div>
        )
    }
}

export default PatientTab