/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { post } from "../../api/api";
import Modal from "../Modals/Modal";
import Button from "../Button";
import Input from "../input";

export default function Login({ showModal, handleClose, onLoggedIn }) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleLogin = async () => {
    if (isEmailValid) {
      try {
        await post("/login", {
          email: email,
        });
        onLoggedIn(true);
        handleClose(true);
        setEmail("");
        setErrors({});
      } catch (error) {
        setErrors(error.response?.data?.errors);
      }
    }
  };
  return (
    
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div>
        <h2 className="text-center text-2xl text-bold">შესვლა</h2>
        <Input
          type="text"
          id="emailInput"
          label="ელ-ფოსტა"
          value={email}
          isValid={!errors?.email}
          name="input"
          placeholder="Example@redberry.ge"
          validation={(value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid =
              emailRegex.test(value) && value.endsWith("@redberry.ge");
            setIsEmailValid(isValid);
            return {
              isValid: isValid,
              errorMessage: isValid
                ? errors.email
                  ? "ელ-ფოსტა არ მოიძებნა"
                  : "ელ-ფოსტა არ მოიძებნა"
                : "მეილი უნდა მთავრდებოდეს @redberry.ge-ით",
            };
          }}
          onChange={(e) => setEmail(e)}
        />
        <div className="flex justify-center w-100">
          <Button title="შესვლა" onClick={handleLogin} width="100%" />
        </div>
      </div>
    </Modal>
  );
}