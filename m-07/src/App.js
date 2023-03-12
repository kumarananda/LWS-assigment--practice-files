import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { fatchJobs } from './features/jobs/jobsSlice';
import EditForm from './pages/Form/EditForm';
import AddForm from './pages/Form/AddForm';
import Home from './pages/Home/Home';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchJobs());
  }, [dispatch]);

  return (
    <>
    <Header/>
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<AddForm/>}/>
        <Route path='/form/:edit/:id' element={<EditForm/>}/>
      </Routes>
      
    </div>


    </>
  );
}

export default App;
