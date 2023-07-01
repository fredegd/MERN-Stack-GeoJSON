import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/properties`)
      .then((response) => {
        console.log(response.data);
        setProperties(response.data);
      })
      .catch((err) => console.error(err, "URL not found"));
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      {properties.map((property) => {
        return (
          <Link to={`/properties/${property._id}`} key={property._id}>
            <PropertyCard property={property} />
          </Link>
        );
      })}
    </div>
  );
}
