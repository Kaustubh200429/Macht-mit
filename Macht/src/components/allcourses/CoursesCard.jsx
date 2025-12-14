import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { useHistory } from "react-router-dom";

const CoursesCard = () => {
  const history = useHistory();

  const handleEnroll = (course) => {
    history.push("/payments", {
      courseName: course.coursesName,
      fullPrice: course.priceAll,
      monthlyPrice: course.pricePer,
    });
  };

  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val, index) => (
            <div className="items" key={index}>
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt={val.coursesName} />
                  </div>
                </div>

                <div className="text">
                  <h1>{val.coursesName}</h1>

                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label>(5.0)</label>
                  </div>

                  <div className="details">
                    {val.courTeacher.map((details, i) => (
                      <div key={i}>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt={details.name} />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>

              {/* ✅ ENROLL BUTTON */}
              <button
                className="outline-btn"
                onClick={() => handleEnroll(val)}
              >
                ENROLL NOW !
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;

