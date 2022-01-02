import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
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
}, [id])

return(
    <div>
        {!job && "Loading.."}
        {job && (    
            <div>
                <div className="border border-gray-200 px-2 py-3 shadow-sm">
                <div className="flex justify-between">
                    <NavLink to={`/jobs/${job.id}`}>
                        <h4 className="mt-1">
                            {job.Company_name}
                        </h4>
                        <h3 className="text-2xl text-gray-800 font-bold">{job.Position}</h3>
                    </ NavLink>
                <div>
                    <a className="flex justify-between py-3" href={job.url} target="_blank" rel="noopener noreferrer">
                    Apply
                    </a>
                </div>
            </div>   
                {/* {job.remote && (
                <p className="text-gray-500">
                    {job.remote}
                </p>
                )} */}
                {job.Location && (
                <p className="text-gray-500">
                    {job.Location}
                </p>
                )}
                <div className="text-gray-600 text-sm">
                    {new Date(job.date_created).toDateString()}📌
                </div> 

                <div className="mt-5">
                    <h3 className="text-1xl text-gray-800 font-bold">Job Description</h3>
                        {job.Description} 
                    <h3 className="text-1xl mt-2 text-gray-800 font-bold">Salary and compensation</h3>
                        ${job.Min_salary}-${job.max_salary}/year
                </div>
                    
        </div>
            {/* <h1>{job.Position}</h1>
            <h4>${job.Min_salary}-${job.max_salary}</h4>
            <h4>{job.Primary_Skills}</h4>
            <h4>{job.Skills_tag}</h4> */}
            <NavLink to={`/jobs/${id}/update`}>
                    Update
            </NavLink>
            <br />
            <NavLink to={`/jobs/${id}/delete`}>
                    Delete
            </NavLink>
        </div>        
        )}
        
    </div>
)




}