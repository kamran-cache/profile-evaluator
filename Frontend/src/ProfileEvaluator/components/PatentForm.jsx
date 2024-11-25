import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormField,
  addAuthorship,
  resetForm,
} from "../redux/authorshipSlice"; // Adjust import path as needed
import { store } from "../redux/store";

const PatentForm = () => {
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

    dispatch(setFormField({ name: "authorshipType", value: "Patent" }));
    dispatch(addAuthorship()); // Dispatch action to add authorship entry
    dispatch(resetForm()); // Reset form after submission
  };

  return (
    <>
      <div>
        <form className="w-full pr-12" onSubmit={handleSubmit}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  Patent <strong>Title</strong>
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
                  <strong>Inventors</strong>
                </label>
                <input
                  type="text"
                  name="authors"
                  placeholder="Who are the inventors listed on the patent?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={currentForm.authors || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Patent Number</strong>
                </label>
                <input
                  type="text"
                  name="patentNumber"
                  placeholder="What is the patent number?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={currentForm.patentNumber || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Date Filed</strong>
                </label>
                <input
                  type="text"
                  name="date"
                  placeholder="When was the patent application filed?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  //   onFocus={(e) => (e.target.type = "date")}
                  //   onBlur={(e) => (e.target.type = "text")}
                  value={currentForm.date || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Date Granted</strong>
                </label>
                <input
                  type="text"
                  name="date_granted"
                  placeholder=" When was the patent granted?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  value={currentForm.date_granted || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Patent Office</strong>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder=" Which country's patent office granted the patent?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  //   onFocus={(e) => (e.target.type = "date")}
                  //   onBlur={(e) => (e.target.type = "text")}
                  value={currentForm.location || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font- text-[#07074D]">
                  <strong>Assignees</strong>
                </label>
                <input
                  type="text"
                  name="assignees"
                  placeholder="Who owns the patent (company or individual)?"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={currentForm.assignees || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="w-full px-3">
            <div className="mb-5">
              <label className="mb-3 block text-base font- text-[#07074D]">
                <strong>Description</strong>
              </label>
              <textarea
                name="summary"
                placeholder="What is the general description of the invention?"
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

export default PatentForm;
