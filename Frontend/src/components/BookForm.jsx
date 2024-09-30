import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormField,
  addAuthorship,
  resetForm,
} from "../redux/authorshipSlice"; // Adjust import path as needed
import { store } from "../redux/store";

const BookForm = () => {
  const dispatch = useDispatch();
  const currentForm = useSelector((state) => state.authorship.currentForm); // Access current form from Redux state
  console.log(currentForm, 123);
  // Handle form field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormField({ name, value }));
    console.log(store.getState());
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setFormField({ name: "section", value: "Book" }));
    dispatch(addAuthorship()); // Dispatch action to add authorship entry
    dispatch(resetForm()); // Reset form after submission
  };

  return (
    <>
      <div>
        <form className='w-full pr-12' onSubmit={handleSubmit}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  Book <strong>Title</strong>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter the title of the book"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={currentForm.title || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Author(s)</strong>
                </label>
                <input
                  type="text"
                  name="authors"
                  placeholder="Author names"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={currentForm.authors || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Date of Publication</strong>
                </label>
                <input
                  type="text"
                  name="publicationDate"
                  placeholder="YYYY-MM-DD"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  value={currentForm.publicationDate || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>ISBN</strong>
                </label>
                <input
                  type="text"
                  name="ISBN"
                  placeholder="What is the International Standard Book Number?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  //   onFocus={(e) => (e.target.type = "date")}
                  //   onBlur={(e) => (e.target.type = "text")}
                  value={currentForm.publicationDate || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Edition</strong>
                </label>
                <input
                  type="text"
                  name="Edition"
                  placeholder="Is this a first edition or a revised edition?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  //   onFocus={(e) => (e.target.type = "date")}
                  //   onBlur={(e) => (e.target.type = "text")}
                  value={currentForm.publicationDate || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Sales/Distribution</strong>
                </label>
                <input
                  type="text"
                  name="sales_distribution"
                  placeholder="How widely is the book distributed? Is it available online or in print only?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  //   onFocus={(e) => (e.target.type = "date")}
                  //   onBlur={(e) => (e.target.type = "text")}
                  value={currentForm.publicationDate || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Translation</strong>
                </label>
                <input
                  type="text"
                  name="translations"
                  placeholder=" Has the book been translated into other languages?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  //   onFocus={(e) => (e.target.type = "date")}
                  //   onBlur={(e) => (e.target.type = "text")}
                  value={currentForm.publicationDate || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Journal/Conference</strong>
                </label>
                <input
                  type="text"
                  name="publication"
                  placeholder="Journal or Conference name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={currentForm.publication || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="w-full px-3">
            <div className="mb-5">
              <label className="mb-3 block text-base font- text-[#07074D]">
                <strong>Summary</strong>
              </label>
              <textarea
                name="summary"
                placeholder="Provide a brief summary of the paper"
                rows="5"
                className="w-full h-[11rem] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={currentForm.summary || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
            type="submit"
          >
            Add Authorship
          </button>
        </form>
      </div>
    </>
  );
};

export default BookForm;
