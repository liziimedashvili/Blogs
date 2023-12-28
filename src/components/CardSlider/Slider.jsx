/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../blogCards/BlogCard";
import "swiper/css";

export default function CardsSlider({ blogs }) {
  return (
    <div className="mt-10 mb-10">
      <Swiper spaceBetween={32} slidesPerView={3}>
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogCard
              id={blog.id}
              image={blog.image}
              author={blog.author}
              publish_date={blog.publish_date}
              title={blog.title}
              description={blog.description}
              categories={blog.categories}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}