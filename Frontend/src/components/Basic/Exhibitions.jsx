import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHasExhibition,
  setSelectedRole,
  setRoleCount,
  addRole,
  setIsFormVisible,
  resetSubmittedRoles,
} from "../../redux/exhibitionSlice";
import Recognition from "../../assets/Recognition.webp";
import NavigationBtn from "../NavigationBtn";
import { useParams } from "react-router-dom";

const Exhibitions = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { hasExhibition, selectedRole, roleCount, forms, isFormVisible } =
    useSelector((state) => state.exhibition);

  const exhibitionData = useSelector((state) => state.exhibition);
  console.log(exhibitionData, "exhi");
  const handleAddRole = () => {
    if (selectedRole && roleCount) {
      dispatch(addRole());
    }
  };

  const handleShowForm = () => {
    dispatch(setIsFormVisible(true));
  };

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
                  Your Exhibition Journey
                </div>

                {/* Radio Button for Yes/No Question */}
                <div className="-mx-3 flex flex-wrap">
                  <div className="mb-5 w-full px-3">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Have you Presented your work in any exhibitions or
                      conferences?
                    </label>
                    <div className="flex items-center mt-6 space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="hasExhibition"
                          value="yes"
                          id="radioButton1"
                          className="h-5 w-5"
                          onChange={() => {
                            dispatch(setHasExhibition(true));
                            dispatch(setIsFormVisible(true)); // Show the form initially
                          }}
                        />
                        <label className="pl-1 text-base font-medium text-[#07074D]">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="hasExhibition"
                          value="no"
                          id="radioButton2"
                          className="h-5 w-5"
                          onChange={() => {
                            dispatch(setHasExhibition(false));
                            dispatch(resetSubmittedRoles()); // Reset roles if "No"
                          }}
                        />
                        <label className="pl-1 text-base font-medium text-[#07074D]">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form for Role and Count */}
                {hasExhibition && isFormVisible && (
                  <>
                    <div className="w-full px-3 -mx-3">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          What Role did you play in the exhibitions or
                          conferences?
                        </label>
                        <select
                          name="role"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          value={selectedRole}
                          onChange={(e) =>
                            dispatch(setSelectedRole(e.target.value))
                          }
                        >
                          <option value="">-- select one --</option>
                          <option value="Speaker">Speaker</option>
                          <option value="Presenter">Presenter</option>
                          <option value="Panelist">Panelist</option>
                          <option value="Moderator">Moderator</option>
                        </select>
                      </div>
                    </div>

                    {selectedRole && (
                      <div className="w-full px-3 -mx-3">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          How many times have you participated as a{" "}
                          {selectedRole}?
                        </label>
                        <input
                          type="number"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          placeholder={`e.g., 3 as ${selectedRole}`}
                          value={roleCount}
                          onChange={(e) =>
                            dispatch(setRoleCount(e.target.value))
                          }
                        />
                      </div>
                    )}

                    {/* Add Button */}
                    <div className="w-full px-3 -mx-3 mt-4">
                      <button
                        type="button"
                        className="py-2 px-4 bg-blue-500 text-white rounded-md"
                        onClick={handleAddRole}
                      >
                        Add
                      </button>
                    </div>
                  </>
                )}

                {/* Collapsed Section to Show Added Roles */}
                {forms.length > 0 && (
                  <div className="w-full px-3 mt-5">
                    <div className="bg-gray-100 rounded-md p-4">
                      <h3 className="font-semibold text-lg mb-2">Summary</h3>
                      {forms.map((role, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2"
                        >
                          <p className="text-base text-[#07074D]">
                            You have Participated <strong>{role.count}</strong>{" "}
                            times as a <strong>{role.role}</strong>
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Add Role Button */}
                    <div className="mt-4">
                      <button
                        type="button"
                        className="py-2 px-4 bg-green-500 text-white rounded-md"
                        onClick={handleShowForm}
                      >
                        Add Another Role
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="flex justify-center mt-[4rem] w-1/2">
          <div className="sticky top-4">
            <img
              src={Recognition}
              className="rounded-xl shadow-md w-[40rem] h-[27rem]"
              alt="Recognition"
            />
          </div>
        </div>
      </div>
      <NavigationBtn
        data={exhibitionData.isEdited ? exhibitionData : ""}
        api={`http://localhost:5000/api/v1/add-data/exhibition/${id}`}
        section={"exhibition"}
      />
    </>
  );
};

export default Exhibitions;
