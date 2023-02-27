import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import NoteModal from '../components/NoteModal';
import { addAsyncNotes } from '../feature/notesSlice';
import Layout from '../Layout/Layout';

const FormNotePage = () => {
  const [noteValues, setNoteValues] = useState({
    subjectValue: '',
    textareaValue: '',
    progressValue: false,
    coverValue: false,
    dateValue: false,
    timeValue: false,
    placeValue: '',
  });
  const [inputTags, setInputTags] = useState('');
  const [tagsValue, setTagsValue] = useState([]);
  // module state
  const [modalState, setModalState] = useState({
    progressModal: false,
    datesModal: false,
    placeModal: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // address of the current page
  const URL = window.location.href === 'http://localhost:8080/new-note';

  // change form handler
  const changeHandler = ({ target }) => {
    setNoteValues({ ...noteValues, [target.name]: target.value });
  };

  //  new tag handler
  const addNewTagHandler = (e) => {
    e.preventDefault();

    if (inputTags.length) {
      setTagsValue((prevState) => [...prevState, inputTags]);
    }
    setInputTags('');
  };

  // select progress handler
  const selectProgressHandler = (selectedProgress) => {
    // setNoteValues(value);
    setNoteValues({ ...noteValues, progressValue: selectedProgress });
  };

  // send values
  // clear entries
  // move to the note list page
  const onSubmit = (e) => {
    e.preventDefault();

    // if there is a subject amount
    if (noteValues.subjectValue) {
      dispatch(
        addAsyncNotes({
          subject: noteValues.subjectValue,
          textarea: noteValues.textareaValue,
          progress: noteValues.progressValue,
          cover: noteValues.coverValue,
          date: noteValues.dateValue,
          time: noteValues.timeValue,
          place: noteValues.placeValue,
          tags: tagsValue,
        })
      );
      setNoteValues({
        subjectValue: '',
        textareaValue: '',
        progressValue: null,
        coverValue: null,
        dateValue: null,
        timeValue: null,
        placeValue: null,
      });
      navigate('/notes-list');
    }
  };

  // option list className
  const optionClass = 'ml-3 transition-all duration-75 ease-in';

  return (
    <form onSubmit={onSubmit}>
      <NoteModal
        modalState={modalState}
        setModalState={setModalState}
        changeHandler={changeHandler}
        noteValues={noteValues}
        selectProgressHandler={selectProgressHandler}
        setNoteValues={setNoteValues}
      />
      <Layout noteValues={noteValues} setNoteValues={setNoteValues}>
        {/* tags */}
        <div className='flex w-3/6 my-12 pr-3'>
          <div className=' w-8/12 flex'>
            {!tagsValue.length && URL ? (
              <div className='flex w-3/5 mr-4'>
                <input
                  type='text'
                  maxLength='20'
                  value={inputTags}
                  onChange={(e) => setInputTags(e.target.value)}
                  placeholder='note tags...'
                  className='py-2 px-3 w-9/12 text-main-black rounded-l-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
                />
                <button
                  type='submit'
                  onClick={addNewTagHandler}
                  className='w-4/12 py-2 px-1 rounded-r-xl bg-primary-color hover:bg-primary-color-hover focus-within:opacity-70 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-indigo-200 text-sm font-semibold shadow-md  transition ease-in duration-200 outline-none'
                >
                  Add tags
                </button>
              </div>
            ) : (
              <span className='w-7/12 h-10 flex justify-start items-center text-main-black'>
                <label className='opacity-70 text-white'>Tag: </label>
                {tagsValue.map((tag, i) => {
                  return (
                    <div
                      value={tag}
                      key={i}
                      className='ml-2 py-1 pl-2 pr-3 bg-white leading-relaxed rounded-xl text-xs'
                    >
                      <span
                        onClick={() => setTagsValue('')}
                        className=' mr-1.5 px-1 pb-0.5 text-sm font-bold hover:bg-red-200 rounded-full transition ease-in duration-200 cursor-pointer'
                      >
                        ×
                      </span>
                      {URL ? tag : location.state.note.tags}
                    </div>
                  );
                })}
              </span>
            )}
          </div>
        </div>
        {/* end tag */}

        {/* main */}
        <div className='w-3/6 flex justify-between'>
          <div className='w-5/6'>
            {/* subject */}
            <div className='flex flex-col lg:w-5/6'>
              <label htmlFor='subjectValue' className='opacity-70'>
                subject
              </label>
              <input
                type='subjectValue'
                id='subjectValue'
                name='subjectValue'
                value={
                  URL ? noteValues.subjectValue : location.state.note.subject
                }
                onChange={changeHandler}
                placeholder='your subject...'
                className='lg:w-full p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
              />
            </div>

            {/* textarea */}
            <div className='flex flex-col lg:w-5/6'>
              <label className='opacity-70'>note</label>
              <textarea
                className='lg:w-full h-28 min-h-20 max-h-64 p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
                placeholder='your note...'
                value={
                  URL ? noteValues.textareaValue : location.state.note.textarea
                }
                name='textareaValue'
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
                {/* Progress */}
                <li
                  onClick={() =>
                    setModalState({ ...modalState, progressModal: true })
                  }
                  className='flex cursor-pointer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
                    />
                  </svg>
                  <a className={optionClass}>Progress</a>
                </li>

                {/* dates */}
                <li
                  onClick={() =>
                    setModalState({ ...modalState, datesModal: true })
                  }
                  className='flex cursor-pointer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                    />
                  </svg>

                  <a className={optionClass}>dates</a>
                </li>

                {/* location */}
                <li
                  onClick={() =>
                    setModalState({ ...modalState, placeModal: true })
                  }
                  className='flex cursor-pointer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                    />
                  </svg>
                  <a className={optionClass}>location</a>
                </li>

                {/* checklist */}
                <li className='flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                    />
                  </svg>
                  <a className={optionClass}>checklist</a>
                </li>
              </ul>
            </div>

            {/* Add note button */}
            <div className='text-center'>
              <button
                type='submit'
                className=' py-2 px-4 my-1 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'
              >
                Add note
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </form>
  );
};

export default FormNotePage;
