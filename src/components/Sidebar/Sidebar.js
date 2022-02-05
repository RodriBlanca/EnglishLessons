import React from 'react';
// Components
import NavBar from '../NavBar/NavBar';
// CSS  
import './sidebar.css';

const Sidebar = () => {
  return(
      <aside className='aside'>
          <h1 className='aside-title'>English Lessons</h1>
          <NavBar />
      </aside>
  );
};

export default Sidebar;
