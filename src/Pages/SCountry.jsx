import { Link } from "react-router-dom";

const SCountry = ({sCountry}) => {

    const {image, countryName, countryDescription} = sCountry;

  return (
    <div>
        
     <Link to={`/country/${countryName}`}>
     <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{countryName}</h2>
          <p>{countryDescription}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
     </Link>
    </div>
  );
};

export default SCountry;
