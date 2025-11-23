import Image from "next/image";
import React from "react";

const NewTechnologyDesign = ({
  img,
  description,
  profile_img,
  profile_name,
  date,
}) => {
  return (
    <div>
      <div className="card bg-gray-200 w-60 md:w-70 shadow-sm">
        <figure className="px-5 pt-5">
          <Image src={img} alt="feature image" />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title text-[1rem]">{description}</h2>

          <div className="card-actions flex items-center pt-4">
            <Image src={profile_img} alt="profile-image" width={40} />

            <div>
              <p className="text-[0.7rem]">{profile_name}</p>
              <p className="text-[0.6rem]">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTechnologyDesign;
