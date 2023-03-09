import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = ({ ...note }) => {
  const { id, createAt, subject, cover, date, time, position, tags, progress } =
    note;
  console.log(tags[0]);
  return (
    <>
      <Link to={`/note/${id}`} state={{ note }}>
        <li className='h-20 w-full py-6 px-5 my-3 bg-gray-700 rounded-2xl'>
          <div className='w-full flex flex-col items-start justify-center'>
            <span className='text-lg'>{subject}</span>
            <span className='opacity-60 text-sm'>{createAt}</span>
          </div>
        </li>
      </Link>
    </>
  );
};

export default NoteItem;
