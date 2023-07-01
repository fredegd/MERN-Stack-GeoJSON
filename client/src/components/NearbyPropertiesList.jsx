import React, { useEffect, useState } from "react";
import axios from "axios";

const NearbyPropertiesList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchNearbyProperties();
  }, []);

  const fetchNearbyProperties = async () => {
    try {
      const { latitude, longitude } = await getUserLocation();
      const response = await axios.get("http://localhost:3000/properties/near-by", {
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
          const { longitude, latitude } = position.coords;
          console.log( "long",longitude,"lati",latitude)
          resolve({  longitude,latitude });
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
    </div>
  );
};

export default NearbyPropertiesList;
