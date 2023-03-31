import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './assets/style/output.css'
import AuthHeader from './components/Header/AuthHeader';
import Header from './components/Header/Header';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import Leaderboard from './pages/student/Leaderboard/Leaderboard';
import StudentLogin from './pages/student/StudentLogin/StudentLogin';
import AssignmentMarkPage from './pages/admin/AssignmentMarkPage/AssignmentMarkPage';
import QuizPage from './pages/student/Quiz/QuizPage';
import CoursePlayer from './pages/student/CoursePlayer/CoursePlayer';
import StudentRegistration from './pages/student/StudentRegistration/StudentRegistration';
import QuizzesPage from './pages/admin/QuizzesPage/QuizzesPage';
import AssignmentPage from './pages/admin/AssignmentPage/AssignmentPage';
import VideosPage from './pages/admin/VideosPage/VideosPage';


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
        <Route path='/quiz' element={<QuizPage/>} />
        // admin portal
        <Route path='/admin' >
          <Route path='/admin/' element={<AdminLogin/>} />
          <Route path='/admin/dashbord' element={<Dashboard/>} />
          <Route path='/admin/quizzes' element={<QuizzesPage/>} />
          <Route path='/admin/videos' element={<VideosPage/>} />
          <Route path='/admin/assignment' element={<AssignmentPage/>} />
          <Route path='/admin/assignment-mark' element={<AssignmentMarkPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
