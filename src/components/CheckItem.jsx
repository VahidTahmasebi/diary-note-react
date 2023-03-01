import React from 'react';

const CheckItem = ({ ...check }) => {
  return (
    <li className='flex items-center lg:w-full h-fit max-h-20 mb-2 rounded-xl shadow-lg hover:ring-1 hover:ring-offset-1 hover:ring-indigo-200 transition ease-in duration-200'>
      <label
        htmlFor={check.id}
        className='flex px-5 py-3 h-full items-center overflow-hidden overflow-x-auto flex-1 cursor-pointer'
      >
        <input
          type='checkbox'
          id={check.id}
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
        <span className='overflow-x-auto'>{check.check}</span>
      </label>
      <span className='px-5 cursor-pointer'>delete</span>
    </li>
  );
};

export default CheckItem;
