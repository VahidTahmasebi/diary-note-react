import React from 'react';

const NoteItem = ({ subject }) => {
  return (
    <li className='h-20 w-full py-6 px-5 my-3 bg-main-grey rounded-2xl'>
      <div className='flex items-center'>
        <span>{subject}</span>
      </div>
    </li>
  );
};

export default NoteItem;
