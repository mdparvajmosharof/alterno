import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import AllMySpot from "./AllMySpot";

const AllTouristsSpots = () => {
  const [mySpots, setMySpots] = useState([]);
  const [cost, setCost] = useState(null);
  console.log(cost);

  useEffect(() => {
    if (cost !== null) {
      fetch(
        `http://localhost:5000/find/${cost}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMySpots(data);
        });
    } else {
      fetch(
        `http://localhost:5000/queries`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMySpots(data);
        });
    }
  }, [cost]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full flex justify-center my-10 ">
        {" "}
        <h1 className=" font-extrabold mx-auto text-3xl">ALL Tourists Spots</h1>
      </div>
      <div className="my-10">
        <details className="dropdown">
          <summary className="m-1 btn">Sort by Cost</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => setCost(200)}>
              <a>$200</a>
            </li>
            <li onClick={() => setCost(300)}>
              <a>$300</a>
            </li>
            <li onClick={() => setCost(400)}>
              <a>$400</a>
            </li>
            <li onClick={() => setCost(500)}>
              <a>$500</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mySpots.map((mySpot) => (
          <AllMySpot key={mySpot._id} mySpot={mySpot}></AllMySpot>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AllTouristsSpots;
