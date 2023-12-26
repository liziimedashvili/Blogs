/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Category({
  category,
  onChooseCategory,
  selectedCategory,
}) {
  const isCategorySelected = selectedCategory === category;

  const handleClick = () => {
    onChooseCategory(category);
  };

  return (
    <div
      className={`items-center flex cursor-pointer underline-offset-4 ${
        isCategorySelected ? "underline text-secondary" : "bg-transparent"
      }`}
      onClick={handleClick}
    >
      <span
        className="text-[12px] not-italic font-medium leading-4 px-[16px] py-[8px] rounded-[30px] cursor-pointer"
        style={{
          backgroundColor: category.background_color,
          color: category.text_color,
        }}
      >
        {category.title}
      </span>
    </div>
  );
}