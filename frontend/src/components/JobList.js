import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { API } from "../api"

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
      {jobs && jobs.map((job, i) => {
        return (
          <div key={i}>
            <div className="container">
              <NavLink to={`/jobs/${job.id}`}>{job.Company_name}:{job.Position}</ NavLink>
            </div>
          </div>
        )
      })}
    </div>
  );
}

// export default JobList;