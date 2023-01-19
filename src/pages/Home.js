import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
        <li>
          <Link to="/educatsyshop">EducatsyShop</Link>
        </li>
        <li>
          <Link to="/educatsycourses">EducatsyCourses</Link>
        </li>
        <li>
          <Link to="/educatsycoursesdetails">EducatsyCoursesDetails</Link>
        </li>
        <li>
          <Link to="/educatsycoursespricing">EducatsyCoursesPricing</Link>
        </li>
        <li>
          <Link to="/educatsyjoinasteacher">EducatsyJoinAsTeacher</Link>
        </li>
        <li>
          <Link to="/educatsymentors">Educatsymentors</Link>
        </li>
        <li>
          <Link to="/singlementordetails">Singlementordetails</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
