import React from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// CSS
import './brand.css';

const Brand = () => {
  return(
    <h1 className='brand'><Link to="/EnglishLessons" className='brand-title'>English Lessons</Link></h1>
  );
};

export default Brand;
