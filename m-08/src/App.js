import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header.jsx"
import Home from  "./pages/Home.jsx"
import Add from  "./pages/Add.jsx"
import Edit from  "./pages/Edit.jsx"



function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:editId' element={<Edit/>}/>
    </Routes>
  </>
  );
}

export default App;
