import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MySpot from "./MySpot";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Myspots = () => {
  const [mySpots, setMySpots] = useState([]);
  const [deleted, setDelete] = useState(false);

  const { authInfo } = useContext(AuthContext);
  const { user } = authInfo;
  console.log(user.email);

  useEffect(() => {
    fetch(
      `http://localhost:5000/myspots/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMySpots(data);
      });
  }, [user, deleted]);

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Swal.fire({
  //       //   title: "Deleted!",
  //       //   text: "Your file has been deleted.",
  //       //   icon: "success"
  //       // });
  //       fetch(
  //         `http://localhost:5000/delete/${id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           // setMySpots(data);
  //           if (data.deletedCount > 0) {
  //             setDelete(!deleted);
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //         });
  //     }
  //   });
  // };

  console.log(mySpots);
  return (
    <div>
      <Navbar></Navbar>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Tourists spots</th>
              <th>Country</th>
              <th>cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 2 */}
            {
              // mySpots.map(mySpot => <MySpot key={mySpot._id} mySpot={mySpot}></MySpot> )
              mySpots.map((mySpot) => (
                <>
                  <tr className="hover">
                    <td>{mySpot.touristsSpotName}</td>
                    <td>{mySpot.countryName}</td>
                    <td>$ {mySpot.cost}</td>
                    <td>
                      <Link to={`/update/${mySpot._id}`}>
                        <button>Update</button>
                      </Link>
                    </td>
                    <td>
                      {/* <Link onClick={() => handleDelete(mySpot._id)}>
                        <button>Delete</button>
                      </Link> */}
                    </td>
                  </tr>
                </>
              ))
            }
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Myspots;
