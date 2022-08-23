import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card">
      <h1>
        {user.name}
        <br />
        {user.username}
      </h1>

      <p className="user-mail">
        Email :<br />
        {user.email}
      </p>

      <p className="user-address">
        Address :<br />
        {user.address.street} <br />
        {user.address.suite} <br />
        {user.address.city} <br />
        {user.address.zipcode}
      </p>

      <p className="user-phone">
        Phone number : <br />
        {user.phone}
      </p>

      <p className="user-website">Website : {user.website}</p>

      <p className="user-company">
        company : <br />
        {user.company.name}
        <br /> {user.company.bs}
      </p>
    </div>
  );
};

export default Card;
