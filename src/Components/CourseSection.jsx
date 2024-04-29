import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import { CourseObj } from "../Contents/CourseObj";

function CourseSection() {
  return (
    <section className="" id="course" >
      <Heading firsttitle="Our" secondtitle="Courses" />
      <div className="flex flex-wrap justify-center gap-5 m-5">
        {CourseObj.map((Course, index) => {
          return (
            <Card
              key={index}
              image={Course.img}
              title={Course.title}
              duration={Course.duration}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CourseSection;
