/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import BlogForm from "../components/BlogPost/BlogPostForm";
export default function CreateBlog() {
  return (
    <>
      <div className="container flex flex-row pt-[40px]">
        <Link to="/">
          <ArrowLeftIcon color="white" />
        </Link>

        <div className="flex items-start flex-col w-[600px] ml-[240px]">
          <span className="text-black font-bold text-[32px] leading-10 mb-[40px]">
            ბლოგის დამატება
          </span>
          <BlogForm />
        </div>
      </div>
    </>
  );
}