import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { API } from "../api"
import New from "../assets/new.gif";

function JobListItem({job}){
  const condition = job.Highlight;
  const showlogo = job.show_logo

  return(  

    <NavLink to={`/jobs/${job.id}`}>
      <div {...condition ? 'true': "false" } style={{ backgroundColor: condition ? "#FAF884" : "white" }} className="border-solid border-2 md:px-2 md:py-3 shadow-lg rounded-2xl mb-3">
          <td className="flex justify-between">
            <td className="flex">
              <td className="py-5 px-3">
                  <div {...showlogo ? 'true':"false" } style={{visibility: showlogo ? "visible" : "hidden"}}className="h-20 w-20 rounded-full border-2">
                    <img src={job.company_logo}  alt={job.company_logo} />
                  </div>
              </td>   
                <td className="p-2">
                <div  className="flex">
                      <div className="mt-1">
                        <div className="inline">     
                          <h3 className="flex">   
                            {job.Company_name} <img src={New} alt="new" width="40" height="20" />
                          </h3> 
                          <h3 className="text-xl text-black font-bold">{job.Position}</h3>
                        </div>     
                        
                      </div>
                      
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
              </td>
            </td>
            <td className="items-center md:px-4 md:py-2 md:my-5 my-auto">
                <div className="flex justify-between py-3">
                  <h5 className="border-solid border-2 font-bold py-2 px-4 shadow-lg rounded-lg">{job.Skills_tag}</h5>
                </div>
            </td>
            <td className="items-center md:px-4 md:py-2 md:my-5 my-auto">
                <a className="flex justify-between py-3" href={job.url} target="_blank" rel="noopener noreferrer">
                  <h5 className="border-solid border-2 border-black bg-black hover:text-black hover:bg-white text-white font-bold py-2 px-4 shadow-lg rounded-lg">Apply</h5>
                </a>
            </td>
          </td>
                        
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