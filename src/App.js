import React from 'react';
import Navbar from './Navbar';
import Barchart from './Barchart';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Barchart />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
