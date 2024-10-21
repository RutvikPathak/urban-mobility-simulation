// frontend/App.js
import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import TrafficMap from './components/mapView';

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <aside className="hidden pt-16 w-64 text-white bg-gray-700 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block">
          <div className="p-2 min-h-full">
            <div className="pb-6 flex sm:flex-col">
              <SearchBar />
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
