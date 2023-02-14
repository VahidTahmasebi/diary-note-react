import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/index.css';

const MainPage = () => {
  return (
    <section className='flex flex-col w-full h-screen overflow-auto justify-center items-center'>
      <div className='text-center my-auto'>
        <h1 className='text-3xl mb-10'>Daily notes</h1>
        <p className=''>Take notes, reminders, set targets</p>
      </div>
      <div className='text-center my-auto'>
        <Link to='/new-note'>
          <button className='py-4 px-4 mb-2 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'>
            Get Started
          </button>
        </Link>
        <p>welcome user - dynamic</p>
      </div>
    </section>
  );
};

export default MainPage;
