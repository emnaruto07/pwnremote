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
                    sticky_month: job.sticky_month,
                }}
                onSubmit={handleSubmit}>
                {({ values }) => (
                    <Form>
                    <h3 className='font-bold mx-auto text-center mt-2'>JOB DETAILS</h3>
                    <Field name="Company_name">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Company Name</span>
                            <input
                            {...field}
                              type="text"
                              className="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                              "
                              placeholder="Facebook"
                            />
                          </label>
                        )}
                    </Field>
                   
                    <Field name="Position">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Position</span>
                            <input
                            {...field}
                              type="text"
                              className="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                              "
                              placeholder="Penetration Tester"
                            />
                          </label>
                        )}
                    </Field>
                    
                    <Field name="Employment_type">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Employment Type</span>
                            <select 
                            {...field}
                            className="
                                block
                                w-full
                                mt-1
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                            "
                            >
                                <option value="">Select a Employment Type</option>
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Internship">Internship</option>
                            </select>
                          </label>
                        )}
                    </Field>
                    
                    <Field name="Primary_Skills">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Primary Skill</span>
                            <select
                            {...field}
                            className="
                                block
                                w-full
                                mt-1
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                            "
                            >
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
                            </select>
                          </label>
                        )}
                    </Field>
                    <Field name="Skills_tag">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Skills Tag</span>
                            <input
                            {...field}
                              type="text"
                              className="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                              "
                              placeholder="burp, scripting"
                            />
                          </label>
                        )}
                    </Field>
                  
                    <Field name="Location">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Location</span>
                            <input
                            {...field}
                              type="text"
                              className="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                              "
                              placeholder="Worldwide"
                            />
                          </label>
                        )}
                    </Field>
                   
                    <Field name="Min_salary">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Minimum Salary</span>
                            <select
                            {...field}
                            className="
                                block
                                w-full
                                mt-1
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                            "
                            >
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
                            </select>
                          </label>
                        )}
                    </Field>
                    <Field name="max_salary">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Maximum Salary</span>
                            <select
                            {...field}
                            className="
                                block
                                w-full
                                mt-1
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                            "
                            >
                                <option value="">Maximum per year</option>
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
                            </select>
                          </label>
                        )}
                    </Field>
                    <Field name="Description">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Job Description</span>
                            <textarea
                            {...field}
                              className="
                                mt-1
                                block
                                w-full
                                h-24
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                              "
                            ></textarea>
                          </label>
                        )}
                    </Field>
                   
                    <Field name="url">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Apply Url</span>
                            <input
                            {...field}
                              type="text"
                              className="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                              "
                              placeholder="https://www.example.com/apply"
                            />
                          </label>
                        )}
                    </Field>
                 
                    <Field name="email">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Apply Email</span>
                            <input
                            {...field}
                              type="text"
                              className="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                              "
                              placeholder="apply@example.com"
                            />
                          </label>
                        )}
                    </Field>
                 
                    <h3 className='font-bold mx-auto text-center mt-2'>DESIGN YOUR POST</h3>
                
                    <Field name="show_logo">
                        {({ field, form }) => (
                            <div className="block">
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input
                                        {...field}
                                        type="checkbox"
                                        checked={field.value}
                                        className="
                                            rounded
                                            bg-gray-200
                                            border-transparent
                                            focus:border-transparent focus:bg-gray-200
                                            text-gray-700
                                            focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                                        "
                                        />
                                        <span className="ml-2">Show Logo</span>
                                    </label>
                                </div>
                            </div>
                        )}
                    </Field>
                  
                    <Field name="Highlight">
                        {({ field, form }) => (
                            <div className="block">
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input
                                        {...field}
                                        type="checkbox"
                                        checked={field.value}
                                        className="
                                            rounded
                                            bg-gray-200
                                            border-transparent
                                            focus:border-transparent focus:bg-gray-200
                                            text-gray-700
                                            focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                                        "
                                        />
                                        <span className="ml-2">Highlight your post with yellow (+$25) </span>
                                    </label>
                                </div>
                            </div>
                        )}
                    </Field>
                    <Field name="sticky_day">
                        {({ field, form }) => (
                            <div className="block">
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input
                                        {...field}
                                        type="checkbox"
                                        checked={field.value}
                                        className="
                                            rounded
                                            bg-gray-200
                                            border-transparent
                                            focus:border-transparent focus:bg-gray-200
                                            text-gray-700
                                            focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                                        "
                                        />
                                        <span className="ml-2">📌 Sticky post for a day</span>
                                    </label>
                                </div>
                            </div>
                        )}
                    </Field>
                  
                    <Field name="sticky_week">
                        {({ field, form }) => (
                            <div className="block">
                                <div className="mt-2">
                                </div>
                                <label className="inline-flex items-center">
                                <input
                                {...field}
                                type="checkbox"
                                checked={field.value}
                                className="
                                    rounded
                                    bg-gray-200
                                    border-transparent
                                    focus:border-transparent focus:bg-gray-200
                                    text-gray-700
                                    focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                                "
                                />
                                    <span className="ml-2">📌 Sticky post for a week</span>
                                </label>
                            </div>
                        )}
                    </Field>
                    <Field name="sticky_month">
                        {({ field, form }) => (
                            <div className="block">
                                <div className="mt-2">
                                </div>
                                <label className="inline-flex items-center">
                                <input
                                {...field}
                                type="checkbox"
                                checked={field.value}
                                className="
                                    rounded
                                    bg-gray-200
                                    border-transparent
                                    focus:border-transparent focus:bg-gray-200
                                    text-gray-700
                                    focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                                "
                                />
                                    <span className="ml-2">📌 Sticky post for a month</span>
                                </label>
                            </div>
                        )}
                    </Field> 
                    <button className="bg-black border-solid border-2 border-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 shadow-md mt-4 rounded-lg"type="submit">Update Post</button>
                </Form>
                )}    
            </Formik>
            )}
            
        </div>
    )
}