"use client";

import useAxios from "@/Components/Axios/useAxios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaCar } from "react-icons/fa";

export default function CarDetails() {
  const params = useParams();
  const id = params.id;
  const axios = useAxios();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/car-selling/${id}`)
      .then((res) => {
        setCar(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [id, axios]);

  if (loading) {
    return <div className="p-10 text-center text-xl font-semibold">Loading...</div>;
  }

  if (!car) {
    return <div className="p-10 text-center text-xl font-semibold">Car Not Found</div>;
  }

  return (
    <div className="w-11/12 lg:w-3/4 mx-auto py-10">
      {/* Top Image */}
      <div className="relative w-full h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={car.image}
          alt="Car Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-6">
        {car.carTypes}: {car.condition}
      </h1>

      {/* Author & Date */}
      <div className="flex flex-wrap items-center gap-4 text-gray-500 mt-2 text-sm">
        <div className="flex items-center gap-1">
          <FaUser /> <span>{car.name}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaCalendarAlt /> <span>{new Date(car.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt /> <span>{car.address}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 text-gray-700 space-y-4">
        <p>{car.description}</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Registration: {car.registration}</li>
          <li>NID: {car.nid}</li>
          <li>More Specs here...</li>
        </ul>
      </div>

      {/* Optional: Contact Button */}
      <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
        Comment 
      </button>

      {/* comment section */}
      <section className="comment-section ">

      </section>
    </div>
  );
}
