import React from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// CSS
import './navBar.css';

const NavBar = () => {
  return(
      <nav className='nav'>
          <ul>
              <li className='level-title'>Level</li>
              <li><Link to="/FirstSteps" className='level-link' >First Steps</Link></li>
              <li><Link to="/Intermediate" className='level-link' >Intermediate</Link></li>
              <li><Link to="/Advanced" className='level-link' >Advanced</Link></li>
          </ul>
          <ul>
              <li className='level-title'>Exercices</li>
              <li><Link to="/VerbTenses" className='level-link'>Verb Tenses</Link></li>
              <li><Link to="/Verbs" className='level-link'>Verbs</Link></li>
              <li><Link to="/Nouns" className='level-link'>Nouns</Link></li>
              <li><Link to="/Pronouns" className='level-link'>Pronouns</Link></li>
          </ul>
      </nav>
  );
};

export default NavBar;
