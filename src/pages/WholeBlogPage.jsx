/* eslint-disable no-unused-vars */
import React from "react";
import BlogDetails from "../components/blogCards/BlogDetails";
import ArrowIcon2 from "../components/icons/ArrowIcon2";
import { Link } from "react-router-dom";

export default function WholeBlogPage() {
  return (
    <div className="flex flex-row  mt-9">
      <div className="cursor-pointer ml-16 w-[44px] ">
        <Link to="/">
          <ArrowIcon2 />
        </Link>
      </div>
      <div className="one-card-container">
        <BlogDetails />
      </div>
    </div>
  );
}
