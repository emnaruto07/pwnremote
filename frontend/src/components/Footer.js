import React from 'react'

function Footer() {
    return (
        
        <footer className="border-t border-gray-200">
        <div
            className="
            container
            flex flex-col flex-wrap
            px-4
            py-6
            mt-4
            mx-auto
            md:items-center
            lg:items-start
            md:flex-row md:flex-nowrap
            "
        >
            <div
            className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
            >
            <td className="py-5 px-3">
                <img src="" className="h-20 w-20 border-2" alt="" />
            </td> 
            <a
                className="
                flex
                items-center
                justify-center
                text-4xl
                font-bold
                text-blue-700
                md:justify-start
                "
            >
                pwnremote
            </a>
            </div>
            <div className="justify-between w-full mt-4 text-center lg:flex">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
                </h2>
                <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
                </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
                </h2>
                <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
                </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
                </h2>
                <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                    <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div className="flex justify-center">
            <p className="text-base text-gray-400">
            All rights reserved by @ pwnremote 2021
            </p>
        </div>
    </footer>
    )
}

export default Footer
