import React from 'react'
import { useEffect } from "react"
// import cover from "../assets/cover11.jpg";
import Typewriter from 'typewriter-effect';

function Homeheader() {

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     }, 10000);
    //     return () => clearInterval(interval);
    //  }, []);

    return (
        <div className='flex-center'>
            <div className='text-center text-3xl border-2 shadow-2xl rounded-lg font-bold max-w-6xl mx-auto mt-2 py-5 px-4'>
                <p className='text-amber-700 mx-1 text-4xl underline'>Find Remote Jobs</p><Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("WebApp Security")
                    .deleteAll()
                    .typeString("Researcher")
                    .deleteAll()
                    .typeString("SOC/SIEM")
                    .deleteAll()
                    .typeString("Pentesting")
                    .deleteAll()
                    .typeString("Consulting")
                    .deleteAll()
                    .typeString("Quality Assurance")
                    .deleteAll()
                    .typeString("Forensics")
                    .deleteAll()
                    .typeString("Mobile Security")
                    .deleteAll()
                    .typeString("Cloud Security")
                    .deleteAll()
                    .typeString("Infrastructure Security")
                    .deleteAll()
                    .typeString("Code Source Review")
                    .deleteAll()
                    .typeString("Hardware/IOT")
                    .deleteAll()
                    .typeString("DevOps/DevSecOps")
                    .deleteAll()
                    .typeString("Sales/Marketing")
                    .deleteAll()
                    .start();
                    }}
                    />
            </div>
        </div>
        
    )
}

export default Homeheader