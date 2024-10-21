// frontend/components/GenerateSimulationButton.jsx
import React from 'react';
import axios from 'axios';

const GenerateSimulationButton = () => {
  const handleGenerateSimulation = async () => {
    // Define the bounding box (or other parameters) if needed
    const bbox = "minX,minY,maxX,maxY"; // Replace with actual bounding box values

    try {
      const response = await axios.get(`/api/osm/download?bbox=${bbox}`);
      // Handle the response if necessary (e.g., notify the user)
      console.log('Simulation generated successfully:', response.data);
    } catch (error) {
      console.error('Error generating simulation:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div className='mt-3'>
      <button
        type='button'
        className='w-full rounded-lg px-3 py-1 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300'
        onClick={handleGenerateSimulation} // Attach the click handler
      >
        Generate Simulation
      </button>
    </div>
  );
};

export default GenerateSimulationButton;
