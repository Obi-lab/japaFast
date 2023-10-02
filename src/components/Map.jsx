import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {
  return (
    <div style={{ height: '400px' }}>
      <MapContainer
        center={[51.505, -0.09]} // Initial map center coordinates
        zoom={4} // Initial zoom level
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A sample marker!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map