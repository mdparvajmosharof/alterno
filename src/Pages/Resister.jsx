import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Navbar from "../Component/Navbar";
import Swal from "sweetalert2";
// import { updateProfile } from "firebase/auth";
// import auth from "../Firebase/firebase.config";

const Resister = () => {
  useEffect(() => {
    document.title = "Alterno | Register";
  }, []);

  const [passwordShow, setPasswordShow] = useState(false);
  // const dataSet = useContext(AuthContext)
  // const [resisterSuccess, setResisterSuccess] = useState("");
  // const [resisterError, setResisterError] = useState("");
  const navigate = useNavigate();

  const { authInfo } = useContext(AuthContext);
  const { createUser, updateUserProfile, user } = authInfo;

  const handleResister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo_url = e.target.photo_url.value;
    const password = e.target.password.value;

    // dataSet({
    //   photo_url: photo_url,
    //   name: name,
    // });
    // console.log("photo_url", photo_url, name);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Length must be at least 6 characters",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Must have an Uppercase letter in the password",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Must have a Lowercase letter in the password",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    console.log(name, email, photo_url, password);
    createUser(email, password)
      .then(() => {
        console.log("name67", name, photo_url, "res", user);

        updateUserProfile(name, photo_url).then(() => {
          navigate("/login");
        });

        Swal.fire({
          icon: "success",
          title: "Register Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Resister Error. Please Cheak your internet connection .",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        
      </div>
      <div className="w-full card shadow-xl mx-auto max-w-md p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Resister Please</h1>
        <form
          onSubmit={handleResister}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo_url" className="block dark:text-gray-600">
              Photo Url
            </label>
            <input
              required
              type="text"
              name="photo_url"
              id="photo_url"
              placeholder="photo_url"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              required
              type="text"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <div className=" relative">
              <input
                className=" pl-5 w-full py-2 rounded-md"
                type={passwordShow ? "text" : "password"}
                name="password"
                id=""
                required
              />
              <span
                className=" absolute right-8 top-3 "
                onClick={() => setPasswordShow(!passwordShow)}
              >
                {passwordShow ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>
          <button className="block btn btn-accent w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Resister
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account? 
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className="btn btn-link btn-success">
            Log In
          </Link>
        </p>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Resister;
