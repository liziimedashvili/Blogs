/* eslint-disable no-unused-vars */
import React from "react";
import MainBlogPhoto from "../../assets/BlogPhoto.png";

export default function HeaderGuide() {
  return (
    <div className="custom-container">
      <div className="py-[64px] flex flex-row items-center justify-between">
        <div>
          <h1 className="text-6xl font-bold leading-16 ml-5">ბლოგი</h1>
        </div>
        <div>
          <img
            src={MainBlogPhoto}
            alt="Logo"
            className=" w-[624px] h-[200px] "
          />
        </div>
      </div>
    </div>
  );
}
