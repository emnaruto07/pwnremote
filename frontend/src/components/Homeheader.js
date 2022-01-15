import React from 'react'
// import Typewriter from 'typewriter-effect';
import Banner from "../assets/banner.jpg";


function Homeheader() {

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     }, 10000);
    //     return () => clearInterval(interval);
    //  }, []);

    return (
        <div className="p-20 h-screen" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Banner})`}}>
            
        </div>
        
    )
}

export default Homeheader

{/* <div className='text-center text-3xl border-2 shadow-2xl rounded-lg font-bold max-w-6xl mx-auto mt-2 py-5 px-4'>
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
            </div> */}