import React from 'react';
// Image
import studying from '../assets/images/pexels-startup-stock-photos-7096.jpg';

const Home = () => {
  return(
      <main className='home'>
          <div>
            <h2 className='home-title'>Learn all English grammar in one place</h2>
            <p>This page was created to help people who already have some English language skills to continue to improve their English.</p>
          </div>
          <div className='home-image'>
            <img src={studying} alt="studying" className='home-image__pic'/>
          </div>
      </main>
  );
};

export default Home;
