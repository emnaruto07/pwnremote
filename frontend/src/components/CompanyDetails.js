import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import axios from "axios";
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
// import { useParams } from "react-router"
import { API } from '../api';

export function CompanyDetails(){
    const [loading, setLoading] = useState(false)
    const { user: { token } } = useContext(AuthContext)
    // const { id } = useParams()

    function handleSubmit(values) {
        setLoading(true)
        axios.post(API.company.companySave, values, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
            .then(res => {
                console.log(res.data)

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
                    company_twitter: '',
                    company_email: '',
                    invoice_email: '',
                    invoice_address: '',
                }}
                onSubmit={handleSubmit}>
                {({ values }) => (
                    <Form>
                    <h3 className='border-solid border-2 border-black font-bold py-2 px-4 text-center mt-4 mb-4 rounded-lg'>COMPANY DETAILS</h3>
                    <Field name="company_twitter">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Company twitter</span>
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
                              placeholder="https://www.twitter.com/example"
                            />
                          </label>
                        )}
                    </Field>
                    <Field name="company_email">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Company Email</span>
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
                              placeholder="This email address is for custom Links"
                            />
                          </label>
                        )}
                    </Field>
                    <Field name="invoice_email">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Invoice Email</span>
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
                              placeholder="To send the copy of the invoice."
                            />
                          </label>
                        )}
                    </Field>

                    <Field name="invoice_address">
                        {({ field, form }) => (
                            <label className="block">
                            <span className="text-gray-700">Invoice Address</span>
                            <textarea
                            {...field}
                              className="
                                mt-1
                                mb-4
                                block
                                w-full
                                h-32
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-gray-500 focus:bg-white focus:ring-0
                              "
                              placeholder="To put it on your invoice."
                            />
                          </label>
                        )}
                    </Field>
                    </Form>
                )} 
            </Formik>
        </div>
    )
}