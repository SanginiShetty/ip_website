import React, { useState } from "react";
import axios from "axios";

const HotelCustomer = ({ onHotelAdded }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [rooms, setRooms] = useState(0);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCustomer = { name, age, rooms };
            const response = await axios.post("http://localhost:3000/api/hotels", newCustomer, {
                withCredentials: true,
            });
            onCustomerAdded(response.data);
        } catch (error) {
            console.error(error.response?.data || "Error creating customer");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Add a New Customer</h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Hotel Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter customer name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    value={age}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter customer age"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="rooms">Number of Rooms</label>
                <input
                    type="number"
                    id="rooms"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    placeholder="Enter number of rooms"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="amenities">Amenities</label>
                <input
                    type="text"
                    id="amenities"
                    value={amenities}
                    onChange={(e) => setAmenities(e.target.value)}
                    placeholder="Enter amenities"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="pricePerNight">Price Per Night</label>
                <input
                    type="number"
                    id="pricePerNight"
                    value={pricePerNight}
                    onChange={(e) => setPricePerNight(e.target.value)}
                    placeholder="Enter price per night"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition duration-300"
            >
                Add Hotel
            </button>
        </form>
    );
};

export default HotelForm;
