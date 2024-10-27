import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h2>Welcome to EcoBin</h2>
      <p>Your one-stop solution for waste management.</p>
      {/* Add more sections like cards for services */}

    <div className="service-cards">
            
            <div className="card">
                <h3>Schedule Pickup</h3>
                <p>Request a pickup at your convenience.</p>
            </div>

            <div className="card">
                <h3>Track Waste</h3>
                <p>Monitor your waste collection status.</p>
            </div>
        </div>
    </div>
    
  );
};

export default HomePage;
