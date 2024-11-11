import React from "react";
import Arrow from "../../assets/Arrow 1.svg";
import Line from "../../assets/Line2.svg";

const Section2 = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" }); // Get full month name
    return `${month} ${year}`; // Format as "Month Year"
  };
  return (
    <div className="h-screen  flex flex-col items-center font-metropolis mt-[8vh]">
      <div className="header flex flex-col items-center">
        <div className="title flex flow-row items-center gap-2 font-semibold text-[32px]">
          <p className="text-black">VISA Journey</p>{" "}
          <p className="text-[#007EE8]">Summary</p>
        </div>
        <div className="title2 font-medium text-[#646464]">
          High-level overview of the path you’ve followed
        </div>
      </div>

      <div className="body mt-12 h-[60%] w-[80%]  flex ">
        <div className="visacontentmap  flex flex-row items-cente justify-center  w-full space-x-">
          {data &&
            data.forms.map((item, index) => (
              <>
                <div className="card flex flex-col">
                  {index % 2 !== 0 && (
                    <>
                      <div className="flex flex-col items-center h-[21vh] w-[10.9vw]">
                        <p className="text-sm leading-5 text-center text-[#9F9F9F] font-medium">
                          Obtained F-1 visa after acceptance to a U.S.
                          university. Attended visa interview and received
                          approval.
                        </p>
                        <img src={Line} className="mt-[3vh]"/>
                      </div>
                    </>
                  )}

                  <div className={`flex flex-col items-center w-[10.9vw] ${index % 2 !== 0 ? "mt-3" : "mt-[19vh]"}`}>
                  {index % 2 === 0 && (
                    <>
                      <div className="max-w-[6.5vw]">
                        <div className="flex justify-center text-center">
                          <div className="date  text-sm font-normal leading-4 mb-3 text-[#9F9F9F]">
                            {formatDate(item.endDate)}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div
                    className="w-[6.5vw]" 
                  >
                    <div className={`visa text-white font-semibold  text-2xl  p-4 text-center flex items-center justify-center rounded-lg ${
                index % 3 === 0
                  ? 'bg-[#007EE8]'   // index 0, 3, 6...
                  : index % 3 === 1
                  ? 'bg-[#00E8AA]'  // index 1, 4, 7...
                  : 'bg-[#E63950]'    // index 2, 5, 8...
              }`}>
                      {item.visaType}
                    </div>
                  </div>

                  {index % 2 !== 0 && (
                    <>
                      <div className="max-w-[6.5vw]">
                        <div className="flex justify-center text-center">
                          <div className="date  text-sm font-normal leading-4 mt-3 text-[#9F9F9F]">
                            {formatDate(item.endDate)}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  </div>
                  {index % 2 === 0 && (
                    <>
                      <div className="flex flex-col items-center h-[21vh] w-[10.9vw]">
                        <img src={Line} className="mb-[3vh] mt-[1.5vh] rotate-180"/>
                        <p className="text-sm leading-5 text-center text-[#9F9F9F] font-medium">
                        Filed and received approval for O-1 visa based on extraordinary ability in June.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {index !== data.forms.length - 1 ? (
                  <img src={Arrow} className="-mt-10 w-[4.38vw]" />
                ) : (
                  ""
                )}
              </>
            ))}
        </div>
      </div>
      {/* <hr className="w-[96%] bg-[#696969] h-[1px] md:mt-16" />
      <div className=" flex w-[96%] justify-end  pageno">2</div> */}
    </div>
  );
};

export default Section2;
