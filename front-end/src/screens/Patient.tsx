import Table from 'react-bootstrap/Table';
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button, Dropdown, DropdownButton, FormControl} from "react-bootstrap";
import axios from "axios";

class Patient extends React.Component {
    // @ts-ignore

        state = {
            error: null,
            patients: [],
            searchType:"FirstName",
            searchValue:"",

        }


    componentDidMount() {
        const getPatient = async () =>
        {
            this.setState({loading:true});
            const patients = await axios.get(`http://localhost:8081/patient/all`);
            this.setState({patients: patients.data});
            this.setState({loading: false})
        };
        getPatient();

    };
    // @ts-ignore
    removeData = (id, e) =>
    {
        // @ts-ignore
        axios.delete(`http://localhost:8081/patient/delete?id=${id}`)
            .then(res => {
                debugger
                // @ts-ignore
                const newPatients = this.state.patients.filter(patient => patient.id !== id)
                console.log(newPatients)
                // @ts-ignore
                this.setState({ patients: newPatients });

            }).catch(err => {
            console.log(err)
        })

    }
    // @ts-ignore
    onSearch = (e) => {
        e.preventDefault();
        // @ts-ignore
        if (this.state.searchType === "EGN")
        {
            axios.get(`http://localhost:8081/patient/search/egn?egn=${e.target.value}`)
                .then(res => {

                    // @ts-ignore
                    this.setState({ patients: [res.data]});

                }).catch(err => {
                console.log(err)
            });
        }
        else { // @ts-ignore
            if (this.state.searchType === "FirstName")
            {
                axios.get(`http://localhost:8081/patient/search/firstName?firstName=${e.target.value}`)
                    .then(res => {

                        // @ts-ignore
                        this.setState({ patients: [res.data] });



                    }).catch(err => {
                    console.log(err)
                });
            }
        }

    }
    render() {
        const {error, patients} = this.state;

        if (error) {
            // @ts-ignore
            return (
                <div></div>
            )
        } else {
            return (
                <div>
                    <header>
                        <h2>
                            Patient's information page
                        </h2>
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
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            {patients.map((patient: { id: React.Key | null | undefined; firstName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; lastName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; egn: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; address: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; phone: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; birthDate: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; age: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; gender: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; additionalInfo: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.firstName}</td>
                                    <td>{patient.lastName}</td>
                                    <td>{patient.egn}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.phone}</td>
                                    <td>{patient.birthDate}</td>
                                    <td>{patient.age}</td>
                                    <td></td>
                                    <td>{patient.additionalInfo}</td>
                                    <Button variant="outline-danger" color="black"
                                            onClick={(e) => this.removeData(patient.id, e)}>Delete </Button>
                                    <Button variant="link" href="/prescription"> Add prescription </Button>
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
