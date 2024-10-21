import React, { useState, useEffect } from "react";
import axios from "axios";
import Customer from "../components/Customer";


const Customers = () => {
    const [customer, setCustomer] = useState([]);
    const [customerName, setCustomerName] = useState("");
    const [searchedCustomer, setSearchedCustomer] = useState([]);
    const [customerToUpdate, setCustomerToUpdate] = useState({
        name: "",
        age: 0,
        rooms: 0,
        pricePerNight: 0,
    });
    const [customerId, setCustomerId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch all hotels
    const fetchCustomer = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/api/customer");
            setCustomer(response.data);
            setError(""); // Clear any previous errors
        } catch (error) {
            setError("Error fetching customer.");
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    // Search hotel by Name
    const handleSearchCustomer = async () => {
        if (!customerName.trim()) return; // Prevent empty searches
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000/api/customer/search/${customerName}`);
            if (response.data.length > 0) {
                setSearchedCustomer(response.data);
                setCustomerId(response.data[0]._id);
                setCustomerToUpdate({
                    name: response.data[0].name,
                    age: response.data[0].age,
                    rooms: response.data[0].rooms,
                    pricePerNight: response.data[0].pricePerNight,
                });
                setError(""); // Clear any previous errors
            } else {
                setSearchedCustomer([]);
                setCustomerId("");
                setError("No customers found with that name.");
            }
        } catch (error) {
            setError("Error searching customers.");
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    // Update customer by ID
    const handleUpdateCustomer = async () => {
        setLoading(true);
        try {
            await axios.put(`http://localhost:3000/api/customer/${customerId}`, customerToUpdate);
            fetchHotels(); // Refresh the list after updating
            alert("Customer updated successfully");
            resetForm();
        } catch (error) {
            setError("Error updating customer.");
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    // Delete hotel by ID
    const handleDeleteCustomer = async () => {
        setLoading(true);
        try {
            await axios.delete(`http://localhost:3000/api/customer/${customerId}`);
            fetchCustomer(); // Refresh the list after deletion
            alert("Customer deleted successfully");
            resetForm();
        } catch (error) {
            setError("Error deleting customer.");
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    // Reset the form and states
    const resetForm = () => {
        setCustomerId("");
        setCustomerToUpdate({
            name: "",
            location: "",
            rooms: 0,
            amenities: "",
            pricePerNight: 0,
        });
        setCustomerName("");
        setSearchedCustomer([]);
    };

    useEffect(() => {
        fetchCustomer();
    }, []);

    return (
        <div>
            <h1 className="text-2xl mb-4">Manage Customer</h1>
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            
            {/* Search Hotel by ID */}
            <div>
                <input
                    type="text"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    placeholder="Enter Hotel Name"
                    className="border p-2 mb-4"
                />
                <button
                    onClick={handleSearchHotel}
                    className="bg-orange-500 text-white p-2 rounded"
                >
                    Search Hotel
                </button>
            </div>

            {/* Display Searched Hotels */}
            {searchedHotels.length > 0 && (
                <div className="border p-4 mt-4">
                    <h3>Hotel Details:</h3>
                    {searchedHotels.map((hotel) => (
                        <div key={hotel._id} className="mb-4">
                            <p>ID: {hotel._id}</p>
                            <p>Name: {hotel.name}</p>
                            <p>Location: {hotel.location}</p>
                            <p>Rooms: {hotel.rooms}</p>
                            <p>Amenities: {hotel.amenities.join(", ")}</p>
                            <p>Price Per Night: {hotel.pricePerNight}</p>
                            {/* Button to set selected hotel for updating */}
                            <button
                                onClick={() => {
                                    setHotelId(hotel._id);
                                    setHotelToUpdate({
                                        name: hotel.name,
                                        location: hotel.location,
                                        rooms: hotel.rooms,
                                        amenities: hotel.amenities.join(", "),
                                        pricePerNight: hotel.pricePerNight,
                                    });
                                }}
                                className="bg-orange-500 text-white p-1 rounded"
                            >
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Update Hotel Form */}
            {hotelId && (
                <div>
                    <h3 className="text-lg mt-4">Update Hotel</h3>
                    <input
                        type="text"
                        value={hotelToUpdate.name}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, name: e.target.value })}
                        placeholder="Name"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="text"
                        value={hotelToUpdate.location}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, location: e.target.value })}
                        placeholder="Location"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="number"
                        value={hotelToUpdate.rooms}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, rooms: parseInt(e.target.value) })}
                        placeholder="Rooms"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="text"
                        value={hotelToUpdate.amenities}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, amenities: e.target.value.split(", ") })}
                        placeholder="Amenities (comma separated)"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="number"
                        value={hotelToUpdate.pricePerNight}
                        onChange={(e) => setHotelToUpdate({ ...hotelToUpdate, pricePerNight: parseFloat(e.target.value) })}
                        placeholder="Price Per Night"
                        className="border p-2 mb-2"
                    />
                    <button
                        onClick={handleUpdateHotel}
                        className="bg-green-500 text-white p-2 rounded mt-2"
                    >
                        Update Hotel
                    </button>
                </div>
            )}

            {/* Delete Hotel Button */}
            {hotelId && (
                <button
                    onClick={handleDeleteHotel}
                    className="bg-red-500 text-white p-2 rounded mt-4"
                >
                    Delete Hotel
                </button>
            )}

            {/* Create New Hotel Form */}
            <HotelForm onHotelAdded={(newHotel) => setHotels((prev) => [...prev, newHotel])} />

            {/* List of Hotels */}
            <HotelList hotels={hotels} />
        </div>
    );
};

export default Hotels;
