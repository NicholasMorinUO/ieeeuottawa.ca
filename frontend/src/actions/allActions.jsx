import axios from 'axios';

const httpClient = axios.create();
httpClient.defaults.timeout = 600000;

const BACKEND_URL_DEV = 'http://localhost:3000/';

const BACKEND_URL = BACKEND_URL_DEV;

export function getUsers() {
    return dispatch => {
        return axios
            .get(`${BACKEND_URL}users`)
            .then(response => {
                dispatch({ type: 'getUsersSuccess', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'getUsersFailed', payload: error });
                throw error;
            });
    };
}
