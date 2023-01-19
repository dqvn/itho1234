import React from "react";
import { ProtectedRoute } from "components";
import Singlementordetails from "pages/Singlementordetails";
import Educatsymentors from "pages/Educatsymentors";
import EducatsyJoinAsTeacher from "pages/EducatsyJoinAsTeacher";
import EducatsyCoursesPricing from "pages/EducatsyCoursesPricing";
import EducatsyCoursesDetails from "pages/EducatsyCoursesDetails";
import EducatsyCourses from "pages/EducatsyCourses";
import EducatsyShop from "pages/EducatsyShop";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/educatsyshop" element={<EducatsyShop />} />
        <Route path="/educatsycourses" element={<EducatsyCourses />} />
        <Route
          path="/educatsycoursesdetails"
          element={<EducatsyCoursesDetails />}
        />
        <Route
          path="/educatsycoursespricing"
          element={<EducatsyCoursesPricing />}
        />
        <Route
          path="/educatsyjoinasteacher"
          element={<EducatsyJoinAsTeacher />}
        />
        <Route path="/educatsymentors" element={<Educatsymentors />} />
        <Route
          path="/singlementordetails"
          element={<ProtectedRoute element={Singlementordetails} />}
        />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
