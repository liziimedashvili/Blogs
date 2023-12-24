/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { get } from "../../api/api";
import Category from "./Category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const token = import.meta.VITE_API_TOKEN;

  const fetchData = async () => {
    try {
      const result = await get("/categories", {}, token);
      setCategories(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const settings = {
    infinite: true,
    slidesToShow: 6, 
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">&#8592;</button>, 
    nextArrow: <button className="slick-next">&#8594;</button>,
  };

  return (
    <Slider {...settings} className="category-container">
      {categories.map((category) => (
        <div key={category.id} className="flex items-center p-auto">
          <Category category={category} onClick={handleCategoryClick} />
        </div>
      ))}
    </Slider>
  );
}