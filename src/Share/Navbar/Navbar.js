import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-purple-300 shadow-xl sticky top-0 z-50 navbar">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="">
                            <img src='brand-logo.webp' alt=''></img>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-black">
                                <Link to="">Home</Link>
                            </li>
                            <li className="text-white hover:text-black">
                                <Link to="">Blog</Link>
                            </li>
                            <li className="text-white hover:text-black">
                                <Link to="">Girls</Link>
                            </li>
                            <li className="text-white hover:text-black">
                                <Link to="">Woman's</Link>
                            </li>
                            <li className="text-white hover:text-black">
                                <Link to="">Boy's</Link>
                            </li>
                            <li className="text-white hover:text-black">
                                <Link to="">New Born</Link>
                            </li>
                            
                            <li className="text-white hover:text-black">
                                <Link to="">Contact US</Link>
                            </li>
                        </ul>


                    </div>
                </div>
                <div >
                    <div class="relative flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            class="relative w-40 m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon3" />

                       
                        <button
                            class="relative z-[2] rounded-r border-2 border-primary px-3 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            type="button"
                            id="button-addon3"
                            data-te-ripple-init>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;