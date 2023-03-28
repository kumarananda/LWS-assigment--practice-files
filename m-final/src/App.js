import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './assets/style/output.css'
import AuthHeader from './components/Header/AuthHeader';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import Assignment from './pages/admin/Assignment/Assignment';
import AssignmentMark from './pages/admin/AssignmentMark/AssignmentMark';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import Quizzes from './pages/admin/Quizzes/Quizzes';
import Videos from './pages/admin/Videos/Videos';
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
      {pathname=== "/" && <Header /> }
      {pathname=== "/admin" &&  <AuthHeader/> }
      
      <Routes>
        <Route path='/' element={<StudentLogin/>}/>
        <Route path='/registration' element={<StudentRegistration/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/course-player' element={<CoursePlayer/>} />
        <Route path='/quiz' element={<Quiz/>} />
      </Routes>
      <Routes>
        <Route path='/admin' >
          <Route path='/admin/' element={<AdminLogin/>} />
          <Route path='/admin/dashbord' element={<Dashboard/>} />
          <Route path='/admin/quizzes' element={<Quizzes/>} />
          <Route path='/admin/videos' element={<Videos/>} />
          <Route path='/admin/assignment' element={<Assignment/>} />
          <Route path='/admin/assignment-mark' element={<AssignmentMark/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
