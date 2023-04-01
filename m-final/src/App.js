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
import useAuthCheck from './hooks/useAuthCheck';
import PublicRoute from './components/ui/RouteAuthenticate/PublicRoute';
import AdminRoute from './components/ui/RouteAuthenticate/AdminRoute';
import StudentRoute from './components/ui/RouteAuthenticate/StudentRoute';


function App() {
  const authChecked = useAuthCheck();

  return (
    <>
      <Routes>
        <Route path='/' element={<PublicRoute><StudentLogin/></PublicRoute>}/>
        <Route path='/registration' element={<PublicRoute><StudentRegistration/></PublicRoute>}/>
        <Route path='/leaderboard' element={<StudentRoute><Leaderboard/></StudentRoute>} />
        <Route path='/course-player' element={<StudentRoute><CoursePlayer/></StudentRoute>} />
        <Route path='/quiz' element={<StudentRoute><QuizPage/></StudentRoute>} />
        // admin portal
        <Route path='/admin' >
          <Route path='/admin/' element={<PublicRoute><AdminLogin/></PublicRoute>} />
          <Route path='/admin/dashbord' element={<AdminRoute><Dashboard/></AdminRoute>} />
          <Route path='/admin/quizzes' element={<AdminRoute><QuizzesPage/></AdminRoute>}  />
          <Route path='/admin/videos' element={<AdminRoute><VideosPage/></AdminRoute>} />
          <Route path='/admin/assignment' element={<AdminRoute><AssignmentPage/></AdminRoute>} />
          <Route path='/admin/assignment-mark' element={<AdminRoute><AssignmentMarkPage/></AdminRoute>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
