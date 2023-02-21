
import './App.css';
import BookedFlight from './components/BookedFlight/BookedFlight';
import Header from './components/Header/Header';
import InputFlight from './components/InputFlight/InputFlight';


function App() {
  return (
    <div className="App">

      <Header/>

      <section>
        <InputFlight/>

        <BookedFlight/>
        
      </section>
    </div>
  );
}

export default App;
