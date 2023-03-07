import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Post from './page/Post/Post';


function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/post/:postId' element={ <Post/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
