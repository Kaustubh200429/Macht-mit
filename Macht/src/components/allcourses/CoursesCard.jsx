import React, { useEffect, useState } from "react";
import "./courses.css";
import { useHistory } from "react-router-dom";
import Loader from "../home/Loader";
import Heading from "../common/heading/Heading"
const CoursesCard = () => {
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Kaustubh200429/macht-mit-data/main/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <section
      className="coursesCard"
      style={{ background: "#f9f9f9", padding: "80px 0" }}
    ><Heading subtitle='COURSES' title='Browse Our Online Courses' />
      <div className="container grid2">
        
        {courses.map((course) => (
          <div className="items" key={course.id}>
            <div className="content flex">
              <div className="left">
                <div className="img">
                  <img src={course.cover} alt={course.coursesName} />
                </div>
              </div>

              <div className="text">
                <h1>{course.coursesName}</h1>

                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <label>(5.0)</label>
                </div>

                <div className="details">
                  {course.courTeacher.map((t, i) => (
                    <div key={i}>
                      <div className="box">
                        <div className="dimg">
                          <img src={t.dcover} alt={t.name} />
                        </div>
                        <div className="para">
                          <h4>{t.name}</h4>
                        </div>
                      </div>
                      <span>{t.totalTime}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="price">
              <h3>
                {course.priceAll} / {course.pricePer}
              </h3>
            </div>

            <button
              className="outline-btn"
              onClick={() =>
                history.push("/payments", {
                  courseName: course.coursesName,
                  fullPrice: course.priceAll,
                  monthlyPrice: course.pricePer,
                })
              }
            >
              ENROLL NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesCard;
