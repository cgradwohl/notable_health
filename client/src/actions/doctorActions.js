import { FETCH_DOCTORS, FETCH_APPOINTMENTS, UPDATE_SELECTED_DOCTOR } from './action-types';
import { status, json } from '../helpers';

export const fetchDoctorList = () => dispatch => {
    fetch('/physicians')
        .then(status)
        .then(json)
        .then(doctors => {
            dispatch({
                type: FETCH_DOCTORS,
                payload: doctors
            });
            dispatch({
                type: UPDATE_SELECTED_DOCTOR,
                payload: doctors[0]
            });
        })
}

export const updateSelectedDoctor = (obj) => dispatch => {
    dispatch({
        type: UPDATE_SELECTED_DOCTOR,
        payload: obj
    });
}

export const displayDoctorAppointments = (id) => dispatch => {
    fetch("/appointments?id="+id)
    .then(status)
    .then(json)
    .then(appointments => dispatch({
        type: FETCH_APPOINTMENTS,
        payload: appointments
    }));
}