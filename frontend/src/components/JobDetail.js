import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router"
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
                <div className="border border-gray-200 px-2 py-3 shadow-lg rounded-2xl">
                <div className="flex justify-between">
                    <div>
                        <h4 className="mt-1">
                            {job.Company_name}
                        </h4>
                        <h3 className="text-2xl text-black subpixel-antialiased font-bold">{job.Position}</h3>
                    </ div>
                {/* <div>
                    <a className="flex justify-between py-3" href={job.url} target="_blank" rel="noopener noreferrer">
                    <h5 className="border-solid border-2 border-black bg-black hover:text-black hover:bg-white text-white font-bold py-2 px-4 shadow-lg rounded-lg">Apply</h5>
                    </a>
                </div> */}
            </div>   
                
                <div className="text-gray-600 text-sm">
                    {new Date(job.date_created).toDateString()}📌
                </div> 

                <div className="mt-5">
                    <h3 className="text-1xl text-black subpixel-antialiased font-semibold">Job Description</h3>
                        {job.Description} 
                    <h3 className="text-1xl mt-2 text-black subpixel-antialiased font-semibold">Salary and compensation</h3>
                        ${job.Min_salary}-${job.max_salary}/year
                    <h3 className="text-1xl mt-2 text-black subpixel-antialiased font-semibold">Location</h3>
                        {job.Location && (
                        <p className="text-gray-500">
                            {job.Location}
                        </p>
                        )}
                    <div className="mt-4 flex">
                        <div className="m-auto w-5/6">
                            <a className=" text-center py-3" href={job.url} target="_blank" rel="noopener noreferrer">
                                <h5 className="border-solid border-2 border-black bg-black hover:text-black hover:bg-white text-white font-bold py-2 shadow-lg rounded-lg">Apply for the job</h5>
                            </a>
                        </div>
                       
                    </div>
                    {/* <h3 className="text-1xl text-black text-center m-2 subpixel-antialiased font-semibold">OR</h3>
                    <h3 className="text-1xl text-black text-center subpixel-antialiased font-semibold">Email: <span className="font-">{job.email}</span></h3> */}
                </div>
                    
        </div>
            <div className="flex items-center mt-2">
            <NavLink to={`/jobs/${id}/update`}>
                    <h5 className="border-solid border-2 border-black bg-black hover:text-black hover:bg-white text-white font-bold py-2 px-4 shadow-md rounded-lg">Update</h5>
            </NavLink>
            {/* {!job.sponsored && (
                <NavLink to={`/jobs/${id}/sponsor`}>
                    <h5 className="border-solid border-2 border-orange-600 ml-2 bg-orange-600 hover:bg-white hover:text-orange-600 text-white font-bold py-2 px-4 shadow-md rounded-lg">Boost Post</h5>
                </NavLink>
            )
            }       */}
            <NavLink to={`/jobs/${id}/delete`}>
                <h5 className="ml-2 bg-red-700 hover:bg-white hover:text-red-700 text-white font-bold py-2 px-4 rounded-lg border-solid border-2 border-red-700 shadow-md">Delete</h5>
            </NavLink>
            </div>
            
        </div>        
        )}
        
    </div>
)



}