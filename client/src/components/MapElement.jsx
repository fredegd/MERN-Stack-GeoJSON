import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MapElement({ latitude, longitude }) {
  const [properties, setProperties] = useState([]);
  const [radius, setRadius] = useState(1000);

  useEffect(() => {
    fetchNearbyProperties();
  }, [latitude, longitude, radius]);

  const fetchNearbyProperties = async () => {
    try {
      const url = `http://localhost:3000/properties/near-by?lng=${longitude}&lat=${latitude}&distance=${radius}`;
      console.log(url)
      const response = await axios.get(url, {
        params: {
          lat: latitude,
          lng: longitude,
          distance: radius,
        },
      });
      setProperties(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Filter Radius</h3>
      <select value={radius} onChange={(e) => setRadius(e.target.value)}>
        <option value="500">500 meters</option>
        <option value="1000">1000 meters</option>
        <option value="2000">2000 meters</option>
        <option value="10000">10000 meters</option>
      </select>
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {properties.map((property) => (
            <Marker
              key={property._id}
              position={[
                property.location.coordinates[1],
                property.location.coordinates[0],
              ]}
            >
              <Popup>
                <Link to={`/properties/${property._id}`}>{property.title}</Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
    </div>
  );
}
