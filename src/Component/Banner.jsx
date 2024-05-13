import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Pagination, Scrollbar, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Scrollbar, Navigation]}
        className="mySwiper border h-[550px] rounded-xl my-10"
      >
        <SwiperSlide className="">
          <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/X4g3YMR/ali-maah-zy-Oe-Em4-Ns-PM-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-16">
                <h2 className="card-title text-5xl font-extrabold text-white ">
                  OUR AVAILABE TOURSITS SPOTS
                </h2>
                <div className="card-actions ">
                  <Link to="/alltouristsspots"><button className="btn btn-primary">ALL Torists Spots</button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
        <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/PwY6Lfk/bradley-prentice-d-YER-zr-GCm-I-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-16">
                <h2 className="card-title text-5xl font-extrabold text-white ">
                  ADD YPUR FAV TOURSITS SPOTS
                </h2>
                <div className="card-actions ">
                  <Link to="/addtouristsspots"><button className="btn btn-primary">Add Torists Spots</button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
        <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/gVrhXry/shlomo-shalev-Go-PYSBv-Z-QQ-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-16">
                <h2 className="card-title text-5xl font-extrabold text-white ">
                  VISIT TO YOUR ADDED TOURSITS SPOTS
                </h2>
                <div className="card-actions ">
                  <Link to="/myspots"><button className="btn btn-primary">My Torists Spots</button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;
