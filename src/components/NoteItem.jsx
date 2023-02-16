import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = ({ ...note }) => {
  const { id, subject } = note;

  return (
    <>
      <Link to={`user/${id}`} state={{ note }}>
        <li className='h-20 w-full py-6 px-5 my-3 bg-main-grey rounded-2xl'>
          <div className='flex items-center'>
            <span>{subject}</span>
          </div>
        </li>
      </Link>
    </>
  );
};

export default NoteItem;
