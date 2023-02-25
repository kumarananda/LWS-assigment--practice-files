import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </>
  );
}

export default App;
