import { Container } from "./styles";
import { courses } from "../../dataBase/academicInfo";
import { useState } from "react";

const Academic = () => {
  const [course, setCourse] = useState("");

  const handleCourse = (item) => {
    setCourse(item);
  };

  return (
    <Container>
      <div className="container-academic" id="academic">
        <div className="title">
          <h1>Formação</h1>
        </div>

        <div className="info">
          <div className="school">
            {courses.map((item) => (
              <p
                className={`${course == item ? "active" : ""}`}
                key={item.id}
                onClick={() => handleCourse(item)}
              >
                {item.institution}
              </p>
            ))}
          </div>
          <div className="details">
            {course && (
              <>
                <p className="name">{course.details.name}</p>
                <p>{course.details.time}</p>
                <p>{course.details.curriculum}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Academic;
