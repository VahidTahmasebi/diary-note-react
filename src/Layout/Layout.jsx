import React from 'react';
import Navigation from '../components/Navigation';

const Layout = ({ children, noteValues, setNoteValues }) => {
  return (
    <div className='flex flex-col justify-start items-center h-screen overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700'>
      <Navigation noteValues={noteValues} setNoteValues={setNoteValues} />
      {children}
    </div>
  );
};

export default Layout;
