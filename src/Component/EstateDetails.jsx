import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { BiArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const EstateDetails = () => {
  useEffect(() => {
    document.title = "Alterno | Details";
  }, []);
  const [detailsId, setDetailsId] = useState([]);
  const { id } = useParams();

  const estates = useLoaderData();
  // console.log();
  const locationPath = useLocation();
  console.log("currentpath", locationPath);
  const estate = estates && estates?.find((estate) => estate.id == id);
  console.log(estate, id);
  const {
    description,
    estate_title,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = estate;
  console.log(description);

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(id));
  }, [id]);

  useEffect(() => {
    const getId = JSON.parse(localStorage.getItem("id"));
    console.log("getids", getId);
    if (getId) {
      setDetailsId(getId);
    }
  }, []);

  // console.log("locId", locationPath, id);
  // console.log("detail Id", detailsId);

  // const getId = JSON.parse(localStorage.getItem("id"));
  // console.log(
  //   "getids",
  //   getId,
  //   "locationPath",
  //   locationPath.pathname,
  //   "estates",
  //   estates
  // );

  return (
    <div>
      <Navbar></Navbar>
      <div className="card  lg:card-side bg-base-100 shadow-xl mt-24 pb-0">
        <figure>
          <img className="h-full" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <p>
            <span className="rounded-2xl px-5 py-2 bg-blue-100">{status}</span>
          </p>
          <h2 className="card-title mt-3">{estate_title}</h2>
          <p className="">
            <p className="text-2xl font-bold text-emerald-500 ">Description</p>{" "}
            <br /> <p className="text-xl">{description}</p>
          </p>
          <div className="card-body space-y-3">
            <div className="flex justify-between px-2 items-center">
              <div className="flex items-center gap-2">
                <BiArea className="text-xl" />
                <span className="text-blue-600 font-semibold">{area}</span>
              </div>
              <div>
                <p className="text-xl font-bold text-blue-500">{price}</p>
              </div>
            </div>
            <p className="text-xl text-blue-800 font-bold">Facilities :</p>
            <div className="flex justify-between text-emerald-700 font-semibold">
              <div>
                <ul className="list-disc pl-5">
                  <li>{facilities[0]}</li>
                  <li>{facilities[1]}</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5">
                  <li>{facilities[2]}</li>
                  <li>{facilities[3]}</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between items-center text-lg">
              <div className="flex gap-2 items-center">
                <FaLocationDot></FaLocationDot>
                {location}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EstateDetails;
