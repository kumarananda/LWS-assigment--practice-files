import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-task' element={<AddTask/>}/>
        <Route path='/edit-task/:editId' element={<EditTask/>}/>
      </Routes>
    </>
  );
}

export default App;
