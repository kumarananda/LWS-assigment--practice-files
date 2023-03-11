import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Form from './pages/Form/Form';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
    <Header/>
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/form/:edit/:id' element={<Form/>}/>
      </Routes>
      
    </div>


    </>
  );
}

export default App;
