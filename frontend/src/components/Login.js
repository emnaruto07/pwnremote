import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import axios from "axios"
import { API } from '../api';
import authService from '../services/authentication';

export default function Login(){
    const [loading, setLoading] = useState(false)

    function handleSubmit(values) {
        setLoading(true)
        axios.post(API.auth.login, values)
            .then(res => {
                authService.login(res.data.token)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return(
        <div>
            {loading && "Loading..."}
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field id="username" name="username" placeholder="username" />
                    {touched.username && errors.username && <div>{errors.username}</div>}

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" type="password" />
                    {touched.password && errors.password && <div>{errors.password}</div>}
                    
                    <button type="submit">Submit</button>
                </Form>
                )}    
            </Formik>
        </div>
    )
}