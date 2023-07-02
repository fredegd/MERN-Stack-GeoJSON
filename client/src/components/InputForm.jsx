import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function InputForm() {
  const navigate = useNavigate();
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        console.log(response.data)
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching owners data:", error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const {
      title,
      description,
      price,
      bedrooms,
      area,
      latitude,
      longitude,
      image,
      images,
      availability,
      owner,
    } = data;

    const propertyData = {
      title,
      description,
      price: parseInt(price),
      bedrooms: parseInt(bedrooms),
      area: parseInt(area),
      location: {
        type: "Point",
        coordinates: [parseFloat(latitude), parseFloat(longitude)],
      },
      image,
      images: images.split(",").map((imageUrl) => imageUrl.trim()),
      owner,
      availability,
    };

    // console.log(propertyData);

    axios
      .put(`http://localhost:3000/properties/${id}`, propertyData)
      .then((response) => {
        console.log("Added new item successfully:", response.data);
        reset();
        navigate(`/properties`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .post("http://localhost:3000/properties", propertyData)
      .then((response) => {
        console.log("Added new item successfully:", response.data);
        reset();
        navigate(`/properties`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="form-container">
        <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-item"
            // defaultValue={title ? title : ""}
            {...register("title", { required: true })}
            placeholder="title"
          />

          <input
            className="input-item"
            // defaultValue={description ? description : ""}
            {...register("description", { required: true })}
            placeholder="Description"
          />
          <input
            className="input-item"
            // defaultValue={price ? price : ""}
            {...register("price", { required: true })}
            placeholder="Price"
          />
          <input
            className="input-item"
            // defaultValue={bedrooms ? bedrooms : ""}
            {...register("bedrooms", { required: true })}
            placeholder="Bedrooms"
          />
          <input
            className="input-item"
            // defaultValue={area ? area : ""}
            {...register("area", { required: true })}
            placeholder="Area"
          />

          <input
            className="input-item"
            // defaultValue={latitude ? latitude : ""}
            {...register("latitude", { required: true })}
            placeholder="Latitude"
          />
          <input
            className="input-item"
            // defaultValue={longitude ? longitude : ""}
            {...register("longitude", { required: true })}
            placeholder="Longitude"
          />
          <input
            className="input-item"
            // defaultValue={image ? image : ""}
            {...register("image", { required: true })}
            placeholder="Main Image"
          />
          <input
            className="input-item"
            // defaultValue={images ? images : ""}
            {...register("images", { required: true })}
            placeholder="Carousel images"
          />

          <select
            className="input-item"
            {...register("availability", { required: true })}
          >
            <option value="">Select availability</option>
            <option value="vacant">Vacant</option>
            <option value="rented">Rented</option>
            <option value="sold">Sold</option>
          </select>

          <select
            className="input-item"
            {...register("owner", { required: true })}
          >
            <option key="0" value="">Select owner</option>
            {owners.map((owner) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
          {errors.owner && <span>This field is required</span>}

          {errors.availability && <span>This field is required</span>}

          {errors.title && <span>This field is required</span>}
          <input className="submit-button" type="submit" value={"Submit"} />
        </form>
      </div>
    </>
  );
}
