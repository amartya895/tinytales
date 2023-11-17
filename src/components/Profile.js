import React from "react";
import profileBg from "../images/profileBg.jpeg";
import pp from "../images/profilepic.webp";

const Profile = ({ name, follower, following, position, instaid }) => {
  return (
    <>
      <div className="w-full h-40 overflow-hidden">
        <img
          src={profileBg}
          alt="profile background"
          className="w-full h-full object-cover sm:h-48 md:h-64 lg:h-80 xl:h-96"
        />
      </div>
      <div className="flex justify-start relative w-full">
        <div className="bg-red-300 h-26 w-26 rounded-full ml-6 absolute -top-6">
          <img
            className="rounded-full h-32 w-32 border border-yellow-600"
            src={pp}
            alt="profile pic"
          />
        </div>
        <div className="flex flex-col absolute ml-8 mt-2 left-36">
          <div className="flex justify-center items-center">
            <h1 className="text-lg font-semibold">{name}</h1>
            <span className="h-5 w-5 rounded-full bg-purple-700 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                />
              </svg>
            </span>
            <span className="h-5 w-5 rounded-full bg-green-500 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
          </div>
          <div className="flex text-center justify-between text-gray-400 mt-1">
            <div className="">
              <div className="border-2 rounded-md border-gray-400  font-bold px-3">
                <h1>{follower}</h1>
              </div>
              <p className="text-sm">Followers</p>
            </div>
            <div className="">
              <div className="border-2 rounded-md border-gray-400 font-bold  px-3">
                <h1>{following}</h1>
              </div>
              <p className="text-sm">Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 pl-8">
        <h1 className="text-lg text-gray-500">{position}</h1>
        <a
          className="text-cyan-300"
          href="https://www.instagram.com/anujgosalia"
        >
          {instaid}
        </a>
      </div>
    </>
  );
};

export default Profile;
