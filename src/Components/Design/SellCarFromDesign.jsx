"use client";

import { AuthContext } from "@/Context/AuthContext";
import React, { use } from "react";
import useAxios from "../Axios/useAxios";
import Swal from "sweetalert2";

const SellCarFromDesign = () => {
  const { user } = use(AuthContext);
  const axios = useAxios();

  const handleCarSell = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const carTypes = target.carTypes.value;
    const condition = target.condition.value;
    const image = target.image.value;
    const registration = target.registration.value;
    const nid = target.nid.value;
    const address = target.address.value;
    const description = target.description.value;

    const carData = {
      name,
      email,
      carTypes,
      condition,
      image,
      registration,
      nid,
      address,
      description,
    };

    axios
      .post("/car-selling", carData)
      .then((res) => {
        Swal.fire({
          title: "Form filled Successfully!",
          icon: "success",
        });
        target.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="flex justify-center px-4 py-10 min-h-screen">
      <form
        className="
       w-full max-w-4xl
    bg-white/70 backdrop-blur-md 
    px-8 py-8 
    shadow-2xl 
    rounded-2xl 
    border border-gray-200
    "
        onSubmit={handleCarSell}
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
          Sell Your Car
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Name */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              className="input outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2"
              defaultValue={user?.displayName}
              name="name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              className="input outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2"
              defaultValue={user?.email}
              name="email"
              required
            />
          </div>

          {/* Car Type */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 font-semibold mb-1">
              Types of Car
            </label>
            <select
              className="select outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2"
              name="carTypes"
              defaultValue=""
            >
              <option value="" disabled>
                Type of car you have?
              </option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="SUV">SUV</option>
              <option value="Pickup Truck">Pickup Truck</option>
              <option value="Sports Car">Sports Car</option>
            </select>
          </div>

          {/* Car Condition */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 font-semibold mb-1">
              Car Condition
            </label>
            <select
              className="select outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2"
              name="condition"
              defaultValue=""
            >
              <option value="" disabled>
                Car condition
              </option>
              <option value="Brand New">Brand New</option>
              <option value="Used">Used</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 font-semibold mb-1">
              Car Image URL
            </label>
            <input
              type="text"
              className="input outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2"
              placeholder="https://example.com/car.jpg"
              name="image"
              required
            />
          </div>

          {/* Registration */}
          <div className="flex flex-col w-full">
            <label className="text-gray-700 font-semibold mb-1">
              Registration Number
            </label>
            <input
              type="text"
              className="input outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2"
              placeholder="Car Registration Number"
              name="registration"
              required
            />
          </div>

          {/* NID */}
          <div className="flex flex-col w-full md:col-span-2">
            <label className="text-gray-700 font-semibold mb-1">
              Your NID Number
            </label>
            <input
              type="text"
              className="input outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2 w-full"
              placeholder="NID Number"
              name="nid"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col w-full md:col-span-2">
            <label className="text-gray-700 font-semibold mb-1">
              Your Address
            </label>
            <input
              type="text"
              className="input outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2 w-full"
              placeholder="Your Address"
              name="address"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col w-full md:col-span-2">
            <label className="text-gray-700 font-semibold mb-1">
              Car Description
            </label>
            <textarea
              name="description"
              placeholder="Write details about your car (condition, mileage, features...)"
              className="textarea outline-0 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition rounded-md px-3 py-2 w-full h-32"
              required
            ></textarea>
          </div>
        </div>

        <button
          className="
        btn btn-neutral 
        w-full mt-8 py-3 
        rounded-xl 
        font-bold text-lg 
        shadow-md hover:shadow-xl 
        transition
      "
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default SellCarFromDesign;
