import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { API } from "../api"

function JobListItem({job}){
  const condition = job.Highlight;

  return(  
    <div {...condition ? 'true': "false" } style={{ backgroundColor: condition ? "#FAF884" : "white" }} className="border border-gray-200 px-2 py-3 shadow-lg rounded mb-3">
      <div  className="flex justify-between">
        <NavLink to={`/jobs/${job.id}`}>
            <h4 className="mt-1">
              {job.Company_name}
            </h4>
            <h3 className="text-1xl text-gray-800 font-bold">{job.Position}</h3>
        </ NavLink>
        <div>
            <a className="flex justify-between py-3" href={job.url} target="_blank" rel="noopener noreferrer">
              <h5 className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 shadow-lg">Apply</h5>
            </a>
        </div>
      </div>   
        <p>${job.Min_salary}-${job.max_salary}</p>   
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
          {new Date(job.date_created).toDateString()}
        </div>     
        
    </div>
  )
}

export default function JobList() {
  const[jobs, setJobs] = useState(null)

  useEffect(() => {
    function fetchJobs(){
      axios.get(API.jobs.list)
        .then(res => {
        console.log(res.data)
        setJobs(res.data)
        })
  }
  fetchJobs()
},[])

  return (
    <div>
      {!jobs && "Loading.."}
      {jobs && jobs.map(job => {
        return (
          <JobListItem key={job.id} job={job}/>
        )
      })}
    </div>
  );
}

// export default JobList;