/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FileIcon from "../icons/FolderAddIcon";
import Input from "../input";
import Button from "../Button";
import { post } from "../../api/api";

export default function BlogForm() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: null,
    description: null,
    image: null,
    author: null,
    publish_date: null,
    categories: null,
    email: null,
  });

  const handleSubmitForm = async () => {
    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("image", formData.image);
      data.append("description", formData.description);
      data.append("author", formData.author);
      data.append("publish_date", formData.publish_date);
      data.append("categories", formData.categories);
      data.append("email", formData.email);

      await post("/blogs", data);

      setErrors({});
    } catch (error) {
      setErrors(error.response?.data?.errors);
    }
  };

  const handleUploadImage = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";

    inputElement.addEventListener("change", (event) => {
      const file = event.target.files[0];

      setFormData({
        ...formData,
        image: file,
      });
    });

    inputElement.click();
  };

  return (
    <div className="container">
      <div>
        <span className=" font-medium text-[14px] leading-5 text-black">
          ატვირთეთ ფოტო*
        </span>

        <div
          className="mt-1 cursor-pointer w-[600px] h-[180px] rounded-xl border border-dashed bg-gray-400 flex flex-col items-center justify-center gap-[24px]"
          onClick={handleUploadImage}
        >
          <FileIcon />
          <p className="text-[14px]  leading-5 font-normal ">
            ჩააგდეთ ფაილი აქ ან
            <span className="underline cursor-pointer text-black text-[14px] not-italic leading-5 font-medium ml-[5px]">
              აირჩიეთ ფაილი
            </span>
          </p>
        </div>

        <div className="flex gap-[24px] flex-wrap my-[24px]">
          <div className="flex flex-col items-start">
            <Input
              id="authorInput"
              placeholder="შეიყვნეთ ავტორი"
              label="ავტორი *"
              value={formData.author}
              isValid={!errors?.author}
              errorMessage={errors.author}
              name="author-input"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  author: e,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start">
            <Input
              id="titleInput"
              placeholder="შეიყვნეთ სათაური"
              label="სათური *"
              value={formData.title}
              isValid={!errors?.title}
              errorMessage={errors.title}
              name="title-input"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e,
                })
              }
            />
          </div>
        </div>
        <div className="mb-[24px]">
          <span className="text-black text-[14px] not-italic leading-5 font-medium">
            აღწერა *
          </span>
          <Input
            id="descriptionInput"
            placeholder="შეიყვნეთ აღწერა"
            value={formData.description}
            isValid={!errors?.description}
            name="description-input"
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e,
              })
            }
          />
        </div>
        <div className="flex gap-[24px] flex-wrap">
          <div>
            <Input
              type="date"
              id="dateInput"
              label="გამოქვეყნების თარიღი *"
              value={formData.publish_date}
              isValid={!errors?.publish_date}
              name="date-input"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  publish_date: e,
                })
              }
            />
          </div>
          <div>
            <Input
              id="categoriesInput"
              type="text"
              label="კატეგორია *"
              value={formData.categories}
              isValid={!errors?.categories}
              placeholder="კატეგორია"
              name="categories-input"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  categories: e,
                })
              }
            />
          </div>
        </div>
        <Input
              type="text"
              id="emailInput"
              label="ელ-ფოსტა"
              value={formData.email}
              isValid={!errors?.email}
              name="email-input"
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
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e,
                })
              }
            />
      </div>
      <div className="flex justify-end mt-[40px]" onClick={handleSubmitForm}>
        <Button title="გამოქვეყნება" />
      </div>
    </div>
  );
}