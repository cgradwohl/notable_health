import { FETCH_DOCTORS, FETCH_APPOINTMENTS, UPDATE_SELECTED_DOCTOR } from '../actions/action-types';

const initialState = {
    selectedDoctor: {},
    list: [],
    appointments: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOCTORS:
        return {
            ...state,
            list: action.payload,
        };
    case UPDATE_SELECTED_DOCTOR: 
        return {
            ...state,
            selectedDoctor: action.payload
        }
    case FETCH_APPOINTMENTS:
        return {
            ...state,
            appointments: action.payload,
        };
    default:
        return state;
  }
}