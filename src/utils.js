import axios from 'axios';

const API_ENDPOINT = '/api/';

const getAppState = async () => {
    return await axios({
        method: 'GET',
        url: API_ENDPOINT + 'status'
    });
}

const auth = async (u, p) => {
    return await axios({
        method: 'POST',
        url: API_ENDPOINT + 'auth',
        data: {
            u, p
        }
    });
}

const getSong = async (songId) => {
    return await axios({
        method: 'GET',
        url: API_ENDPOINT + 'song/' + songId
    });
}

const logout = async () => {
    return await axios({
        method: 'GET',
        url: API_ENDPOINT + 'logout'
    });
}

export {
    getAppState,
    auth,
    getSong,
    logout
}
