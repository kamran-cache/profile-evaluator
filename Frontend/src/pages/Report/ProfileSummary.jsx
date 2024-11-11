import React from "react";
import Profile from "../../assets/profile.png";

const ProfileSummary = () => {
  return (
    <div className="h-[40rem] w-full p-[4rem]  flex items-center justify-center font-metropolis ">
      <div className="left h-[95%] w-1/3 ">
        <img src={Profile} alt="" className="" />
      </div>
      <div className="right p-4 h-[95%] w-2/3  flex flex-col space-y-3">
        <div className="header flex flex-col justify-end  h-fit text-right">
          <div className="title text-[#8D8D8D] "> Section 4</div>
          <div className="title text-[#8D8D8D] flex text-3xl font-semibold  justify-end gap-2">
            <p className="text-black">Profile</p>{" "}
            <p className="text-primary">Summary</p>
          </div>
        </div>

        <div className="content text-right ">
          {" "}
          <div className="para1 font-normal text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            soluta quia nostrum recusandae quisquam dignissimos voluptas, fuga,
            minima sapiente maxime repellendus illo nulla mollitia quis dolores
            eveniet in est. Amet, distinctio pariatur? Aperiam architecto
            assumenda expedita tempora? Officiis, reiciendis sint.{" "}
          </div>{" "}
          <div className="para1 font-normal text-lg mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            ratione qui recusandae, veniam inventore, perferendis quasi eos,
            cumque ipsum a officiis sunt soluta autem cum repellat doloribus
            voluptates repellendus dolore? Aliquid temporibus recusandae, earum
            nemo neque ab in dolorum illum labore quisquam libero nulla autem
            consequatur omnis voluptas? Ducimus molestias similique sunt
            reprehenderit hic ad quas, dolore eius nulla velit veniam quam
            doloribus. Exercitationem reprehenderit, veniam saepe fuga
            doloremque eligendi distinctio commodi adipisci perferendis cum
            eveniet voluptate sequi veritatis quaerat?{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
