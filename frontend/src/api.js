const baseURL = "http://127.0.0.1:8000"
const apiURL = `${baseURL}/api`

export const API = {
    auth: {
        login: `${baseURL}/api-token-auth/`
    },
    jobs: {
        list: `${apiURL}/jobs/`,
        create:`${apiURL}/create-job/`,
        update: id => `${apiURL}/job/${id}/update`,
        delete: id => `${apiURL}/job/${id}/delete`,
        retrieve: id => `${apiURL}/job/${id}/`,

    }
}