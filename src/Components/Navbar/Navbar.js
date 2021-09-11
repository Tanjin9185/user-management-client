import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container items-center">
            <div className="text-blueGray-700  ">
                <div className="flex flex-col flex-wrap p-1 mx-auto md:items-center md:flex-row">
                    <Link to="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                        <div className="inline-flex items-center">
                            <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> Suffix IT Limited </h2>
                        </div>
                    </Link>
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
                        <ul className="items-center inline-block list-none lg:inline-flex">
                            <li>
                                <Link to="/home" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Contact</Link>
                            </li>
                            <li>
                                <Link to="/login" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">User</Link>
                            </li>
                        </ul>
                    </nav>
                    <span className="w-auto px-8 py-2 my-2 text-base font-medium text-black transition duration-500 ease-in-out transform bg-blue-200 border-blue-200 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 ">Logout </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;