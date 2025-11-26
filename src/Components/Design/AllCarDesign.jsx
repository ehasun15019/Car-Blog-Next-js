import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllCarDesign = ({
  id,
  name,
  email,
  carTypes,
  condition,
  image,
  createdAt,
}) => {
  return (
    <div className="card card-side flex-col lg:flex-row bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition mb-6 border border-gray-100">
      {/* LEFT IMAGE */}
      <div className="relative w-full lg:w-1/3 h-64 lg:h-auto flex-shrink-0">
        <Image
          src={image}
          alt="car image"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* RIGHT DETAILS */}
      <div className="card-body flex flex-col justify-between p-6 w-full lg:w-2/3">
        <h2 className="card-title text-2xl font-bold text-gray-900">
          {carTypes}
        </h2>

        <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <p className="text-gray-800">
              <span className="font-semibold">Seller:</span> {name}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Published:</span>{" "}
              {new Date(createdAt).toLocaleDateString()}
            </p>
            <p>
              Condition:{" "}
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                {condition}
              </span>
            </p>
          </div>
        </div>

        <Link
          href={`/all-cars/${id}`}
          className="btn btn-primary w-[120px] mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AllCarDesign;
