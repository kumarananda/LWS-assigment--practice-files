
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BookedFlight from './components/BookedFlight/BookedFlight';
import Header from './components/Header/Header';
import InputFlight from './components/InputFlight/InputFlight';


function App() {
  return (
    <div className="App">
    <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    limit={1}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    style={{zIndex: 999999999999999}}
    />
      

      <Header/>

      <section>
        <InputFlight/>

        <BookedFlight/>
        
      </section>
    </div>
  );
}

export default App;
