import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UserCoursesPage from "./pages/UserCoursesPage"; 
import UserProfilePage from "./pages/UserProfilePage"; 
import UserRedactProfilePage from "./pages/UserRedactProfilePage"; 
import CourseContentPage from "./pages/CourseContentPage"; 
import CourseLessonsPage from "./pages/CourseLessonsPage";
import FloatingLanguageButton from "./locales/FloatingLanguageButton"; 


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/user-courses" element={<UserCoursesPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/profile-redact" element={<UserRedactProfilePage />} />
        <Route path="/course-content" element={<CourseContentPage />} />
        <Route path="/course/:courseId" element={<CourseLessonsPage />} />

      </Routes>    
      <FloatingLanguageButton />
      {/* Футер */}
      <footer style={{ background: "#0f172a", color: "#fff", padding: "19px", textAlign: "center", marginTop: "auto" }}>
        <Typography variant="body2">© 2025 CyberLearn.</Typography>
      </footer>
    </Router>
  );
}


export default App;