import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const QueryDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuery(data);
      });

    console.log(query);
  }, [id]);

  const {
    Product_Image_Url,
    userName,
    photoURL,
    Date_Posted,
    Recommendation_Count,
    Query_Title,
    Product_Brand,
    Boycotting_Reason,
  } = query;

  const handleR =(e) => {
    e.preventDefault();
    const Recommendation_Title = e.target.RT.value;
    const Recommended_product_Name = e.target.RPN.value;
    const Recommended_Product_Image = e.target.RPI.value;
    const Recommendation_reason = e.target.RR.value;
    console.log(Recommendation_Title)
  }

  
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex flex-col p-6 space-y-6 overflow-hidden rounded-lg card  bg-base-100 shadow-2xl my-10">
        <div className="">
          <div className="flex space-x-4">
            <img
              alt=""
              src={photoURL}
              className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500 "
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                {userName}
              </a>
              <span className="text-xs  text-gray-600 dark:text-gray-400">
                {Date_Posted}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-2 pt-6 items-center">
            <div className="">
              <img
                src={Product_Image_Url}
                alt=""
                className="object-cover w-full mb-4  rounded-lg  bg-gray-500 dark:bg-gray-500"
              />
            </div>
            <div className="">
              <div>
                <p>{Product_Brand}</p>
                <h2 className="mb-1 h-14  font-extrabold">{Query_Title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {Boycotting_Reason}{" "}
                </p>
              </div>
              <div className="flex text-center mt-6">
                <span className="font-bold text-emerald-500">
                  Recomendation :{" "}
                </span>
                <button
                  type="button"
                  className="flex items-center p-1 space-x-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Number of comments"
                    className="w-4 h-4 fill-current text-emerald-600 dark:text-emerald-400 "
                  >
                    <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                    <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                  </svg>

                  <span>{Recommendation_Count}</span>
                </button>
                {/* <Link to="/queryDetails"><Button className="btn btn-accent">Recommend</Button></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <form onSubmit={handleR} action="">
          <div className=" space-y-6">
            <label className="input input-bordered flex items-center  gap-2">
              <span className="font-bold">Recommendation Title</span>
              <input
                type="text"
                className="grow"
                name="RT"
                placeholder="Recommendation Title"
              />
            </label>
            <label className="input input-bordered flex items-center  gap-2">
              <span className="font-bold">Recommended product Name</span>
              <input
                type="text"
                className="grow"
                name="RPN"
                placeholder="Recommended product Name"
              />
            </label>
            <label className="input input-bordered flex items-center  gap-2">
              <span className="font-bold">Recommended Product Image : </span>
              <input
                type="text"
                className="grow"
                name="RPI"
                placeholder="Recommended Product Image"
              />
            </label>
            
            <label className="input input-bordered flex items-center  gap-2">
              <span className="font-bold">Recommendation reason
 : </span>
              <input
                type="text"
                className="grow"
                name="RR"
                placeholder="Recommendation reason
"
              />
            </label>
            

            <div>
              <input
                className="btn btn-accent w-full"
                type="submit"
                value="Recommend"
              />
            </div>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default QueryDetails;
