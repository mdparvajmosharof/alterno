import { TiWeatherCloudy } from "react-icons/ti";
import { IoMdTime } from "react-icons/io";

import { TbEyeCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllMySpot = ({ mySpot }) => {
  const {
    Product_Image_Url, image, touristsSpotName, cost, season, time, visitor, _id } = mySpot;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className=" h-[250px]" src={
Product_Image_Url} alt="Shoes" />
        </figure>
        <div className="card-body space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title">{touristsSpotName}</h2>
            </div>
            <div className="flex justify-start gap-2 items-center text-sm">
              <TiWeatherCloudy />
              <span>{season}</span>
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
          <div className="card-actions">
            <Link to={`/SpotDetails/${_id}`} className="w-full">
              {" "}
              <button className="btn btn-primary w-full">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMySpot;
