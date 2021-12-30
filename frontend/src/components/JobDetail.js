import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API } from "../api"

export default function JobDetail(){
    const [job, setJob] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        function fetchJobList(){
            axios.get(API.jobs.retrieve(id))
            .then(res => {
            console.log(res.data)
            setJob(res.data)
        })
    }
    fetchJobList()
}, [])

return(
    <div>
        {!job && "Loading.."}
        {job && (
            <div>
                <h1>{job.Position}</h1>
                <h4>${job.Min_salary}-${job.max_salary}</h4>
                <h4>{job.Primary_Skills}</h4>
                <h4>{job.Skills_tag}</h4>
            </div>
        )}
    </div>
)




}