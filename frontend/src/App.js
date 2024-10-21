import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import TrafficMap from './components/mapView';
import axios from 'axios';

const App = () => {
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
    <div className=''>
      <NavBar />
      <div>
        <aside className="hidden pt-16 w-64 text-white bg-gray-700 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block">
          <div className="p-2 min-h-full">
            <div className="pb-6 flex sm:flex-col">
              <SearchBar />
              <div className='mt-3'>
                <button
                  type='button'
                  className='w-full rounded-lg px-3 py-1 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300'
                  onClick={handleGenerateSimulation} // Attach the click handler
                >
                  Generate Simulation
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="pt-16 sm:pl-64">
          <div className="p-4">
            <div className="bg-white rounded shadow font-semibold text-center hover:shadow-md">
              <TrafficMap />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
