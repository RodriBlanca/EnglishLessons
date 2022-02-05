import React from 'react';
// Components
import Sidebar from './components/Sidebar/Sidebar';
// React-router-dom
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
// CSS  
import './global.css';

const TodoApp = () => {
  return(
    <div className='App'>
        <Sidebar />
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  );
};

export default TodoApp;
