import React from "react";
import Card from "./Card";
function Cards({ courses }) {
    console.log(courses);

    let allCourses = [];
    console.log(Object.values(courses[0]));
    const getAllCourses = () => {
        Object.values(courses[0]).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })


        });
        return allCourses
    }
    console.log(allCourses);


    return (
        <div>
            {
                getAllCourses().map((course) => {
                    return <Card key={course.id} course={course} />
                })
            }
        </div>
    )
}

export default Cards;