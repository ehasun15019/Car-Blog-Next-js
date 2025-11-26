"use client";

import React, { useEffect, useState } from "react";
import AllCarDesign from "../Design/AllCarDesign";
import useAxios from "../Axios/useAxios";

const AllCars = () => {
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/car-selling").then((res) => {
      setShowData(res.data);
      setLoading(false);
    });
  }, [axios]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-6">
        <span className="loading loading-dots loading-xl text-primary"></span>
      </div>
    );
  }
  return (
    <div className="space-y-25 py-6">
      {showData.map((item) => {
        return (
          <AllCarDesign
            key={item._id}
            image={item.image}
            name={item.name}
            email={item.email}
            carTypes={item.carTypes}
            condition={item.condition}
            createdAt={item.createdAt}
          />
        );
      })}
    </div>
  );
};

export default AllCars;
