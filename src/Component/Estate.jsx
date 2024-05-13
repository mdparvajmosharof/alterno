import { Link } from "react-router-dom";
import { BiArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Estate = ({ estate }) => {
  const {
    id,
    image,
    status,
    area,
    price,
    location,
    facilities,
    estate_title,
    description,
  } = estate;
  return (
    <div className="mx-auto ">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px] rounded-xl" src={image} alt="Shoes" />
        </figure>
        <div className="card-body space-y-3">
          <div className="flex justify-between px-2 items-center">
            <div>
              <p>{status}</p>
            </div>
            <div className="flex items-center gap-2">
            <BiArea  className="text-xl"/>
            <span className="text-blue-600 font-semibold">{area}</span>
            </div>
            <div>
              <p className="text-xl font-bold text-blue-500">{price}</p>
            </div>
          </div>
          <h2 className="card-title">{estate_title}</h2>
          {description.length > 80 ? (
            <span>
              {description.slice(0, 80)}.....
              <Link to={`/estate/${id}`} className="text-blue-600 font-bold">See Details</Link>
            </span>
          ) : (
            <span>{description}</span>
          )}
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
            <div className="flex gap-2 items-center"><FaLocationDot></FaLocationDot>{location}</div>
            <Link to={`/estate/${id}`}><button className="btn btn-primary">View Property</button></Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Estate;
