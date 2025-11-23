import { newTechnology } from "@/assets/assets";
import React from "react";
import NewTechnologyDesign from "../Design/NewTechnologyDesign";
import Title from "../Title/Title";

const NewTechnology = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 space-y-3 py-5">
      <div className="ps-2">
        <Title title1={"New Technology"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-3">
        {newTechnology.map((item) => {
          return (
            <div key={item.id} className="">
              <NewTechnologyDesign
                img={item.img}
                description={item.description}
                profile_img={item.profile_img}
                profile_name={item.profile_name}
                date={item.date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewTechnology;
