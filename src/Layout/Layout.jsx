import React from 'react';
import Navigation from '../components/Navigation';

const Layout = ({ children }) => {
  return (
    <div className='h-screen flex flex-col justify-start items-center'>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
