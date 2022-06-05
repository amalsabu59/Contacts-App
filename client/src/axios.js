import axios from 'axios'
//CREATED A BASE URL FOR API CALL
const instance = axios.create({
    baseURL:'http://localhost:8001/'
})

export default instance;