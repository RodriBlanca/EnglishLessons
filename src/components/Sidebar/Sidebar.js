import React from 'react';
// Components
import NavBar from '../NavBar/NavBar';
import Brand from '../Brand/Brand';
// CSS  
import './sidebar.css';

const Sidebar = () => {
  return(
      <aside className='aside'>
          <Brand />
          <NavBar />
      </aside>
  );
};

export default Sidebar;
