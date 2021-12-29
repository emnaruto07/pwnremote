const baseURL = "http://127.0.0.1:8000/api"

export const API = {
    jobs: {
        list: `${baseURL}/jobs/`,
        create:`${baseURL}/create-job/`,
        update: id => `${baseURL}/job/${id}/update`,
        delete: id => `${baseURL}/job/${id}/delete`,
        retrieve: id => `${baseURL}/job/${id}/`,

    }
}