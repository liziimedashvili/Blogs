/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import SingleBlogPage from "./pages/WholeBlogPage";
import CreateBlog from "./pages/CreateBlog";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}
