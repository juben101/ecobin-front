import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';

const Map = ({ center, riders }) => (
    <MapContainer center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
        />
        {riders.map((rider, index) => (
            <Marker key={index} position={[rider.lat, rider.lng]}>
                <Popup>{rider.name}</Popup>
            </Marker>
        ))}
    </MapContainer>
);

export default Map;
