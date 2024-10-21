import React from "react";

const Customer = ({ customers }) => {
    return (
        <div>
            hi
            {customers?.map((customer) => (
                <div key={customer._id} className="p-4 border mb-2">
                    <h2 className="text-xl font-bold">{customer.name}</h2>
                    <p>{customer.age}Age</p>
                    <p>{customer.rooms}Rooms</p>
                    <p>Price: ${customer.pricePerNight} per night</p>
                </div>
            ))}
        </div>
    );
};

export default Customer;
