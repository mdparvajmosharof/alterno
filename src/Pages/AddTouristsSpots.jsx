import { useContext } from "react";
import Navbar from "../Component/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../Component/Footer";

const AddTouristsSpots = () => {
  const { authInfo } = useContext(AuthContext);
  const { user } = authInfo;
  console.log(user?.email);

  const handleAddTouristsSpots = (e) => {
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
    const name = e.target.name.value;
    const userEmail = e.target.email.value;
    const email = user?.email;
    const spotsData = {
      image,
      touristsSpotName,
      email,
      countryName,
      location,
      description,
      cost,
      season,
      time,
      visitor,
      name,
      userEmail,
    };
    console.log(spotsData);

    fetch(
      "http://localhost:5000/spots",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(spotsData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Tourists spots Added",
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
        <h1 className=" font-extrabold mx-auto text-3xl">Add Tourists Spots</h1>
      </div>
      <form onSubmit={handleAddTouristsSpots} action="">
        <div className="mx-5 space-y-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Image
              <input
                type="text"
                className="grow"
                name="image"
                placeholder="Image Url"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Tourists Spot Name
              <input
                type="text"
                name="touristsSpotName"
                className="grow"
                placeholder="Tourists Spot Name"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Country Name
              <input
                type="text"
                className="grow"
                name="countryName"
                placeholder="Country Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Location
              <input
                type="text"
                name="location"
                className="grow"
                placeholder="Location"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Short Description
              <input
                type="text"
                className="grow"
                name="description"
                placeholder="Short Description"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Average Cost
              <input
                type="text"
                name="cost"
                className="grow"
                placeholder="Average cost"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Seasonality
              <input
                type="text"
                className="grow"
                name="season"
                placeholder="Seasonality"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Travel Time
              <input
                type="text"
                name="time"
                className="grow"
                placeholder="Travel Time"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              Total Visitors Per Year
              <input
                type="text"
                className="grow"
                name="visitor"
                placeholder="Total visitors Per year"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              User Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="User Name"
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <label className="input input-bordered flex items-center gap-2">
              User Email
              <input
                type="text"
                className="grow"
                name="email"
                placeholder="User Email"
              />
            </label>
          </div>
          <div>
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Add Tourists Spot"
            />
          </div>
        </div>
      </form>

      <Footer></Footer>
    </div>
  );
};

export default AddTouristsSpots;
