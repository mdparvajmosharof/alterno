import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoMdTime } from "react-icons/io";
import { TbEyeCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { GrMapLocation } from "react-icons/gr";

const SpotDetails = () => {
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

  const {
    image,
    touristsSpotName,
    countryName,
    location,
    description,
    cost,
    season,
    time,
    visitor,
  } = spot;
  console.log(touristsSpotName);

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl my-20">
          <div className="lg:w-1/2">
            <figure className="">
              <img src={image} alt="Album" />
            </figure>
          </div>
          <div className="card-body space-y-3 lg:w-1/2">
            <h2 className="card-title">{touristsSpotName}</h2>
            <div className="flex justify-start gap-2 items-center text-sm">
              <TiWeatherCloudy />
              <span>{season}</span>
            </div>
            <p>{description}</p>
            <div className="flex justify-between">
              <div className="flex justify-start gap-2 items-center text-sm">
                <GrMapLocation />
                <span>{countryName}</span>
              </div>
              <div className="flex justify-start gap-2 items-center text-sm">
                <ImLocation2 />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-start gap-2 items-center text-sm font-bold text-blue-700">
                $<span>{cost}</span>
              </div>
              <div className="flex justify-start gap-2 items-center text-sm">
                <IoMdTime />
                <span>{time}</span>
              </div>
              <div className="flex justify-start gap-2 items-center text-sm">
                <TbEyeCheck />
                <span>{visitor}</span>
              </div>
            </div>

            <div>
              <button className="btn w-full">Tour</button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SpotDetails;
