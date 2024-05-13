import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import AllMySpot from "./AllMySpot";

const CountrySpots = () => {
  const [countryN, setCountryN] = useState([]);

  const { countryName } = useParams();

  useEffect(() => {
    fetch(
      `http://localhost:5000/country/${countryName}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryN(data);
      });
  }, [countryN]);

  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {countryN.map((countrySpot) => (
          <AllMySpot key={countrySpot._id} mySpot={countrySpot}></AllMySpot>
        ))}
      </div>
    </div>
  );
};

export default CountrySpots;
