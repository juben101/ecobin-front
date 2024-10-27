import React from 'react';



const RiderCard = ({ rider }) => (
    <div className="rider-card">
        <h3>{rider.name}</h3>
        <p>Waste Type: {rider.wasteType}</p>
        <p>Status: {rider.availability ? "Available" : "Not Available"}</p>
    </div>
);

export default RiderCard;
