import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';

import moment from 'moment';
class AppointmentList extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Dr. {this.props.selectedDoctor.firstname} {this.props.selectedDoctor.lastname}</h1>
                    <h5>{this.props.selectedDoctor.email}</h5>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Kind</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.appointments.map((appointment, idx) => (
                                <tr key={appointment.id.toString()}>
                                    <td>{idx + 1}</td>
                                    <td>{appointment.patientName}</td>
                                    <td>{moment(appointment.time).format('h : mm A')}</td>
                                    <td>{appointment.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Jumbotron>
            </Container>
        )
    }
}
AppointmentList.PropTypes = {
    selectedDoctor: PropTypes.object.isRequired,
    appointments: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    selectedDoctor: state.doctors.selectedDoctor,
    appointments: state.doctors.appointments,
});

export default connect(mapStateToProps)(AppointmentList);