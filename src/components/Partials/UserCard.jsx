import React from "react";

const UserCard = ({name, des , image}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
      </div>
      <figure>
        <img
          src= {image}
          alt= {name}
        />
      </figure>
    </div>
  );
};

export default UserCard;
