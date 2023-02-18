import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAsyncNotes } from '../feature/notesSlice';
import Layout from '../Layout/Layout';

const FormNotePage = () => {
  const [noteValues, setNoteValues] = useState({
    subject: '',
    textarea: '',
    cover: null,
    date: null,
    time: null,
  });
  // module state
  const [dateModule, setDateModule] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // change form handler
  const changeHandler = ({ target }) => {
    console.log(target.value);
    setNoteValues({ ...noteValues, [target.name]: target.value });
  };
  // cover handler
  const coverSelectHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setNoteValues({ cover: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // send values
  // move to the note list page
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAsyncNotes({
        subject: noteValues.subject,
        textarea: noteValues.textarea,
        cover: noteValues.cover,
        date: noteValues.date,
        time: noteValues.time,
      })
    );
    setNoteValues({ subject: '', textarea: '', cover: null });
    navigate('/notes-list');
  };

  // option list className
  const optionClass = 'ml-3 transition-all duration-75 ease-in';
  return (
    <section className='h-screen flex flex-col justify-start items-center'>
      {/* dates module */}
      {dateModule && (
        <div
          onClick={() => setDateModule(false)}
          className='w-screen h-screen z-50 bg-gray-400 bg-opacity-20 fixed inset-0 flex justify-center items-center'
        >
          <div onClick={(e) => e.stopPropagation()}>
            <input
              type='date'
              name='date'
              onChange={changeHandler}
              className='p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
            <input
              type='time'
              name='time'
              onChange={changeHandler}
              className='p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
          </div>
        </div>
      )}

      <Layout>
        {/* tag */}
        <div className='lg:w-1/2 w-80 my-7 flex'>
          <h4 className='mr-3 opacity-70'>tag</h4>
          <div className=''>
            <p>work</p>
          </div>
        </div>

        {/* main */}
        <form onSubmit={onSubmit} className='w-3/6 flex justify-between'>
          <div>
            <div className='flex flex-col lg:w-96'>
              <label htmlFor='subject' className='opacity-70'>
                subject
              </label>
              <input
                type='subject'
                id='subject'
                name='subject'
                value={noteValues.subject}
                onChange={changeHandler}
                placeholder='your subject...'
                className='lg:w-full p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
              />
            </div>
            <div className='flex flex-col lg:w-96'>
              <label className='opacity-70'>note</label>
              <textarea
                className='lg:w-full h-28 min-h-20 max-h-64 p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
                placeholder='your note...'
                value={noteValues.textarea}
                name='textarea'
                onChange={changeHandler}
              />
            </div>
            <div>
              <label className='opacity-70'>todo</label>
            </div>
          </div>
          {/* option list */}
          <div className='h-56'>
            <div className='opacity-70'>Add to card</div>
            <div className='flex flex-col  justify-start items-center h-64'>
              <ul className='h-56 w-40 flex flex-col justify-around items-start px-5 py-3 bg-main-grey rounded-xl text-main-white'>
                <li className='flex'>
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
                      d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6 6h.008v.008H6V6z'
                    />
                  </svg>

                  <a className={optionClass}>labels</a>
                </li>
                <li
                  onClick={() => setDateModule(true)}
                  className='flex cursor-pointer'
                >
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
                      d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                    />
                  </svg>

                  <a className={optionClass}>dates</a>
                </li>
                <li className='flex'>
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
                      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                    />
                  </svg>

                  <a className={optionClass}>location</a>
                </li>
                <li className='flex'>
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
                      d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                    />
                  </svg>

                  <a className={optionClass}>checklist</a>
                </li>
              </ul>
            </div>

            <div className='text-center'>
              <div className='mb-3'>
                <input
                  type='file'
                  accept='image/*'
                  name='image-upload'
                  id='file'
                  onChange={coverSelectHandler}
                  className='opacity-0 w-0.5 h-0.5 absolute'
                />
                <label
                  htmlFor='file'
                  className='py-2 px-4 mb-2 cursor-pointer rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'
                >
                  Cover
                </label>
              </div>
              <button
                type='submit'
                className=' py-2 px-4 my-1 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'
              >
                Add note
              </button>
            </div>
          </div>
        </form>
      </Layout>
    </section>
  );
};

export default FormNotePage;
