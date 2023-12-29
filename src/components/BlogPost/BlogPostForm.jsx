/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { post } from "../../api/api";
import Input from "../input";
import FolderAddIcon from "../icons/FolderAddIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { Link } from "react-router-dom";
const CriteriaList = ({ criteria }) => (
  <ul>
    {criteria.map((criterion, index) => (
      <li
        key={index}
        className={criterion.met ? "text-[#14D81C]" : "text-red-700"}
      >
        {criterion.text}
      </li>
    ))}
  </ul>
);
export default function BlogForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [authorValidation, setAuthorValidation] = useState({
    isValid: true,
    criteria: [],
    setValidation: (validation) => setAuthorValidation(validation),
  });
  const [titleValidation, setTitleValidation] = useState({
    isValid: true,
    criteria: [],
    setValidation: (validation) => setTitleValidation(validation),
  });
  const [descriptionValidation, setDescriptionValidation] = useState({
    isValid: true,
    criteria: [],
    setValidation: (validation) => setDescriptionValidation(validation),
  });
  const [fileValidation, setFileValidation] = useState({
    isValid: true,
    criteria: [],
  });
  const [dateValidation, setDateValidation] = useState({
    isValid: true,
    criteria: [],
  });
  const [categoryValidation, setCategoryValidation] = useState({
    isValid: true,
    criteria: [],
  });
  const [emailValidation, setEmailValidation] = useState({
    isValid: true,
    criteria: [],
  });
  const validations = [
    {
      value: author,
      setValue: setAuthor,
      validation: validateAuthor,
      validationState: authorValidation,
      label: "ავტორი *",
      placeholder: "შეიყვნეთ ავტორი",
      setValidation: setAuthorValidation,
    },
    {
      value: title,
      setValue: setTitle,
      validation: validateTitle,
      validationState: titleValidation,
      label: "სათაური *",
      placeholder: "შეიყვნეთ სათაური",
      setValidation: setTitleValidation,
    },
    {
      value: description,
      setValue: setDescription,
      validation: validateDescription,
      validationState: descriptionValidation,
      label: "აღწერა *",
      placeholder: "შეიყვნეთ აღწერა",
      setValidation: setDescriptionValidation,
    },
    {
      value: file,
      setValue: setFile,
      validation: validateFile,
      validationState: fileValidation,
      label: "ფოტო",
    },
    {
      value: date,
      setValue: setDate,
      validation: validateDate,
      validationState: dateValidation,
      label: "გამოქვეყნების თარიღი *",
    },
    {
      value: category,
      setValue: setCategory,
      validation: validateCategory,
      validationState: categoryValidation,
      label: "კატეგორია",
      placeholder: "Search category...",
    },
    {
      value: email,
      setValue: setEmail,
      validation: validateEmail,
      validationState: emailValidation,
      label: "ელ-ფოსტა",
      placeholder: "example@redberry.ge",
    },
  ];
  function validateAuthor(value) {
    const georgianWordRegex = /^[\u10D0-\u10FA]+$/;
    const words = value.split(/\s+/);
    const isValid =
      value.length >= 4 &&
      words.length >= 2 &&
      words.every((word) => georgianWordRegex.test(word));
    const criteria = [
      { text: "მინიმუმ 4 სიმბოლო", met: value.length >= 4 },
      { text: "მინიმუმ ორი სიტყვა", met: words.length >= 2 },
      {
        text: "მხოლოდ ქართული სიმბოლოები",
        met: words.every((word) => georgianWordRegex.test(word)),
      },
    ];
    setAuthorValidation({
      isValid,
      criteria,
    });
    return {
      isValid,
      criteria,
    };
  }
  function validateTitle(value) {
    const isValid = value.length >= 2;
    const criteria = [{ text: "მინიმუმ 2 სიმბოლო", met: isValid }];
    setTitleValidation({
      isValid,
      criteria,
    });
    return {
      isValid,
      criteria,
    };
  }
  function validateDescription(value) {
    const isValid = value.length >= 2;
    const criteria = [{ text: "მინიმუმ 2 სიმბოლო", met: isValid }];
    setDescriptionValidation({
      isValid,
      criteria,
    });
    return {
      isValid,
      criteria,
    };
  }
  function validateFile(value) {}
  function validateDate(value) {}
  function validateCategory(value) {}
  function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value) && value.endsWith("@redberry.ge");
    setEmailValidation({
      isValid,
      criteria: [
        {
          text: "ელ-ფოსტა უნდა მოითხოვდეს @redberry.ge-ით",
          met: isValid,
        },
      ],
    });
    return {
      isValid,
      criteria: [
        {
          text: "ელ-ფოსტა უნდა მოითხოვდეს @redberry.ge-ით",
          met: isValid,
        },
      ],
    };
  }
  function handleInputChange(index, value) {
    validations[index].setValue(value);
    const validation = validations[index].validation(value);
    validations[index].setValidation(validation);
  }
  async function submitForm() {
    // Perform additional validations for other fields as needed
    const isFormValid = validations.every(
      (input) => input.validationState.isValid
    );
    if (isFormValid) {
      try {
        const formData = new FormData();
        formData.append("author", author);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("file", file);
        formData.append("date", date);
        formData.append("category", category);
        formData.append("email", email);
        const response = await post("/blogs", formData);
        if (response.status === 200) {
          setMessage("Blog posted successfully!");
        } else {
          setMessage("Failed to post the blog. Please try again.");
        }
      } catch (error) {
        console.error(error);
        setMessage("An error occurred. Please try again later.");
      }
    } else {
      setMessage("Please correct the form errors before submitting.");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    submitForm();
  }
  return (
    <div className="container  ">
    <div className="flex flex-row items-center gap-[240px]">
       <Link to="/">
            <ArrowLeftIcon color="white" />
          </Link>
      <h1 className="bg-[#f3f2fa] mt-10 mb-10 text-[32px] text-black ">ბლოგის დამატება</h1>
</div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="bg-white w-[600px] h-[760px] ml-[300px] gap-6"
      >
        <h6>ატვირთე ფოტო</h6>
        <div
          style={{
            border: "2px dotted gray",
            backgroundColor: "lightgray",
            padding: "20px",
            textAlign: "center",
            margin: "10px auto",
          }}
        >
          <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <div className="flex flex-col items-center justify-center">
              <FolderAddIcon />
              <p>ჩააგდეთ ფაილი აქ ან აირჩიეთ ფაილი</p>
            </div>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) =>
              handleInputChange(
                validations.findIndex((v) => v.label === "ფოტო"),
                e.target.files[0]
              )
            }
          />
          <CriteriaList criteria={fileValidation.criteria} />
        </div>

        <div>
          <div className="flex flex-row gap-[24px] justify-around ">
            <Input
              type="text"
              id="authorInput"
              label="ავტორი *"
              value={author}
              placeholder="შეიყვნეთ ავტორი"
              isValid={authorValidation.isValid}
              onChange={(value) =>
                handleInputChange(
                  validations.findIndex((v) => v.label === "ავტორი *"),
                  value
                )
              }
              onBlur={() => {}}
              
            />
            <Input
              type="text"
              id="titleInput"
              label="სათაური *"
              value={title}
              placeholder="შეიყვნეთ სათაური"
              isValid={titleValidation.isValid}
              onChange={(value) =>
                handleInputChange(
                  validations.findIndex((v) => v.label === "სათაური *"),
                  value
                )
              }
              onBlur={() => {}}
            />
          </div>
          <div className="flex flex-row justify-around">
            <CriteriaList criteria={authorValidation.criteria} />
            <CriteriaList criteria={titleValidation.criteria} />
          </div>
        </div>

        
        <div className="flex flex-col mt-3">
          <label htmlFor="descriptionInput" className="ml-2">აღწერა*</label>
          <textarea
            id="descriptionInput"
            value={description}
            placeholder="შეიყვნეთ აღწერა"
            onChange={(e) =>
              handleInputChange(
                validations.findIndex((v) => v.label === "აღწერა *"),
                e.target.value
              )
            }
            onBlur={() => {}}
            
          />
          <CriteriaList criteria={descriptionValidation.criteria} />
        </div>

        
        <div className="flex flex-row justify-between mx-7">
          <Input
            type="text"
            id="dateInput"
            label="გამოქვეყნების თარიღი *"
            value={date}
            isValid={dateValidation.isValid}
            onChange={(value) =>
              handleInputChange(
                validations.findIndex(
                  (v) => v.label === "გამოქვეყნების თარიღი *"
                ),
                value
              )
            }
            onBlur={() => {}}
          />
          <Input
            type="text"
            id="categoryInput"
            label="კატეგორია"
            value={category}
            placeholder="Search category..."
            isValid={categoryValidation.isValid}
            onChange={(value) =>
              handleInputChange(
                validations.findIndex((v) => v.label === "კატეგორია"),
                value
              )
            }
            onBlur={() => {}}
          />
        </div>
        <CriteriaList criteria={dateValidation.criteria} />
        <CriteriaList criteria={categoryValidation.criteria} />

        <Input
          type="text"
          id="emailInput"
          label="ელ-ფოსტა"
          value={email}
          placeholder="example@redberry.ge"
          isValid={emailValidation.isValid}
          onChange={(value) =>
            handleInputChange(
              validations.findIndex((v) => v.label === "ელ-ფოსტა"),
              value
            )
          }
          onBlur={() => {}}
        />
        <CriteriaList criteria={emailValidation.criteria} />
        <div className="flex items-end">
        <button type="submit">Create</button></div>
      </form>
    </div>
  );
}
