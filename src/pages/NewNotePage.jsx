import React from 'react';
import { Link } from 'react-router-dom';


const NewNotePage = () => {
  const optionClass = 'ml-3 transition-all duration-75 ease-in';
  return (
    <section className='h-screen flex right-14 flex-col justify-start items-center'>
      <div className='flex flex-col justify-start items-center relative'>
        <div class='w-screen relative flex justify-center items-start'>
          <div class='h-40 lg:w-4/6 w-full relative bg-main-grey rounded-bl-full rounded-br-full'>
            <button className='absolute top-2 left-4 py-2 px-4 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'>
              cover
            </button>

            <Link className='absolute bottom-1 right-14 py-2 px-4 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'>
              submit
            </Link>
          </div>
        </div>
      </div>

      <div className='lg:w-1/2 w-80 my-7 flex'>
        <h4 className='mr-3 opacity-70'>tag</h4>
        <div className=''>
          <p>work</p>
        </div>
      </div>

      <div className='w-3/6 flex justify-between'>
        <div className=''>
          <div className='flex flex-col lg:w-96'>
            <label className='opacity-70'>note</label>
            <textarea
              className='lg:w-full h-28 min-h-20 max-h-64 p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
              placeholder='your note...'
            />
          </div>
          <div>
            <label className='opacity-70'>todo</label>
          </div>
        </div>
        <div>
          <div className='opacity-70'>Add to card</div>
          <ul className='h-96 w-40 flex flex-col justify-around items-start px-5 py-3 bg-main-grey rounded-xl text-main-white'>
            <li className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 6h.008v.008H6V6z'
                />
              </svg>

              <button className={optionClass}>labels</button>
            </li>
            <li className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                />
              </svg>

              <button className={optionClass}>dates</button>
            </li>
            <li className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <button className={optionClass}>alarm clock</button>
            </li>
            <li className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>

              <button className={optionClass}>location</button>
            </li>
            <li className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>

              <button className={optionClass}>checklist</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewNotePage;

<svg
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  viewBox='0 0 24 24'
  strokeWidth={1.5}
  stroke='currentColor'
  className='w-6 h-6'
>
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
  />
  <path strokeLinecap='round' strokeLinejoin='round' d='M6 6h.008v.008H6V6z' />
</svg>;
