import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { API } from "../api"
import New from "../assets/new.gif";

function JobListItem({job}){
  const condition = job.Highlight;

  return(  
      <div {...condition ? 'true': "false" } style={{ backgroundColor: condition ? "#FAF884" : "white" }} className="border border-gray-200 px-2 py-3 shadow-lg rounded mb-3">
        <div  className="flex justify-between">
          <NavLink to={`/jobs/${job.id}`}>
              <h4 className="mt-1">
                <div className="flex">
                  {job.Company_name} <img src={New} alt="new" width="40" height="20" />
                </div>
                
              </h4>
              <h3 className="text-xl text-black font-bold">{job.Position}</h3>
          </ NavLink>
          <div>
              <a className="flex justify-between py-3" href={job.url} target="_blank" rel="noopener noreferrer">
                <h5 className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 shadow-lg rounded-lg">Apply</h5>
              </a>
          </div>
        </div>
        <div className="flex">
          <p>${job.Min_salary}-${job.max_salary}</p>   
            {/* {job.remote && (
              <p className="text-gray-500">
                {job.remote}
              </p>
            )} */}
            {job.Location && (
              <p className="font-semibold ml-2">
                {job.Location}
              </p>
            )}     
        </div>   
          
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
  return () => null
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