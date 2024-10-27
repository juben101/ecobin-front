import React, { useState } from 'react';

const RequestForm = ({ onSubmit }) => {
    const [wasteType, setWasteType] = useState("recyclable");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ wasteType });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Waste Type:
                <select value={wasteType} onChange={(e) => setWasteType(e.target.value)}>
                    <option value="recyclable">Recyclable</option>
                    <option value="organic">Organic</option>
                    <option value="hazardous">Hazardous</option>
                </select>
            </label>
            <button type="submit">Request Collection</button>
        </form>
    );
};

export default RequestForm;
