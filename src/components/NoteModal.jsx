import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';

const NoteModal = ({
  modalState,
  setModalState,
  changeHandler,
  locationValue,
  noteValues,
  selectProgressHandler,
}) => {
  const { progressModal, datesModal, locationModal } = modalState;
  const selectedOptions = [
    { label: '😴 - 0', value: 'progress0' },
    { label: '🤠 - %25', value: 'progress25' },
    { label: '🚀 - %50', value: 'progress50' },
    { label: '😎 - %75', value: 'progress75' },
    { label: '🥳 - %100', value: 'progress100' },
  ];

  const location = useLocation();
  // address of the current page
  const URL = window.location.href === 'http://localhost:8080/new-note';

  return (
    <>
      {/* progress module */}
      {progressModal && (
        <div
          onClick={() => setModalState({ ...modalState, progressModal: false })}
          className='w-screen h-screen z-50 bg-gray-400 bg-opacity-20 fixed inset-0 flex justify-center items-center select-none'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='flex flex-col w-32'
          >
            <Select
              value={
                URL ? noteValues.progressValue : location.state.note.progress
              }
              onChange={selectProgressHandler}
              options={selectedOptions}
              placeholder='progress...'
              isSearchable={false}
              myFontSize='17px'
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: '200px',
                  borderRadius: '15px',
                  boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontWeight: state.isSelected ? 'bold' : 'normal',
                  color: 'black',
                  width: '200px',
                  fontSize: state.selectProps.myFontSize,
                }),
                menu: (provided, state) => ({
                  ...provided,
                  fontWeight: state.isSelected ? 'bold' : 'normal',
                  color: 'black',
                  width: '200px',
                  borderRadius: '15px',
                  boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
                  fontSize: state.selectProps.myFontSize,
                }),
                menuList: (provided, state) => ({
                  ...provided,
                  color: 'black',
                  width: '200px',
                  borderRadius: '15px',
                  fontSize: state.selectProps.myFontSize,
                }),
                singleValue: (provided, state) => ({
                  ...provided,
                  width: '200px',
                  fontSize: state.selectProps.myFontSize,
                }),
              }}
            />
          </div>
        </div>
      )}

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
