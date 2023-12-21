/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { get } from "../../api/api";
import BlogCard from "./BlogCard";

const BlogCardsWrapper = () => {
  const [data, setData] = useState([]);
  const token = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await get("/blogs", {}, token);
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="custom-container">
      {!data?.length ? (
        <p>No data available</p>
      ) : (
        <div className="flex flex-wrap gap-x-[32px] gap-y-[56px] items-start mb-9">
          {data.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              publish_date={blog.publish_date}
              categories={blog.categories}
              description={blog.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogCardsWrapper;
