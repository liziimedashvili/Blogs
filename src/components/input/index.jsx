/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ErrorIcon from "../icons/ErrorIcon";
const Input = ({
  type,
  id,
  label,
  value,
  placeholder,
  onChange,
  onBlur,
  validation,
  isValid: propIsValid,
  ...props
}) => {
  const [isValid, setIsValid] = useState(propIsValid);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setIsValid(propIsValid);
  }, [propIsValid]);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (onChange) {
      onChange(inputValue);
    }
    if (validation) {
      const { isValid, errorMessage } = validation(inputValue);
      setIsValid(isValid);
      setErrorMessage(errorMessage);
    }
  };
  return (
    <div className={`mb-4  ${isValid ? "border-green-500" : "border-red-500"}`}>
      <label
        htmlFor={id}
        className="block text-[14px] mb-2 font-medium text-[#1A1A1F] "
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        className={`w-full p-2 border border-solid pl-4 text-[14px]  border-[#85858D] placeholder-[#85858D] focus:outline-none focus:ring focus:border-purple-500 rounded-lg bg-[#F7F7FF] ${
          isValid ? "" : "border-red-500"
        }`}
        onChange={handleInputChange}
        onBlur={onBlur}
      />
      {!isValid && (
        <div className="text-red-500 text-[14px] flex gap-[8px] mt-[8px]">
          <ErrorIcon /> {errorMessage || "Invalid input."}
        </div>
      )}
    </div>
  );
};
export default Input;