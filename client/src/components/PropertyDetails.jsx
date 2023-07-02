import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function PropertyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [propertyDetail, setPropertyDetail] = useState({});
  const [ownerDetail, setOwnerDetail] = useState({});
  const [locationDetail, setLocationDetail] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/properties/${id}`)
      .then((response) => {
        // console.log(response.data);
        setPropertyDetail(response.data);
        setOwnerDetail(response.data.owner);
        setLocationDetail(response.data.location.coordinates);
        // console.log(ownerDetail)
      })
      .catch((err) => console.error(err, "url not found"));
  }, []);
  console.log(propertyDetail);
  return (
    <div>
      <div className="info">
        <img src={propertyDetail.image} alt={propertyDetail.title} />
        <h1>PropertyDetails</h1>
        <h3>{propertyDetail.title}</h3>
        <p>{propertyDetail.description}</p>
        <p>Bedrooms: {propertyDetail.bedrooms}</p>
        <p>Situated in: {propertyDetail.area}</p>
        <p>Availability: {propertyDetail.availability}</p>
        <p>Price: {propertyDetail.price}</p>
        <p>Owned by: {ownerDetail.name}</p>
        <p>
          contact: {ownerDetail.phoneNumber} - {ownerDetail.email}{" "}
        </p>
      </div>

      {locationDetail[0] && (
        <MapContainer
          center={locationDetail}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors'
          />

          <Marker position={locationDetail}>
            <Popup>{propertyDetail.title}</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}
