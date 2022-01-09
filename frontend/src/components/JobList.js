import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { API } from "../api"
import New from "../assets/new.gif";

function JobListItem({job}){
  const condition = job.Highlight;

  return(  
    <NavLink to={`/jobs/${job.id}`}>
      <div {...condition ? 'true': "false" } style={{ backgroundColor: condition ? "#FAF884" : "white" }} className="border-solid border-2 border-black px-2 py-3 shadow-lg rounded-2xl mb-3">
        <div  className="flex justify-between">
              <h4 className="mt-1">
                <div className="inline">
                  <div className="flex">
                  {job.Company_name} <img src={New} alt="new" width="40" height="20" />
                  </div> 
                  <h3 className="text-xl text-black font-bold">{job.Position}</h3>
                </div>     
              </h4>
              
          {/* <div>
              <a className="flex justify-between py-3" href={job.url} target="_blank" rel="noopener noreferrer">
                <h5 className="border-solid border-2 border-black bg-black hover:text-black hover:bg-white text-white font-bold py-2 px-4 shadow-lg rounded-lg">Apply</h5>
              </a>
          </div> */}
        </div>
        <div className="flex">
          <p>${job.Min_salary}-${job.max_salary}</p>   
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
    </ NavLink>

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