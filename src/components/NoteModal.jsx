import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const NoteModal = ({
  modalState,
  setModalState,
  changeHandler,
  locationValue,
  noteValues,
}) => {
  const { datesModal, locationModal } = modalState;

  const location = useLocation();

  // address of the current page
  const URL = window.location.href === 'http://localhost:8080/new-note';

  return (
    <>
      {/* dates module */}
      {datesModal && (
        <div
          onClick={() => setModalState({ ...modalState, datesModal: false })}
          className='w-screen h-screen z-50 bg-gray-400 bg-opacity-20 fixed inset-0 flex justify-center items-center'
        >
          <div onClick={(e) => e.stopPropagation()}>
            <input
              type='date'
              name='dateValue'
              value={URL ? noteValues.dateValue : location.state.note.date}
              onChange={changeHandler}
              className='p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
            <input
              type='time'
              name='timeValue'
              value={URL ? noteValues.timeValue : location.state.note.time}
              onChange={changeHandler}
              className='p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
          </div>
        </div>
      )}

      {/* searchLocation */}
      {locationModal && (
        <div
          onClick={() => setModalState({ ...modalState, locationModal: false })}
          className='w-screen h-screen z-50 bg-gray-400 bg-opacity-20 fixed inset-0 flex justify-center items-center'
        >
          <div className='flex flex-col' onClick={(e) => e.stopPropagation()}>
            <span
              value={locationValue}
              onChange={changeHandler}
              className='lg:w-full h-16 p-3 bg-main-white text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            >
              {term}
            </span>
            <input
              type='text'
              name='locationValue'
              value={term}
              onChange={locationChangeHandler}
              placeholder='City search'
              className='p-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NoteModal;
