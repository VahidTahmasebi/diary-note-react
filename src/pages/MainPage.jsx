import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/index.css';

const MainPage = () => {
  const [userLogin, setUserLogin] = useState(null);

  // get local storage values
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('authState')) || false;
    setUserLogin(userData);
  }, []);

  return (
    <section className='w-full h-screen flex flex-col justify-center items-center overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700'>
      {/* main logo */}
      <div>
        <img
          src={require('../assets/images/main_image.png')}
          alt='logo image'
          className='w-60 h-60'
        />
      </div>

      {/* about site */}
      <div className='text-center mt-24 mb-14'>
        <h1 className='text-3xl mb-9'>Daily notes</h1>
        <p className=''>Take notes, reminders, set targets</p>
      </div>

      {/* get start button */}
      <div className='text-center'>
        <Link to='/new-note'>
          <button className='py-4 px-4 mb-2 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'>
            Get Started
          </button>
        </Link>
        {userLogin && <p>Welcome {userLogin.name}</p>}
      </div>
    </section>
  );
};

export default MainPage;
