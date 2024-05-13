import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { id } = useParams();
  console.log(id);
  const [spot, setSpot] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/update/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSpot(data);
      });

    console.log(spot);
  }, [id]);

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const touristsSpotName = e.target.touristsSpotName.value;
    const countryName = e.target.countryName.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const cost = e.target.cost.value;
    const season = e.target.season.value;
    const time = e.target.time.value;
    const visitor = e.target.visitor.value;
    const spotsData = {
      image,
      touristsSpotName,
      countryName,
      location,
      description,
      cost,
      season,
      time,
      visitor,
    };

    console.log(spotsData);

    fetch(
      `http://localhost:5000/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(spotsData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Tourists spots updated",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Tourists spots can't updated.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full flex justify-center my-10 ">
        {" "}
        <h1 className=" font-extrabold mx-auto text-3xl">
          Update Tourists Spots
        </h1>
      </div>

      <form onSubmit={handleUpdateSpot} action="">
        <div className="mx-5 space-y-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2 ">
              Image :
              <input
                type="text"
                className="grow"
                name="image"
                placeholder="Image Url"
                defaultValue={spot.image}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Tourists Spot Name :
              <input
                type="text"
                name="touristsSpotName"
                className="grow"
                placeholder="Tourists Spot Name"
                defaultValue={spot.touristsSpotName}
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Country Name :
              <input
                type="text"
                className="grow"
                name="countryName"
                placeholder="Country Name"
                defaultValue={spot.countryName}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Location :
              <input
                type="text"
                name="location"
                className="grow"
                placeholder="Location"
                defaultValue={spot.location}
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Short Description :
              <input
                type="text"
                className="grow"
                name="description"
                placeholder="Short Description"
                defaultValue={spot.description}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Average Cost :
              <input
                type="text"
                name="cost"
                className="grow"
                placeholder="Average cost"
                defaultValue={spot.cost}
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Seasonality :
              <input
                type="text"
                className="grow"
                name="season"
                placeholder="Seasonality"
                defaultValue={spot.season}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Travel Time :
              <input
                type="text"
                name="time"
                className="grow"
                placeholder="Travel Time"
                defaultValue={spot.time}
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Total Visitors Per Year :
              <input
                type="text"
                className="grow"
                name="visitor"
                placeholder="Total visitors Per year"
                defaultValue={spot.visitor}
              />
            </label>
          </div>

          <div>
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Update Tourists Spot"
            />
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default UpdateSpot;
