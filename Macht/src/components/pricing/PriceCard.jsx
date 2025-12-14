import React from "react";
import { price } from "../../dummydata";
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <>
      {price.map((val, index) => (
        <div className="items shadow" key={index}>
          <h4>{val.name}</h4>
          <h1>{val.price}</h1>

          {/* Render UL directly, no <p> */}
          {val.desc}

          {/* Correct React Router Link */}
          <Link to="/payments">
            <button className="outline-btn">GET STARTED</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
