import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div className="bg-gray-100 text-gray-800">
    {/* Navbar */}
    {/* <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-orange-500">
          Hotel
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Rooms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav> */}

    {/* Hero Section */}
    <section className="bg-orange-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Luxury Hotel</h1>
        <p className="mt-4 text-lg">
          Experience the best stay with top-notch hospitality and comfort.
        </p>
        <Link to="/customers" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Book Now
          </Link>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-4">Luxury Rooms</h3>
            <p>Comfortable and luxurious rooms for a perfect stay.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-4">Spa & Wellness</h3>
            <p>Relax and rejuvenate with our exclusive spa services.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-4">Fine Dining</h3>
            <p>Enjoy gourmet dining with a variety of cuisines.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Hotel Management. All rights reserved.</p>
      </div>
    </footer>
  </div>
);
}

export default Home
