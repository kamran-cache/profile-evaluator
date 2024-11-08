import React from "react";
import Arrow from "../../assets/Arrow1.png";
const Section2 = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" }); // Get full month name
    return `${month} ${year}`; // Format as "Month Year"
  };
  return (
    <div className="h-screen  flex flex-col items-center font-metropolis ">
      <div className="header flex flex-col items-center">
        <div className="title flex flow-row items-center gap-2 font-semibold text-[32px]">
          <p className="text-black">VISA Journey</p>{" "}
          <p className="text-[#007EE8]">Summary</p>
        </div>
        <div className="title2  text-[#646464]">
          High-level overview of the path you’ve followed
        </div>
      </div>

      <div className="body mt-12 h-[70%] w-[80%] bg-gradient-to-b rounded-lg border-2 border-[#D3D3D3] from-[#F2F2F2] to-[#FAFAFA] flex ">
        <div className="visacontentmap  flex flex-row items-center justify-center  w-full space-x-2">
          {data &&
            data.forms.map((item, index) => (
              <>
                <div className="card flex flex-col  p-4 ">
                  <div className="visa bg-[#007EE8] text-white font-semibold  text-2xl  p-4 text-center flex items-center justify-center rounded-lg">
                    {item.visaType}
                  </div>
                  <div className="date   mt-3">{formatDate(item.endDate)}</div>
                </div>
                {index !== data.forms.length - 1 ? (
                  <img src={Arrow} alt="" className="-mt-5" />
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
