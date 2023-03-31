import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './assets/style/output.css'
import AuthHeader from './components/Header/AuthHeader';
import Header from './components/Header/Header';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import AssignmentPage from './pages/admin/Assignment/AssignmentPage';
import AssignmentMark from './pages/admin/AssignmentMark/AssignmentMark';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import QuizzesPage from './pages/admin/Quizzes/QuizzesPage';
import VideosPage from './pages/admin/Videos/VideosPage';
import CoursePlayer from './pages/student/CoursePlayer/CoursePlayer';
import Leaderboard from './pages/student/Leaderboard/Leaderboard';
import Quiz from './pages/student/Quiz/Quiz';
import StudentLogin from './pages/student/StudentLogin/StudentLogin';
import StudentRegistration from './pages/student/StudentRegistration/StudentRegistration';


function App() {
  const location = useLocation()
  const {pathname} = location || {}

  return (
    <>
      <Routes>
        <Route path='/' element={<StudentLogin/>}/>
        <Route path='/registration' element={<StudentRegistration/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/course-player' element={<CoursePlayer/>} />
        <Route path='/quiz' element={<Quiz/>} />
        // admin portal
        <Route path='/admin' >
          <Route path='/admin/' element={<AdminLogin/>} />
          <Route path='/admin/dashbord' element={<Dashboard/>} />
          <Route path='/admin/quizzes' element={<QuizzesPage/>} />
          <Route path='/admin/videos' element={<VideosPage/>} />
          <Route path='/admin/assignment' element={<AssignmentPage/>} />
          <Route path='/admin/assignment-mark' element={<AssignmentMark/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
