import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getAsyncCities } from '../feature/citiesSlice';
import CreatableSelect from 'react-select/creatable';
import { styleSelector } from './App';
import makeAnimated from 'react-select/animated';

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

  return (
    <>
      {/* progress module */}
      {progressModal && (
        <div
          onClick={() => setModalState({ ...modalState, progressModal: false })}
          className='w-screen h-screen z-50 bg-slate-700 bg-opacity-80 fixed inset-0 flex justify-center items-center select-none'
        >
          <div onClick={(e) => e.stopPropagation()} className='flex flex-col'>
            <Select
              value={noteValues.progressValue}
              onChange={selectProgressHandler}
              options={selectedOptions}
              placeholder='Progress...'
              isSearchable={false}
              myFontSize='17px'
              styles={styleSelector}
            />
          </div>
        </div>
      )}

      {/* dates module */}
      {datesModal && (
        <div
          onClick={() => setModalState({ ...modalState, datesModal: false })}
          className='w-screen h-screen z-50 bg-slate-700 bg-opacity-80 fixed inset-0 flex justify-center items-center'
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
              className='w-56 p-3 text-main-black rounded-xl border-2 border-[#9a9da1c3] hover:border-gray-400 outline-none bg-gray-700 text-slate-400 shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
            <input
              type='time'
              name='timeValue'
              value={noteValues.timeValue}
              onChange={changeHandler}
              className='w-56 p-3 text-main-black rounded-xl border-2 border-[#9a9da1c3] hover:border-gray-400 outline-none bg-gray-700 text-slate-400 shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
          </div>
        </div>
      )}

      {/* searchLocation */}
      {placeModal && (
        <div
          onClick={() => setModalState({ ...modalState, placeModal: false })}
          className='w-screen h-screen z-50 bg-slate-700 bg-opacity-80 fixed inset-0 flex justify-center items-center'
        >
          <div className='flex flex-col' onClick={(e) => e.stopPropagation()}>
            <span
              value={placesPreview}
              className='w-72 h-fit max-h-40 overflow-y-auto bg-gray-600 border-[#9a9da1c3] hover:border-gray-400 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700'
            >
              {placesPreview &&
                placesPreview.map((place, index) => (
                  <div key={index} className='p-3  border-b-2 border-[#414d60]'>
                    <a
                      onClick={() => previewPosition(place)}
                      className='cursor-pointer text-white'
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
              className='p-3 my-3 text-main-black rounded-xl border-2 border-[#9a9da1c3] hover:border-gray-400 outline-none bg-gray-700 text-white placeholder:text-slate-400 shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
            <div
              className={
                noteValues.placeValue &&
                'w-72 h-fit p-3 rounded-xl border-[#9a9da1c3] hover:border-gray-400 bg-indigo-500 text-white'
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
          className='w-screen h-screen z-50 bg-slate-700 bg-opacity-80 fixed inset-0 flex justify-center items-center'
        >
          <div className='flex flex-col' onClick={(e) => e.stopPropagation()}>
            <CreatableSelect
              isClearable
              options={optionsTags}
              isMulti
              onChange={selectTagHandler}
              onCreateOption={createTagHandler}
              value={selectedTags}
              styles={styleSelector}
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
