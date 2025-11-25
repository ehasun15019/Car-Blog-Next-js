"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import useAxios from "../Axios/useAxios";
import LatestBlogDesign from "../Design/LatestBlogDesign";

const LatestBlogs = () => {
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/car-selling-home").then((res) => {
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
    <div className="px-4 sm:px-10 lg:px-20 py-10">
      <div className="header">
        <Title title1={"Latest Car Selling BLogs"} />
      </div>

      <div className="">
        {showData.map((item) => {
          return (
            <LatestBlogDesign
              key={item._id}
              image={item.image}
              name={item.name}
              email={item.email}
              createdAt={item.createdAt}
              carTypes={item.carTypes}
              condition={item.condition}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestBlogs;
