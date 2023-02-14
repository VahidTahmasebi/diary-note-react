import React from 'react';
import { Link } from 'react-router-dom';

const NewNotePage = () => {
  return (
    <section className='h-screen  flex right-14 flex-col justify-start items-center'>
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
        <h4 className='mr-3'>tag</h4>
        <div className=''>
          <p>work</p>
        </div>
      </div>

      <div className='w-3/6 flex justify-between'>
        <div className=''>
          <div className='flex flex-col lg:w-96'>
            <label>note</label>
            <textarea className='lg:w-full h-28 p-3 text-main-black' />
          </div>
          <div>
            <label>todo</label>
          </div>
        </div>
        <div>
          <div>Add to card</div>
          <div className='h-96 w-40 flex flex-col justify-around items-start px-5 py-3 bg-main-grey rounded-xl text-main-black'>
            <button>labels</button>
            <button>dates</button>
            <button>alarm clock</button>
            <button>location</button>
            <button>checklist</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewNotePage;
