import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/index.css';

const MainPage = () => {
  return (
    <section className=''>
      <h2>Daily notes</h2>
      <p>Take notes, reminders, set targets</p>
      <Link to='/new-note'>
        <button>Get Started</button>
      </Link>
      <p>welcome user</p>
    </section>
  );
};

export default MainPage;
