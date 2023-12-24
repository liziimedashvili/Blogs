/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import Category from "../categories/Category"; 
import { Link } from "react-router-dom"; 

export default function BlogCard({
  id,
  image,
  title,
  author,
  publish_date,
  categories, 
  description,
}) {
  return (
    <div>
      <div className="w-[408px] h-[620px] flex flex-col items-start gap-[24px]">
        <div>
          <img
            src={image}
            alt="ProductCardPhoto"
            className="h-[328px] w-[408px] border rounded-[12px]"
          />
        </div>
        <div className="flex flex-col items-start gap-[16px]">
          <div>
            <h1 className="text-[16px] text-black font-medium">{author}</h1>
            <span className="text-[#85858D] text-[12px] leading-[16px] font-normal">
              {publish_date}
            </span>
          </div>
          <div className="text-[20px] text-[#1A1A1F] leading-[28px] ">
            {title}
          </div>
          <div className="flex flex-wrap gap-1">
            {categories.map((category) => (
              <span key={category.id} className="text-xs font-medium not-italic py-[6px] px-[10px] rounded-[30px] cursor-pointer"
              style={{
                backgroundColor: category.background_color,
                color: category.text_color,
              }}
              >{category.title}</span>
            ))}
          </div>
          <div className="font-normal text-[16px] leading-7 overflow-hidden two-line-truncate">
            {description}
          </div>
          <Link
            to={`/blog/${id}`}
            className="flex flex-row items-center mt-auto"
          >
            <h2 className="text-[#5D37F3] font-medium leading-4 text-[14px]">
              სრულად ნახვა
            </h2>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
  
}
