import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';

import { fetchDoctorList, displayDoctorAppointments, updateSelectedDoctor } from '../actions/doctorActions';

class DoctorList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchDoctorList();
    }

    handleClick(e, obj) {
        this.props.updateSelectedDoctor(obj);
        this.props.displayDoctorAppointments(obj.id);
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Notable</h1>
                    <h5>PHYSICIANS</h5>
                    <ListGroup>
                        {this.props.doctors.map(doctor => (
                            <ListGroup.Item action key={doctor.id.toString()} onClick={e => this.handleClick(e, doctor)}>
                                Dr. {doctor.firstname} {doctor.lastname}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Jumbotron>
            </Container>
        )
    }
}

DoctorList.PropTypes = {
    fetchDoctorList: PropTypes.func.isRequired,
    updateSelectedDoctor: PropTypes.func.isRequired,
    displayDoctorAppointments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    doctors: state.doctors.list
});

export default connect(mapStateToProps, { fetchDoctorList, displayDoctorAppointments, updateSelectedDoctor })(DoctorList);