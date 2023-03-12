import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = ({ ...note }) => {
  const { id, createAt, subject, cover } = note;

  return (
    <>
      <Link to={`/note/${id}`} state={{ note }}>
        <li
          className='h-20 py-6 px-5 my-3 bg-gray-700 bg-opacity-80 bg-blend-multiply bg-cover rounded-xl shadow-lg hover:ring-1 hover:ring-offset-1 hover:ring-indigo-200 transition ease-in duration-200 overflow-x-auto overflow-y-hidden'
          style={{
            backgroundImage: `url(${cover})`,
          }}
        >
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
