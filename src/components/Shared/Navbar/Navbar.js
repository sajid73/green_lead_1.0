import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
  const l = useLocation();
  return (
    <header class="text-gray-600 body-font banner-lg">
      <div class="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
		<img width="120px" src={logo} alt="logo" />
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center list-none">
			<Link className={`mr-5 hover:text-green-500 font-semibold h-7 px-2 ${l.pathname === '/' ? 'border-b-2 border-r-2 border-green-600 shadow-md' : ''} `} to="/"><li>Home</li></Link>
    		<Link className={`mr-5 hover:text-green-500 font-semibold h-7 px-2 ${l.pathname === '/impact' ? 'border-b-2 border-r-2 border-green-600 shadow-md' : ''} `} to="/impact"><li>Impact</li></Link>
    		<Link className={`mr-5 hover:text-green-500 font-semibold h-7 px-2 ${l.pathname === '/resource' ? 'border-b-2 border-r-2 border-green-600 shadow-md' : ''} `} to ="/resource"><li>Resource</li></Link>
    		<Link className={`mr-5 hover:text-green-500 font-semibold h-7 px-2 ${l.pathname === '/team' ? 'border-b-2 border-r-2 border-green-600 shadow-md' : ''} `} to="/team"><li>Team</li></Link>
    		<Link className={`mr-5 hover:text-green-500 font-semibold h-7 px-2 ${l.pathname === '/collaboration' ? 'border-b-2 border-r-2 border-green-600 shadow-md' : ''} `} to="/collaboration"><li>Collaboration</li></Link>
        </nav>
        {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
