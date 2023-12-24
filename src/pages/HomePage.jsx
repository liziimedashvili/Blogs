/* eslint-disable no-unused-vars */
import React from "react";
import HeaderGuide from "../components/HeaderGuide/HeaderGuide";
import Categories from "../components/categories/CategoryWrapper";
import BlogCardsWrapper from "../components/blogCards/BlogCardsWrapper";

export default function HomePage() {
  return (
    <div>
      <div>
        <HeaderGuide />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <BlogCardsWrapper />
      </div>
    </div>
  );
}
