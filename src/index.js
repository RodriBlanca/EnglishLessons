import React from 'react';
import ReactDOM from 'react-dom';
// React-router-dom
import { BrowserRouter as Router } from 'react-router-dom';
import TodoApp from './TodoApp';
// CSS
import './global.css';

ReactDOM.render(
  <Router>
    <TodoApp />
  </Router>,
  document.getElementById('root')
);
