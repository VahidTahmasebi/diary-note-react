import React from 'react';
import Navigation from '../components/Navigation';

const Layout = ({ children, noteValues, setNoteValues, ...props }) => {
  return (
    <div className='h-screen flex flex-col justify-start items-center overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-main-gray-500 scrollbar-track-main-gray-700'>
      <Navigation
        noteValues={noteValues}
        setNoteValues={setNoteValues}
        {...props}
      />
      {children}
    </div>
  );
};

export default Layout;
