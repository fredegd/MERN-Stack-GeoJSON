import React, { useEffect, useState } from "react";
import axios from "axios";
import MapElement from "./MapElement";

const NearbyPropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  
  useEffect(() => {
    fetchNearbyProperties();
  }, []);

  const fetchNearbyProperties = async () => {
    try {
      const position = await getUserLocation();
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
      const url = `http://localhost:3000/properties/near-by?lng=${longitude}&lat=${latitude}&distance=10000`
      // console.log(url)
      const response = await axios.get(url, {
        params: {
          lng: longitude,
          lat: latitude,
          distance: 10000, // 10000 means thousand meters
        },
      });
      setProperties(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position)
        },
        (error) => {
          reject(error);
        }
      );
    });
  };
// console.log(properties)
  return (
    <div>
      <h2>Nearby Properties</h2>
      <div>
        {properties.map((property) => (
          <div key={property._id}>
       <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Situated in: {property.area}</p>
      <p>Availability: {property.availability}</p>
      <p>Price: {property.price}</p>

          </div>
        ))}
      </div>
      {latitude && longitude && <MapElement latitude={latitude} longitude={longitude} />}
    </div>
  );
};

export default NearbyPropertiesList;
