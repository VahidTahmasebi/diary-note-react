import React from 'react';
const Navigation = () => {
  return (
    <div>
      {/* cover */}
      <div className='flex flex-col justify-start items-center relative'>
        <div className='w-screen relative flex justify-center items-start'>
          <div className='h-40 lg:w-4/6 w-full relative bg-main-grey rounded-bl-full rounded-br-full'>
            <div className='flex justify-start items-center my-4 mx-9'>
              <div className=' py-2 px-2 w-10 h-10 rounded-full bg-primary-color'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </div>
              <p className='ml-3'>Guest</p>
            </div>
            <button className='absolute -bottom-4 right-44 py-2 px-4 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'>
              cover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
