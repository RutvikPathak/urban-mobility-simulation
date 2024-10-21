import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';

// Make sure to import leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const TrafficMap = () => {
  const drawnItemsRef = useRef(new L.FeatureGroup());

  const handleCreated = (e) => {
    const layer = e.layer;
    drawnItemsRef.current.addLayer(layer);
  };

  const handleDeleted = () => {
    // Handle deletion if necessary
  };

  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]} // Set the initial center of the map
        zoom={13}
        style={{ height: '600px', width: '100%' }} // Set the height and width of the map
        whenCreated={(map) => {
          drawnItemsRef.current = new L.FeatureGroup();
          map.addLayer(drawnItemsRef.current);
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <FeatureGroup ref={drawnItemsRef}>
          <EditControl
            position="topleft"
            onCreated={handleCreated}
            onDeleted={handleDeleted}
            draw={{
              rectangle: true,
              polygon: false,
              polyline: false,
              circle: false,
              marker: false,
              circlemarker: false,
            }}
            edit={{
              edit: true,
              remove: true,
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default TrafficMap;
