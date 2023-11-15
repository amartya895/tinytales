import React from "react";
import profileBg from "../images/profileBg.jpeg";

const Profile = () => {
  return (
    <div className="relative w-full h-44 overflow-hidden">
      <img
        src={profileBg}
        alt="profile background"
        className="w-full h-full object-cover sm:h-48 md:h-64 lg:h-80 xl:h-96"
      />
    </div>
  );
};

export default Profile;
