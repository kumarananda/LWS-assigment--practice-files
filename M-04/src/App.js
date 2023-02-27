
import './App.css';
import Header from './components/Header';
import AddEditForm from './components/AddEditForm';
import BookList from './components/BookList';

function App() {
  return (
    <>
    <Header/>

    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <BookList/>
          
        </div>
        <div>
          <AddEditForm/>

        </div>
      </div>
    </main>
  </>
  );
}

export default App;
