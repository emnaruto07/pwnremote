import { Formik, Field, Form } from 'formik';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useParams } from "react-router-dom"
import { useContext } from 'react';
import { API } from '../api';

export default function JobUpdate(){
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

    function handleSubmit(values) {
        setLoading(true)
        axios.put(API.jobs.update(id), values, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then(res => {
                console.log(res.data)
                navigate(`/jobs/${id}`)
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
                <Formik
                initialValues={{
                    Company_name: job.Company_name,
                    Position: job.Position,
                    Employment_type: job.Employment_type, 
                    Primary_Skills: job.Primary_Skills,
                    Skills_tag: job.Skills_tag,
                    Location: job.Location,
                    remote: true,
                    available: true,
                    Min_salary: job.Min_salary,
                    max_salary: job.max_salary,
                    Description: job.Description,
                    // company_logo: '',
                    user: '',
                    url: job.url,
                    email: job.email,
                    show_logo: job.show_logo,
                    Highlight: job.Highlight,
                    sticky_day: job.sticky_day,
                    sticky_week: job.sticky_week,
                    sticky_month: job.sticky_month
                }}
                onSubmit={handleSubmit}>
                {({ values }) => (
                <Form>
                    <label htmlFor="Company_name">Company Name</label>
                    <Field id="Company_name" name="Company_name" placeholder="Facebook" />

                    <label htmlFor="Position">Position</label>
                    <Field id="Position" name="Position" placeholder="Security Analyst" />
                    <Field component="select"
                    id="Employment_type"
                    name="Employment_type">
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Temporary">Temporary</option>
                        <option value="Internship">Internship</option>
                    </Field>
                    <label htmlFor="Primary_Skills">Primary Skill</label>
                    <Field component="select"
                    id="Primary_Skills"
                    name="Primary_Skills">
                        <option value="">Select a Primary Skill</option>
                        <option value="Web-Security">Web-Security</option>
                        <option value="Researcher">Researcher</option>
                        <option value="SOC/SIEM">SOC/SIEM</option>
                        <option value="VA/PT">VA/PT</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Quality Assurance">Quality Assurance</option>
                        <option value="Forensics/IR">Forensics/IR</option>
                        <option value="Mobile Security">Mobile Security</option>
                        <option value="Cloud Security">Cloud Security</option>
                        <option value="Infrastructure Security">Infrastructure Security</option>
                        <option value="Code Source Review">Code Source Review</option>
                        <option value="Hardware/IOT">Hardware/IOT</option>
                        <option value="DevOps/DevSecOps">DevOps/DevSecOps</option>
                        <option value="Sales/Marketing">Sales/Marketing</option>
                    </Field>
                    <label htmlFor="Skills_tag">Skills Tag</label>
                    <Field id="Skills_tag" name="Skills_tag" placeholder="burp, scripting" />
                    <Field type="checkbox" name="remote" />
                    <label htmlFor="remote">remote</label>
                    <label htmlFor="Location">Location</label>
                    <Field id="Location" name="Location"/>
                    <label htmlFor="Min_salary">Minimum Salary</label>
                    <Field component="select"
                    id="Min_salary"
                    name="Min_salary">
                        <option value="">Minimum per year</option>
                        <option value="0">USD 0 per year</option>
                        <option value="10000">USD 10,000 per year</option>
                        <option value="20000">USD 20,000 per year</option>
                        <option value="30000">USD 30,000 per year</option>
                        <option value="40000">USD 40,000 per year</option>
                        <option value="50000">USD 50,000 per year</option>
                        <option value="60000">USD 60,000 per year</option>
                        <option value="70000">USD 70,000 per year</option>
                        <option value="80000">USD 80,000 per year</option>
                        <option value="90000">USD 90,000 per year</option>
                        <option value="100000">USD 100,000 per year</option>
                        <option value="110000">USD 110,000 per year</option>
                        <option value="120000">USD 120,000 per year</option>
                        <option value="130000">USD 130,000 per year</option>
                        <option value="140000">USD 140,000 per year</option>
                        <option value="150000">USD 150,000 per year</option>
                        <option value="160000">USD 160,000 per year</option>
                        <option value="170000">USD 170,000 per year</option>
                        <option value="180000">USD 180,000 per year</option>
                        <option value="190000">USD 190,000 per year</option>
                        <option value="200000">USD 200,000 per year</option>
                        <option value="210000">USD 210,000 per year</option>
                        <option value="220000">USD 220,000 per year</option>
                        <option value="230000">USD 230,000 per year</option>
                        <option value="240000">USD 240,000 per year</option>
                        <option value="250000">USD 250,000 per year</option>
                        <option value="260000">USD 260,000 per year</option>
                        <option value="270000">USD 270,000 per year</option>
                        <option value="280000">USD 280,000 per year</option>
                        <option value="290000">USD 290,000 per year</option>
                        <option value="300000">USD 300,000 per year</option>
                        <option value="310000">USD 310,000 per year</option>
                        <option value="320000">USD 320,000 per year</option>
                        <option value="330000">USD 330,000 per year</option>
                        <option value="340000">USD 340,000 per year</option>
                        <option value="350000">USD 350,000 per year</option>
                        <option value="360000">USD 360,000 per year</option>
                        <option value="370000">USD 370,000 per year</option>
                        <option value="380000">USD 380,000 per year</option>
                        <option value="390000">USD 390,000 per year</option>
                        <option value="400000">USD 400,000 per year</option>
                    </Field>
                    <label htmlFor="max_salary">Maximum Salary</label>
                    <Field component="select"
                    id="max_salary"
                    name="max_salary">
                        <option value="">Minimum per year</option>
                        <option value="0">USD 0 per year</option>
                        <option value="10000">USD 10,000 per year</option>
                        <option value="20000">USD 20,000 per year</option>
                        <option value="30000">USD 30,000 per year</option>
                        <option value="40000">USD 40,000 per year</option>
                        <option value="50000">USD 50,000 per year</option>
                        <option value="60000">USD 60,000 per year</option>
                        <option value="70000">USD 70,000 per year</option>
                        <option value="80000">USD 80,000 per year</option>
                        <option value="90000">USD 90,000 per year</option>
                        <option value="100000">USD 100,000 per year</option>
                        <option value="110000">USD 110,000 per year</option>
                        <option value="120000">USD 120,000 per year</option>
                        <option value="130000">USD 130,000 per year</option>
                        <option value="140000">USD 140,000 per year</option>
                        <option value="150000">USD 150,000 per year</option>
                        <option value="160000">USD 160,000 per year</option>
                        <option value="170000">USD 170,000 per year</option>
                        <option value="180000">USD 180,000 per year</option>
                        <option value="190000">USD 190,000 per year</option>
                        <option value="200000">USD 200,000 per year</option>
                        <option value="210000">USD 210,000 per year</option>
                        <option value="220000">USD 220,000 per year</option>
                        <option value="230000">USD 230,000 per year</option>
                        <option value="240000">USD 240,000 per year</option>
                        <option value="250000">USD 250,000 per year</option>
                        <option value="260000">USD 260,000 per year</option>
                        <option value="270000">USD 270,000 per year</option>
                        <option value="280000">USD 280,000 per year</option>
                        <option value="290000">USD 290,000 per year</option>
                        <option value="300000">USD 300,000 per year</option>
                        <option value="310000">USD 310,000 per year</option>
                        <option value="320000">USD 320,000 per year</option>
                        <option value="330000">USD 330,000 per year</option>
                        <option value="340000">USD 340,000 per year</option>
                        <option value="350000">USD 350,000 per year</option>
                        <option value="360000">USD 360,000 per year</option>
                        <option value="370000">USD 370,000 per year</option>
                        <option value="380000">USD 380,000 per year</option>
                        <option value="390000">USD 390,000 per year</option>
                        <option value="400000">USD 400,000 per year</option>
                    </Field>
                    <label htmlFor="Description">Job Description</label>
                    <Field as='textarea' id="Description" name="Description"/>
                    <label htmlFor="url">Apply Url</label>
                    <Field name="url" type="url" />
                    <label htmlFor="email">Apply Email</label>
                    <Field name="email" type="email" />
                    <Field type="checkbox" name="show_logo" />
                    <label htmlFor="show_logo">Show Logo</label>
                    <Field type="checkbox" name="Highlight" />
                    <label htmlFor="Highlight">Highlight</label>
                    <Field type="checkbox" name="sticky_day" />
                    <label htmlFor="sticky_day">Sticky for a day</label>
                    <Field type="checkbox" name="sticky_week" />
                    <label htmlFor="sticky_week">Sticky for a week</label>
                    <Field type="checkbox" name="sticky_month" />
                    <label htmlFor="sticky_month">Sticky for a month</label>
                    
                    <button type="submit">Submit</button>
                </Form>
                )}    
            </Formik>
            )}
            
        </div>
    )
}