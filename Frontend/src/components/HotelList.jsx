import React from "react";

const HotelList = ({ hotels }) => {
    return (
        <div>
            hi
            {hotels?.map((hotel) => (
                <div key={hotel._id} className="p-4 border mb-2">
                    <h2 className="text-xl font-bold">{hotel.name}</h2>
                    <p>{hotel.location}</p>
                    <p>{hotel.rooms} Rooms</p>
                    <p>Amenities: {hotel.amenities}</p>
                    <p>Price: ${hotel.pricePerNight} per night</p>
                </div>
            ))}
        </div>
    );
};

export default HotelList;
