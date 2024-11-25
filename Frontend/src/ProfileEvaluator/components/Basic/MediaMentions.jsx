import React from "react";
import { useState, useRef } from "react";
import Recognition from "../../assets/Recognition.webp";
import NavigationBtn from "../NavigationBtn";

const MediaMentions = () => {
  return (
    <>
      <div className="flex w-full pt-4">
        <div className="flex justify-center w-1/2 h-full">
          {/* Form component */}
          <div className="flex flex-col justify-between w-full pl-12 bg-white">
            {/* Scrollable form content */}
            <div className="overflow-y-auto overflow-x-hidden w-full h-[35rem] py-4 scrollbar-transparent">
              <form className="w-full pr-12">
                <div className="flex text-2xl font-semibold mb-4">
                  Showcase Your Recognition in the Media
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Title or Headline</strong> of the
                        media mention?
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="e.g., 'Innovative Research by John Doe Featured in ABC News'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What <strong>Type Of Media</strong> featured your
                        mention?
                      </label>
                      <div className="flex space-x- w-full">
                        <input
                          type="text"
                          name="type"
                          id="type"
                          placeholder="e.g., 'Newspaper', 'Magazine', 'Online Article'"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 ">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        What is the <strong>Name</strong> of the publication or
                        channel where you were mentioned?
                      </label>
                      <input
                        name="nameOfPublication"
                        type="text"
                        placeholder="e.g., 'The New York Times'"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 ">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font- text-[#07074D]">
                        <strong>When</strong> was the media mention published or
                        broadcast?
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder=""
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 -mx-3">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font- text-[#07074D]">
                      Who is the <strong>Author or Journalist</strong> that
                      wrote the piece featuring your mention?
                    </label>
                    <input
                      name="author"
                      type="text"
                      placeholder="e.g., 'Jane Smith', 'John Doe'"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 -mx-3">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font- text-[#07074D]">
                      <strong>Link</strong> to Media Mention (URL or reference)
                    </label>
                    <input
                      name="url"
                      type="text"
                      placeholder="e.g., 'https://www.example.com/article-name'"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[4rem] w-1/2">
          <div className="sticky top-4">
            <img
              src={Recognition}
              className="rounded-xl shadow-md w-[40rem] h-[27rem]"
            />
          </div>
        </div>
      </div>
      <NavigationBtn />
    </>
  );
};

export default MediaMentions;
