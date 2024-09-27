import React from 'react'

const ProfDetails = () => {
  return (
    <>
      <div className="flex w-full pt-4">
        <div className="flex justify-center w-1/2">
          {/* Form component */}
          <div className="flex items-center justify-center px-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form>
              <div className="flex text-2xl font-semibold mb-4">Professional Details</div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Domain
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Enter your domain"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Niche
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Specialization"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Position
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., Software Engineer"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Company
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Company Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Location
                      </label>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="e.g., New York, NY"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

               
                

                

              </form>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 ">world</div>
      </div>
    </>
  )
}

export default ProfDetails