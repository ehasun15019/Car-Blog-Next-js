"use client";
import { AuthContext } from "@/Context/AuthContext";
import React, { use } from "react";
import { FaRegUser } from "react-icons/fa";
import Swal from "sweetalert2";

const ForgotPasswordFrom = () => {
  const { sendPasswordLink } = use(AuthContext);

  const handleResetPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    sendPasswordLink(email)
      .then(() => {
        Swal.fire({
          title: "Password Reset Link send in your Email",
          icon: "success",
          draggable: true,
        });
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
    <div className="flex justify-center items-center">
      <form
        className="w-[350px] bg-white shadow-md px-6 py-4 rounded-md"
        onSubmit={handleResetPassword}
      >
        {/* name */}
        <label className="label text-black font-semibold mb-4">Name</label>
        <div className="flex items-center px-3 rounded mb-2 bg-[#F8F7FB]">
          <FaRegUser className="text-primary" />
          <input
            type="email"
            className="input border-0 outline-0 bg-transparent"
            placeholder='Enter your email'
            name="email"
          />
        </div>

        <button className="btn btn-primary w-full text-black mt-2">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordFrom;
