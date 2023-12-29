/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Login from "../components/Modals/Login";
import Success from "../components/Modals/Success";
import Button from "../components/Button";

export default function Header() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowSuccessModal(true);
  };

  const handleAddBlog = () => {
    navigate("/create-blog");
  };

  return (
    <header className="border-b border-solid border-gray-300 bg-white">
      <div className="container h-[80px] flex justify-between items-center shrink-0">
        <div>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div>
  
          {loggedIn ? (
            <Button title="დაამატე ბლოგი" onClick={handleAddBlog}  />
          ) : (
            <Button title="შესვლა" onClick={handleShow}  />
          )}

          <Login
            showModal={showModal}
            handleClose={handleClose}
            onLoggedIn={handleLogin}
          />
          <Success
            title="წარმატებული ავტორიზაცია"
            showModal={showSuccessModal}
            handleClose={() => setShowSuccessModal(false)}
          />
        </div>
      </div>
    </header>
  );
}
