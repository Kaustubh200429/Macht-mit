import React from "react";
import { price } from "../../dummydata";
import { useHistory } from "react-router-dom";

const PriceCard = () => {
  const history = useHistory();

  const handleEnroll = (course) => {
    history.push("/payments", {
      courseName: course.name,
      fullPrice: course.price, // ✅ MATCH Payment.jsx
    });
  };

  return (
    <>
      {price.map((val, index) => (
        <div className="items shadow" key={index}>
          <h4>{val.name}</h4>
          <h1>{val.price}</h1>

          {val.desc}

          <button
            className="outline-btn"
            onClick={() => handleEnroll(val)}
          >
            ENROLL NOW
          </button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
