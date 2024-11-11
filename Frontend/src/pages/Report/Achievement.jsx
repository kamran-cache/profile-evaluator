import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Achievement = ({ data }) => {
  console.log(data, "awards");
  const carouselRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="main h-[45rem]  font-metropolis flex flex-col  justify-center items-center">
      <div className="header w-[85%] p-4 md:mt-6 flex flex-row  justify-between">
        <div className="firstrow w-2/3 flex flex-col ">
          <div className="col1 text-primary text-4xl font-semibold">
            {" "}
            Achievement and Awards
          </div>
          <div className="col2 desc font-semibold text-black text-lg mt-4">
            “This infographic showcases [Person’s Name]’s key achievements and
            awards during their role as a Data Analyst at [Company Name],
            illustrating contributions to data-driven projects, insights that
            impacted the business, and recognitions earned over time.”
          </div>
        </div>
        <div className="right w-1/3  flex items-center justify-center p-3 ">
          <div className="rating flex flex-col w-80 border border-[#D9D9D9] p-3 rounded-lg justify-center">
            <div className="row1 flex flex-row justify-between items-start ">
              <div className="5star flex flex-row w-1/2">
                <FaStar className="text-[#4ACB00] text-lg" />
                <FaStar className="text-[#4ACB00] text-lg" />
                <FaStar className="text-[#4ACB00] text-lg" />
                <FaStar className="text-[#4ACB00] text-lg" />
                <FaStar className="text-[#4ACB00] text-lg" />
              </div>
              <p className="text-lg font-semibold text-start w-1/2">Supreme</p>
            </div>

            <div className="row2 flex flex-row justify-between">
              <div className="4star flex flex-row w-1/2">
                <FaStar className="text-[#05E1C4] text-lg" />
                <FaStar className="text-[#05E1C4] text-lg" />
                <FaStar className="text-[#05E1C4] text-lg" />
                <FaStar className="text-[#05E1C4] text-lg" />
              </div>
              <p className="text-lg w-1/2 font-semibold text-start">Elite</p>
            </div>

            <div className="row3 flex flex-row justify-between ">
              <div className="3star w-1/2 flex flex-row ">
                <FaStar className="text-[#FED843] text-lg" />
                <FaStar className="text-[#FED843] text-lg" />
                <FaStar className="text-[#FED843] text-lg" />
              </div>
              <p className="text-lg w-1/2 font-semibold">Exemplary</p>
            </div>
            <div className="row3 flex flex-row justify-between">
              <div className="2star w-1/2 flex flex-row">
                <FaStar className="text-[#FB9A00] text-lg" />
                <FaStar className="text-[#FB9A00] text-lg" />
              </div>
              <p className="text-lg w-1/2 font-semibold">Commendable</p>
            </div>
            <div className="row3 flex flex-row justify-between">
              <div className="1star flex flex-row w-1/2">
                <FaStar className="text-[#E80042] text-lg" />
              </div>
              <p className="text-lg w-1/2 font-semibold">Aspiring</p>
            </div>
          </div>
        </div>
      </div>

      <div className="awardbody p-2 w-[85%] h-[70%] mb-2 relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute -left-2 top-[40%] transform -translate-y-1/2 z-10 bg-gray-500/50 p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="carousel-container p-3 flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 w-full h-full"
        >
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                className="card bg-[#FFF3F1] shadow shadow-neutral-400 flex-shrink-0 w-[45%] h-[85%] snap-start p-6 flex flex-col gap-2 space-y-2 rounded-lg"
              >
                <div className="row1 font-bold text-lg">Company Name</div>
                <div className="row2 flex flex-row gap-2">
                  <div className="title font-semibold text-[#4E4E4E]">
                    Award Name:
                  </div>
                  <div className="text">{item.name}</div>
                </div>
                <div className="row2 flex flex-row gap-2">
                  <div className="title font-semibold text-[#4E4E4E]">
                    Severity:
                  </div>
                  <div className="text">{item.name}</div>
                </div>
                <div className="row2 flex flex-row gap-2">
                  <div className="title font-semibold text-[#4E4E4E]">
                    Detials:
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestias cum maxime et. Cum alias quod nemo tenetur unde
                    amet quidem temporibus provident, et accusamus.
                  </div>
                </div>
                <div className="row2 flex flex-col gap-2">
                  <div className="title font-semibold text-[#4E4E4E]">
                    Documents:
                  </div>
                  <div className="text bg-[#D9D9D9] w-[25%] py-4 px-8 rounded-lg">
                    Lorem
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute  -right-2 top-[40%] transform -translate-y-1/2 z-10 h-8 w-8 bg-gray-500/50  p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Achievement;
