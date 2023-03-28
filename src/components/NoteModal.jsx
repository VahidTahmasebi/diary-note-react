import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getAsyncCities } from '../feature/citiesSlice';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import {
  styleSingleSelector,
  styleMultiSelector,
} from '../assets/styles/selectorsStyle';

const NoteModal = ({
  modalState,
  setModalState,
  changeHandler,
  noteValues,
  setNoteValues,
  selectProgressHandler,
  ...props
}) => {
  const { progressModal, datesModal, placeModal, tagsModal } = modalState;

  const { optionsTags, setOptionsTags, selectedTags, setSelectedTags } = props;
  const animatedComponents = makeAnimated();

  const { cities } = useSelector((state) => state.cities);
  const [placesPreview, setPlacesPreview] = useState([]);
  const [placeSearchTerm, setPlaceSearchTerm] = useState([]);

  const dispatch = useDispatch();

  const selectedOptions = [
    { label: '😴 - 0', value: 'progress0' },
    { label: '🤠 - %25', value: 'progress25' },
    { label: '🚀 - %50', value: 'progress50' },
    { label: '😎 - %75', value: 'progress75' },
    { label: '🎉 - %100', value: 'progress100' },
  ];

  // get cities
  useEffect(() => {
    dispatch(getAsyncCities());
  }, []);

  // place search handler
  const placeSearchHandler = ({ target }) => {
    const valueSearchInput = target.value;

    setPlaceSearchTerm(valueSearchInput);

    // if there was some input
    // with Object.values, you can search the entire data
    if (valueSearchInput || valueSearchInput !== '') {
      let filterPlaces = cities.filter((place) => {
        return Object.values(place)
          .join(' ')
          .toLowerCase()
          .includes(valueSearchInput.toLowerCase());
      });
      setPlacesPreview(filterPlaces);
    }
  };

  // an event that clicks on the city
  const previewPosition = (place) => {
    setNoteValues({ ...noteValues, placeValue: place.name });
    setPlaceSearchTerm('');
    setPlacesPreview('');
  };

  // record the selected value in the state
  const selectTagHandler = (selected) => {
    setSelectedTags(selected);
  };

  // new tag handler
  const createTagHandler = (inputValue) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptionsTags([...optionsTags, newOption]);
    setSelectedTags([...selectedTags, newOption]);
  };

  // modal container className
  const modalClass =
    'w-screen h-screen inset-0 z-50 fixed flex justify-center items-center bg-main-slate-700';

  return (
    <>
      {/* progress module */}
      {progressModal && (
        <div
          onClick={() => setModalState({ ...modalState, progressModal: false })}
          className={`select-none ${modalClass}`}
        >
          <div onClick={(e) => e.stopPropagation()} className='flex flex-col'>
            <Select
              value={noteValues.progressValue}
              onChange={selectProgressHandler}
              options={selectedOptions}
              placeholder='Progress...'
              isSearchable={false}
              myFontSize='17px'
              myWidthSize='179px'
              styles={styleSingleSelector}
            />
          </div>
        </div>
      )}

      {/* dates module */}
      {datesModal && (
        <div
          onClick={() => setModalState({ ...modalState, datesModal: false })}
          className={modalClass}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='flex flex-col gap-3'
          >
            <input
              type='date'
              name='dateValue'
              value={noteValues.dateValue}
              onChange={changeHandler}
              className='w-56 p-3 rounded-xl border-2 border-main-gray-400 hover:border-main-gray-400 outline-none bg-main-gray-700 text-main-slate-400 shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-main-indigo-200 transition ease-in duration-200'
            />
            <input
              type='time'
              name='timeValue'
              value={noteValues.timeValue}
              onChange={changeHandler}
              className='w-56 p-3 rounded-xl border-2 border-main-gray-400 hover:border-main-gray-400 outline-none bg-main-gray-700 text-main-slate-400 shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-main-indigo-200 transition ease-in duration-200'
            />
          </div>
        </div>
      )}

      {/* searchLocation module */}
      {placeModal && (
        <div
          onClick={() => setModalState({ ...modalState, placeModal: false })}
          className={modalClass}
        >
          <div className='flex flex-col' onClick={(e) => e.stopPropagation()}>
            <span
              value={placesPreview}
              className='w-72 h-fit max-h-40 overflow-y-auto bg-main-gray-600 border-main-gray-400 hover:border-main-gray-400 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-main-indigo-200 transition ease-in duration-200 scrollbar-thin scrollbar-thumb-main-gray-500 scrollbar-track-main-gray-700'
            >
              {placesPreview &&
                placesPreview.map((place, index) => (
                  <div key={index} className='p-3  border-b-2 border-[#414d60]'>
                    <a
                      onClick={() => previewPosition(place)}
                      className='cursor-pointer text-main-white'
                    >
                      {place.name}
                    </a>
                  </div>
                ))}
            </span>
            <input
              type='text'
              name='locationValue'
              value={placeSearchTerm}
              onChange={placeSearchHandler}
              placeholder='City search'
              className='p-3 my-3 rounded-xl border-2 border-main-gray-400 hover:border-main-gray-400 outline-none bg-main-gray-700 text-main-white placeholder:text-main-slate-400 shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-main-indigo-200 transition ease-in duration-200'
            />
            <div
              className={
                noteValues.placeValue &&
                'w-72 h-fit p-3 rounded-xl border-main-gray-400 hover:border-main-gray-400 bg-indigo-500 text-main-white'
              }
            >
              {noteValues.placeValue}
            </div>
          </div>
        </div>
      )}

      {/* tags module */}
      {tagsModal && (
        <div
          onClick={() => setModalState({ ...modalState, tagsModal: false })}
          className={modalClass}
        >
          <div className='flex flex-col' onClick={(e) => e.stopPropagation()}>
            <CreatableSelect
              isClearable
              options={optionsTags}
              isMulti
              onChange={selectTagHandler}
              onCreateOption={createTagHandler}
              value={selectedTags}
              myWidthSize='179px'
              styles={styleMultiSelector}
              components={animatedComponents}
              placeholder='Create or Select'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NoteModal;
