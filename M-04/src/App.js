
import './App.css';
import Header from './components/Header';
import AddEditForm from './components/AddEditForm';
import BookList from './components/BookList';
import { useState } from 'react';

function App() {

  const [editId, setEditId ] = useState('')

  return (
    <>
    <Header/>

    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <BookList setState={setEditId} />
          
        </div>
        <div>
          <AddEditForm editId={editId} setEditId={setEditId} />

        </div>
      </div>
    </main>
  </>
  );
}

export default App;
