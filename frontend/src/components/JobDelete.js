import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useParams } from "react-router-dom"
import { useContext } from 'react';
import { API } from '../api';

export default function JobDelete(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [loadingJob, setLoadingJob] = useState(false)
    const [job, setJob] = useState(null)
    const { id } = useParams()
    const { user: { token } } = useContext(AuthContext)


    useEffect(() => {
        setLoadingJob(true)
        function fetchJob(){
                axios.get(API.jobs.retrieve(id))
                .then(res => {
                setJob(res.data)
            })
            .finally(() => {
                setLoadingJob(false)
            })
        }
        fetchJob()
        return () => null
    }, [id])

    console.log(job)

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        axios.delete(API.jobs.delete(id),{
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then(res => {
                console.log(res.data)
                navigate(`/`)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return(
        <div>
            {loading && "Loading..."}
            {loadingJob && "Featching Job Data..."}
            {job &&(
            <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>  
            </form>
            )}     
        </div>
    )
}