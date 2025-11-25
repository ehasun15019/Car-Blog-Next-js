import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestBlogDesign = ({
  name,
  email,
  carTypes,
  condition,
  image,
  description,
  createdAt,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT IMAGE SECTION */}
      <section className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-100 flex flex-col">
        <div className="w-full h-64 relative rounded-xl overflow-hidden mb-4">
          <Image src={image} alt={carTypes} fill className="object-cover" />
        </div>

        <div>
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Car Details</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </section>

      {/* RIGHT TEXT SECTION */}
      <section className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 border border-gray-100 flex flex-col justify-between">
        <div className="space-y-4">
          {/* AUTHOR INFO */}
          <div className="space-y-2">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-gray-900">By:</span>{" "}
              <span className="text-primary font-semibold">{name}</span>
            </p>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Published:</span>{" "}
              {new Date(createdAt).toLocaleString()}
            </p>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>

          {/* CONDITION + CATEGORY */}
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Car Type:</span> {carTypes}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Condition:</span>{" "}
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  condition === "New"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {condition}
              </span>
            </p>
          </div>
        </div>

        {/* BUTTON SECTION */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <Link
            className="btn bg-secondary text-white w-full md:w-1/2 text-center py-3 rounded-lg shadow hover:shadow-lg transition"
            href="/cars"
          >
            Show all cars
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LatestBlogDesign;
