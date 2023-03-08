import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import { getAsyncCities } from '../feature/citiesSlice';

const NoteModal = ({
  modalState,
  setModalState,
  changeHandler,
  noteValues,
  setNoteValues,
  selectProgressHandler,
  tagsValue,
  setTagsValue,
}) => {
  const { progressModal, datesModal, placeModal, tagsModal } = modalState;

  const { cities } = useSelector((state) => state.cities);
  const [placesPreview, setPlacesPreview] = useState([]);
  const [placeSearchTerm, setPlaceSearchTerm] = useState([]);

  const [inputTags, setInputTags] = useState('');

  const selectedOptions = [
    { label: '😴 - 0', value: 'progress0' },
    { label: '🤠 - %25', value: 'progress25' },
    { label: '🚀 - %50', value: 'progress50' },
    { label: '😎 - %75', value: 'progress75' },
    { label: '🥳 - %100', value: 'progress100' },
  ];

  const location = useLocation();
  const dispatch = useDispatch();
  // address of the current page
  const URL = window.location.href === 'http://localhost:8080/new-note';

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

  //  new tag handler
  const addNewTagHandler = (e) => {
    e.preventDefault();

    if (inputTags.length) {
      setTagsValue((prevState) => [...prevState, inputTags]);
    }
    setInputTags('');
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
                  padding: '7px 3px',
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
          className='w-screen h-screen z-50 bg-slate-700 bg-opacity-80 fixed inset-0 flex justify-center items-center'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='flex flex-col gap-3'
          >
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
      {placeModal && (
        <div
          onClick={() => setModalState({ ...modalState, placeModal: false })}
          className='w-screen h-screen z-50 bg-slate-700 bg-opacity-80 fixed inset-0 flex justify-center items-center'
        >
          <div className='flex flex-col' onClick={(e) => e.stopPropagation()}>
            <span
              value={placesPreview}
              className='w-72 h-fit max-h-40 overflow-y-auto bg-main-white text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            >
              {placesPreview &&
                placesPreview.map((place, index) => (
                  <div key={index} className='p-3'>
                    <a
                      onClick={() => previewPosition(place)}
                      className='cursor-pointer'
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
              placeholder='city search'
              className='p-3 my-3 text-main-black rounded-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
            />
            <div
              className={
                noteValues.placeValue &&
                'w-72 h-fit p-3 text-main-black bg-main-white rounded-xl'
              }
            >
              {URL ? noteValues.placeValue : location.state.note.place}
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
            <div className='flex flex-col'>
              <div className='flex mr-4'>
                <input
                  type='text'
                  maxLength='20'
                  value={inputTags}
                  onChange={(e) => setInputTags(e.target.value)}
                  placeholder='note tags...'
                  className='w-9/12 py-2 px-3 text-main-black rounded-l-xl outline-none shadow-lg focus:ring-1 focus:ring-offset-1 focus:ring-indigo-200 transition ease-in duration-200'
                />
                <button
                  type='submit'
                  onClick={addNewTagHandler}
                  className='w-4/12 py-2 px-1 rounded-r-xl bg-primary-color hover:bg-primary-color-hover focus-within:opacity-70 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-indigo-200 text-sm font-semibold shadow-md  transition ease-in duration-200 outline-none'
                >
                  Add tags
                </button>
              </div>
              <div className='w-7/12 h-8 mt-5 flex justify-start items-center text-main-black'>
                <label className='opacity-70 text-white'>Tag: </label>
                {tagsValue.map((tag, i) => {
                  return (
                    <div
                      value={tag}
                      key={i}
                      className='ml-2 py-1 pl-2 pr-3 bg-white leading-relaxed rounded-xl text-xs'
                    >
                      <span
                        onClick={() => setTagsValue([])}
                        className=' mr-1.5 px-1 pb-0.5 text-sm font-bold hover:bg-red-200 rounded-full transition ease-in duration-200 cursor-pointer'
                      >
                        ×
                      </span>
                      {URL ? tag : location.state.note.tags}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteModal;
