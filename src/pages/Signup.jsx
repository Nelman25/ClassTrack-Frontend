import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { TfiEmail } from "react-icons/tfi";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import nuLogo from "../assets/NU_shield.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };

  const handleLnameChange = (e) => {
    setLname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError("Password doesn't match, please try again.");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password).then((u) => {
        const user = u.user;
        return updateProfile(user, { displayName: `${lName}, ${fname}` });
      });

      const user = auth.currentUser;

      localStorage.setItem("username", user.displayName);
      console.log(user.displayName);

      if (user) {
        console.log("User registered successfully!");
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="w-screen h-screen bg-regalBlue flex justify-center items-center">
      <div className="w-[900px] bg-white h-[680px] shadow-2xl rounded-md flex overflow-hidden">
        <form onSubmit={handleSubmit} className="w-1/2 bg-white px-10 py-12">
          <h2 className="text-regalBlue text-xl font-medium mb-6">
            Create an account
          </h2>

          <h2 className="text-oceanBlue font-medium mb-1">First name</h2>
          <div className="border border-slate flex h-[43px] mb-4">
            <span className="inline-block p-3 bg-slate-300 border border-slate-400">
              <TfiEmail />
            </span>
            <input
              type="text"
              required
              placeholder="Juan"
              className="w-full h-full px-4 focus:outline-regalBlue"
              onChange={handleFnameChange}
            />
          </div>

          <h2 className="text-oceanBlue font-medium mb-1">Last name</h2>
          <div className="border border-slate flex h-[43px] mb-4">
            <span className="inline-block p-3 bg-slate-300 border border-slate-400">
              <TfiEmail />
            </span>
            <input
              type="text"
              required
              placeholder="Dela Cruz"
              className="w-full h-full px-4 focus:outline-regalBlue"
              onChange={handleLnameChange}
            />
          </div>

          <h2 className="text-oceanBlue font-medium mb-1">Email</h2>
          <div className="border border-slate flex h-[43px] mb-4">
            <span className="inline-block p-3 bg-slate-300 border border-slate-400">
              <TfiEmail />
            </span>
            <input
              type="text"
              required
              placeholder="Email/Username"
              className="w-full h-full px-4 focus:outline-regalBlue"
              onChange={handleEmailChange}
            />
          </div>
          <h2 className="text-oceanBlue font-medium mb-1">Password</h2>
          <div className="border border-slate flex h-[43px] mb-4">
            <span
              onClick={handleShowPassword}
              className="inline-block p-3 bg-slate-300 border border-slate-400"
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </span>
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              required
              className={`w-full h-full px-4 focus:outline-regalBlue ${
                error && "border border-red-400 bg-red-100"
              }`}
              onChange={handlePasswordChange}
            />
          </div>
          <h2 className="text-oceanBlue font-medium mb-1">Confirm password</h2>
          <div className="border border-slate flex h-[43px]">
            <span
              onClick={handleShowPassword}
              className="inline-block p-3 bg-slate-300 border border-slate-400"
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </span>
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              required
              className={`w-full h-full px-4 focus:outline-regalBlue ${
                error && "border border-red-400 bg-red-100"
              }`}
              onChange={handleConfirmPassword}
            />
          </div>
          <p className="text-red-400 text-center">{error}</p>
          <button
            type="submit"
            className="w-full mt-8 mb-8 py-2 bg-lushGreen text-white hover:bg-[#41a741]"
          >
            Create account
          </button>
          <div className="flex justify-between">
            <Link to={"/login"}>
              <p className="text-oceanBlue hover:underline">
                I already have an account
              </p>
            </Link>
            <p className="text-oceanBlue hover:underline">Forgot Password</p>
          </div>
        </form>
        <div className="w-1/2 bg-goldenYellow flex flex-col justify-center">
          <img
            src={nuLogo}
            alt="national university logo"
            className="w-[83px] h-[100px] mx-auto"
          />
          <h1 className="text-regalBlue text-3xl font-bold text-center my-2">
            Welcome to ClassTrack
          </h1>
          <p className="text-sm text-regalBlue text-center py-2 px-8">
            Effortless student management designed just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
