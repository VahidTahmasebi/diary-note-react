import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = ({ ...note }) => {
  const { id, subject, cover, date, time, position, tags } = note;

  return (
    <>
      <Link to={`/note/${id}`} state={{ note }}>
        <li className='h-20 w-full py-6 px-5 my-3 bg-main-grey rounded-2xl'>
          <div className='flex items-center'>
            <span>{subject}</span>
            <span>{date}</span>
            <span>{time}</span>
          </div>
        </li>
      </Link>
    </>
  );
};

export default NoteItem;
