import React from "react";
import Title from "../Title/Title";
import AllCategoriesDesign from "../Design/AllCategoriesDesign";
import { allCategories } from "@/assets/assets";

const AllCategories = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 space-y-3 py-5">
      <div className="ps-2">
        <Title title1={"All Category"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-3">
        {allCategories.map((item) => {
          return (
            <div key={item.id} className="">
              <AllCategoriesDesign
                img={item.img}
                description={item.description}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
