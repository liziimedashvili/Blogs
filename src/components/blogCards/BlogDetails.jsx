/* eslint-disable no-unused-vars */
import Category from "../categories/Category";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../api/api";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [categories, setCategories] = useState([]); // Add state for categories
  const token = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogData, categoriesData] = await Promise.all([
          get(`/blogs/${id}`, {}, token),
          get("/categories", {}, token),
        ]);

        setBlogDetails(blogData);
        setCategories(categoriesData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, token]);

  return (
    <div>
      {blogDetails ? (
          <div className="flex flex-col items-start gap-[40px] one-card-container">
            <div>
              <img
                src={blogDetails.image}
                alt="ProductCardPhoto"
                className="h-auto w-[720px] border rounded-[12px]"
              />
            </div>
            <div className="flex flex-col items-start gap-[24px]">
              <div>
                <h1 className="text-[16px] text-black font-medium">
                  {blogDetails.author}
                </h1>
                <span className="text-[#85858D] text-[12px] leading-[16px] font-normal">
                  {blogDetails.publish_date}
                </span>
                {blogDetails.email && (
                  <span className="text-[#85858D] text-[12px] leading-[16px] font-normal">
                    & {blogDetails.email}
                  </span>
                )}
              </div>
              <div className="text-[32px] text-[#1A1A1F] leading-[40px] font-bold ">
                {blogDetails.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {categories
                  .filter((category) =>
                    blogDetails.categories.some(
                      (blogCategory) => blogCategory.id === category.id
                    )
                  )
                  .map((category) => (
                    <Category
                      key={category.id}
                      category={category}
                      onClick={() => console.log("Category clicked")}
                    />
                  ))}
              </div>
            </div>
            <div className="font-normal text-[16px] leading-7 text-[#404049]">
              {blogDetails.description}
            </div>
          </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
