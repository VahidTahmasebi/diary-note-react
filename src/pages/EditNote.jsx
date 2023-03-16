import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CheckItem from '../components/CheckItem';
import NoteModal from '../components/NoteModal';
import {
  editAsyncNote,
  getAsyncNotes,
  getAsyncOneNote,
} from '../feature/notesSlice';
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
  // tags state
  const [tagsValue, setTagsValue] = useState([]);
  // checklist state
  const [inputChecklist, setInputChecklist] = useState('');
  const [listChecklist, setListChecklist] = useState([]);

  // module state
  const [modalState, setModalState] = useState({
    progressModal: false,
    datesModal: false,
    placeModal: false,
    tagsModal: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // get the desired note
  // update form states
  useEffect(() => {
    dispatch(getAsyncOneNote({ id: id }))
      .then((res) => {
        setNoteValues({
          subjectValue: res.payload.subject,
          textareaValue: res.payload.textarea,
          progressValue: res.payload.progress,
          coverValue: res.payload.cover,
          dateValue: res.payload.date,
          timeValue: res.payload.time,
          placeValue: res.payload.place,
        });
        setListChecklist(res.payload.checklist);
        setTagsValue(res.payload.tags);
      })
      .catch((err) => console.log(err));
  }, []);

  // change form handler
  const changeHandler = ({ target }) => {
    setNoteValues({ ...noteValues, [target.name]: target.value });
  };

  // checklist handler
  const addNewChecklistHandler = (e, check) => {
    e.preventDefault();

    if (check) {
      setListChecklist([
        ...listChecklist,
        { id_check: new Date().getTime(), check: check, completed: false },
      ]);
    }

    setInputChecklist('');
  };

  // select progress handler
  const selectProgressHandler = (selectedProgress) => {
    setNoteValues({ ...noteValues, progressValue: selectedProgress });
  };

  // complete check handler
  const completeCheckHandler = (id_check) => {
    setListChecklist(
      listChecklist.map((item) =>
        item.id_check === id_check
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // delete checklist item
  const deleteCheckHandler = (e, id_check) => {
    e.preventDefault();
    const filteredCheck = listChecklist.filter(
      (check) => check.id_check !== id_check
    );
    setListChecklist(filteredCheck);
  };

  // send values
  // move to the note list page
  // notify
  const onSubmit = (e) => {
    e.preventDefault();
    // if there is a subject amount
    if (noteValues.subjectValue) {
      dispatch(
        editAsyncNote({
          id: id,
          createAt: new Date().toLocaleString(),
          subject: noteValues.subjectValue,
          textarea: noteValues.textareaValue,
          checklist: listChecklist,
          progress: noteValues.progressValue,
          cover: noteValues.coverValue,
          date: noteValues.dateValue,
          time: noteValues.timeValue,
          place: noteValues.placeValue,
          tags: tagsValue,
        })
      );
      dispatch(getAsyncNotes());

      toast.success('Edit done', {
        style: {
          borderRadius: '10px',
          background: '#374151',
          color: '#fff',
        },
      });

      navigate('/notes-list');
    } else {
      toast.error('The subject value is empty', {
        style: {
          borderRadius: '10px',
          background: '#374151',
          color: '#fff',
        },
      });
    }
  };

  // option list className
  const optionClass = 'md:ml-3';

  return (
    <Layout noteValues={noteValues} setNoteValues={setNoteValues}>
      <div>
        <NoteModal
          modalState={modalState}
          setModalState={setModalState}
          changeHandler={changeHandler}
          noteValues={noteValues}
          setNoteValues={setNoteValues}
          selectProgressHandler={selectProgressHandler}
          tagsValue={tagsValue}
          setTagsValue={setTagsValue}
        />

        <form onSubmit={onSubmit} className='w-screen flex justify-center'>
          {/* main */}
          <div className='w-10/12 md:w-8/12 lg:w-[768px] flex flex-col-reverse md:flex-row justify-between items-center md:items-start my-10 transition-all duration-100 ease-in'>
            <div className='w-full md:w-5/6 flex flex-col justify-center transition-all duration-100 ease-in'>
              {/* subject */}
              <div className='w-full md:w-5/6 flex flex-col'>
                <label htmlFor='subjectValue' className='opacity-70 mb-1'>
                  Subject
                </label>
                <input
                  type='subjectValue'
                  id='subjectValue'
                  name='subjectValue'
                  value={noteValues.subjectValue}
                  onChange={changeHandler}
                  maxLength='25'
                  placeholder='your subject...'
                  className='lg:w-full md:mx-0 p-3 text-main-white rounded-xl outline-none shadow-lg bg-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
                />
              </div>

              {/* textarea */}
              <div className='w-full md:w-5/6 flex flex-col my-4'>
                <label htmlFor='textareaValue' className='opacity-70 mb-1'>
                  Note
                </label>
                <textarea
                  className='lg:w-full h-28 min-h-20 max-h-64 p-3 text-main-white rounded-xl outline-none shadow-lg bg-gray-700 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
                  placeholder='your note...'
                  value={noteValues.textareaValue}
                  id='textareaValue'
                  name='textareaValue'
                  onChange={changeHandler}
                />
              </div>

              {/* checklist form */}
              <div className='w-full md:w-5/6'>
                <label htmlFor='checklist' className='opacity-70'>
                  Checklist
                </label>

                <ul className='w-full flex flex-col max-h-80 mt-1 p-3 rounded-xl bg-gray-700 shadow-lg transition ease-in duration-200 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700'>
                  <div className='flex mb-4'>
                    <input
                      type='text'
                      id='checklist'
                      value={inputChecklist}
                      onChange={(e) => setInputChecklist(e.target.value)}
                      placeholder='your check...'
                      maxLength='23'
                      className='w-11/12 py-2 px-3 text-main-white rounded-l-xl outline-none shadow-lg bg-gray-600 focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
                    />
                    <button
                      type='submit'
                      onClick={(e) => addNewChecklistHandler(e, inputChecklist)}
                      className='w-2/12 py-2 px-1 rounded-r-xl text-main-white bg-gray-600 ring-offset-1 hover:bg-primary-color-hover hover:text-main-white focus-within:opacity-70 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-indigo-200 text-sm font-semibold shadow-md  transition ease-in duration-200 outline-none'
                    >
                      Add
                    </button>
                  </div>

                  {listChecklist.map((item) => (
                    <CheckItem
                      key={item.id_check}
                      {...item}
                      deleteCheckHandler={deleteCheckHandler}
                      completeCheckHandler={completeCheckHandler}
                    />
                  ))}
                </ul>
              </div>
            </div>

            {/* option list */}
            <div className='w-full md:w-fit h-56'>
              <div className='opacity-70 mb-0.5'>Add to card</div>
              <div className='flex flex-col justify-start items-center'>
                <ul className='w-full md:w-40 md:h-56 flex md:flex-col justify-around items-start px-4 py-3 bg-gray-700 rounded-xl text-main-white transition-all duration-100 ease-in'>
                  {/* Progress */}
                  <li
                    onClick={() =>
                      setModalState({ ...modalState, progressModal: true })
                    }
                    className='flex flex-col md:flex-row items-center cursor-pointer hover:text-primary-color transition-all duration-75 ease-in'
                  >
                    <span>
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
                    </span>
                    <a className={optionClass}>Progress</a>
                  </li>

                  {/* dates */}
                  <li
                    onClick={() =>
                      setModalState({ ...modalState, datesModal: true })
                    }
                    className='flex flex-col md:flex-row items-center cursor-pointer hover:text-primary-color transition-all duration-75 ease-in'
                  >
                    <span>
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
                    </span>
                    <a className={optionClass}>Dates</a>
                  </li>

                  {/* location */}
                  <li
                    onClick={() =>
                      setModalState({ ...modalState, placeModal: true })
                    }
                    className='flex flex-col md:flex-row items-center cursor-pointer hover:text-primary-color transition-all duration-75 ease-in'
                  >
                    <span>
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
                    </span>
                    <a className={optionClass}>Location</a>
                  </li>

                  {/* tags */}
                  <li
                    onClick={() =>
                      setModalState({ ...modalState, tagsModal: true })
                    }
                    className='flex flex-col md:flex-row items-center cursor-pointer hover:text-primary-color transition-all duration-75 ease-in'
                  >
                    <span>
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
                    </span>
                    <a className={optionClass}>Tags</a>
                  </li>
                </ul>
              </div>

              {/* edit note button */}
              <div className='text-center'>
                <button
                  type='submit'
                  className='py-2 px-4 mt-9 rounded-full bg-primary-color hover:bg-primary-color-hover focus:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-200 transition ease-in duration-200 text-base font-semibold shadow-md outline-none'
                >
                  Edit note
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default FormNotePage;
