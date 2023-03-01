import React from 'react';

const CheckItem = ({ deleteCheckHandler, ...item }) => {
  const { id_check, check } = item;

  return (
    <li className='flex items-center lg:w-full h-fit max-h-20 mb-2 rounded-xl shadow-lg hover:ring-1 hover:ring-offset-1 hover:ring-indigo-200 transition ease-in duration-200'>
      <label
        htmlFor={id_check}
        className='flex px-5 py-3 h-full items-center overflow-hidden overflow-x-auto flex-1 cursor-pointer'
      >
        <input
          type='checkbox'
          id={id_check}
          name='checklist'
          className='opacity-0 absolute cursor-pointer'
        />
        <div className='bg-white border-2 rounded-md border-primary-color w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary-color'>
          <svg
            className='fill-current hidden w-2 h-2 text-primary-color pointer-events-none'
            version='1.1'
            viewBox='0 0 17 12'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g fill='none' fillRule='evenodd'>
              <g
                transform='translate(-9 -11)'
                fill='#1F73F1'
                fillRule='nonzero'
              >
                <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
              </g>
            </g>
          </svg>
        </div>
        <span className='overflow-x-auto'>{check}</span>
      </label>
      <button
        onClick={(e) => deleteCheckHandler(e, id_check)}
        className='mx-5 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6 hover:text-red-500 transition ease-in duration-200'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
          />
        </svg>
      </button>
    </li>
  );
};

export default CheckItem;
