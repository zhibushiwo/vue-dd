import axios from 'axios'

const BASE_URL = '/api'

export const request = createBaseInstance()

function createBaseInstance() {
    const instance = axios.create({
        baseURL: BASE_URL
    })
    instance.interceptors.response.use(handleResponse,handleError)
    return instance
}

function handleError(e) {
    throw e
}
function handleResponse(res) {
    return res.data
}