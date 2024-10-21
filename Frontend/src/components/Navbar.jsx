// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        // <nav className="bg-gray-800 p-4">
        //     <div className="container mx-auto flex justify-between items-center">
        //         <Link to="/" className="text-white text-lg font-semibold">
        //             Home
        //         </Link>
        //         <div>
        //             <Link to="/login" className="text-white mr-4">
        //                 Login
        //             </Link>
        //         </div>
        //         <div>
        //             <Link to="/hotels" className="text-white mr-4">
        //                 Hotel
        //             </Link>
        //         </div>
        //     </div>
        // </nav>

        <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="#" className="text-2xl font-bold text-orange-500">
          Hotel
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/hotels" className="hover:text-orange-500">
              Hotel
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-orange-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-orange-500">
              Contact
            </Link>
          </li>
          <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Login
          </Link>
        </ul>
      </div>
    </nav>

    );
};

export default Navbar;
