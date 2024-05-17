import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Component/Navbar";

const MyRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { authInfo } = useContext(AuthContext);
  const {user} = authInfo;

  useEffect(() => {
    fetch(`http://localhost:5000/myrecommendations/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecommendations(data);

      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/recommendation/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your recommendation has been deleted.", "success");
              setRecommendations(recommendations.filter((rec) => rec._id !== id));
            }
          });
      }
    });
  };

  return (
    <div>
        <Navbar></Navbar>
        <div className="w-full flex justify-center my-10 ">
        <h1 className=" font-extrabold mx-auto text-3xl">My Recommendations</h1>
      </div>
      <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Product Name</th>
            <th>Reason</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((recommendation) => (
            <tr key={recommendation._id} className="hover">
              <td>{recommendation.Recommendation_Title}</td>
              <td>{recommendation.Recommended_product_Name}</td>
              <td>{recommendation.Recommendation_reason}</td>
              <td>
                <img
                  src={recommendation.Recommended_Product_Image}
                  alt={recommendation.Recommended_product_Name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(recommendation._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
