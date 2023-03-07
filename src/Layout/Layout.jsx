import React from 'react';
import Navigation from '../components/Navigation';

const Layout = ({ children, noteValues, setNoteValues }) => {
  return (
    <div className='flex flex-col justify-start items-center'>
      <Navigation noteValues={noteValues} setNoteValues={setNoteValues} />
      {children}
    </div>
  );
};

export default Layout;
