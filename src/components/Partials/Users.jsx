import React from "react";
import UserCard from "./UserCard";

const Users = () => {
  return (
    <div className="m-50 p-50">
      <div className="py-5">
        <h1 className="text-center text-3xl"> People Will get Benfit </h1>
      </div>
      <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box pb-30">
        <div className="carousel-item">
          {/* <img
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          className="rounded-box"
        /> */}
          <UserCard
            name="Web Developer"
            des="The Old man and the sea"
            image="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          ></UserCard>
        </div>
        <div className="carousel-item">
          {/* <img
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          className="rounded-box"
        /> */}
          <UserCard
            name="Professial Worker"
            des="The Old man and the sea. More text"
            image="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          ></UserCard>
        </div>
        <div className="carousel-item">
          <UserCard
            name="Professial Worker"
            des="The Old man and the sea. More text"
            image="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          ></UserCard>
        </div>
        <div className="carousel-item">
          <UserCard
            name="Professial Worker"
            des="The Old man and the sea. More text"
            image="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          ></UserCard>
        </div>
        <div className="carousel-item">
          <UserCard
            name="Professial Worker"
            des="The Old man and the sea. More text"
            image="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          ></UserCard>
        </div>
      </div>
    </div>
  );
};

export default Users;
