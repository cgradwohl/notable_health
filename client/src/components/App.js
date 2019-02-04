import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DoctorList from './DoctorList';
import AppointmentList from './AppointmentList';


class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <DoctorList />
                    </Col>
                    <Col>
                        <AppointmentList />
                    </Col>
                </Row>
            </Container>
        );
    }
  }

export default App;

