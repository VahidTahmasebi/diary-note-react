import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../feature/store';
import NotesListPage from '../pages/NotesListPage';
import MainPage from '../pages/MainPage';
import FormNotePage from '../pages/FormNotePage';
import SignupPage from '../pages/user/SignupPage';
import LoginPage from '../pages/user/LoginPage';
import toast, { Toaster } from 'react-hot-toast';
import EditNote from '../pages/EditNote';

// initial tags
let initialOptions = [
  { value: 'Happy', label: 'Happy' },
  { value: 'Work', label: 'Work' },
  { value: 'Learn', label: 'Learn' },
  { value: 'Sport', label: 'Sport' },
];

const App = () => {
  const [optionsTags, setOptionsTags] = useState(initialOptions);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster />
        <div className='min-h-screen m-0 p-0 box-border bg-body-color text-white overflow-hidden'>
          <Routes>
            <Route
              path='/'
              element={
                <MainPage
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  optionsTags={optionsTags}
                  setOptionsTags={setOptionsTags}
                  initialOptions={initialOptions}
                />
              }
            />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route
              path='/new-note'
              element={
                <FormNotePage
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  optionsTags={optionsTags}
                  setOptionsTags={setOptionsTags}
                />
              }
            />
            <Route
              path='/notes-list'
              element={
                <NotesListPage
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  optionsTags={optionsTags}
                  setOptionsTags={setOptionsTags}
                />
              }
            />
            <Route
              path='/note/:id'
              element={
                <EditNote
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  optionsTags={optionsTags}
                  setOptionsTags={setOptionsTags}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

export const styleSelector = {
  control: (provided, state) => ({
    ...provided,
    width: '179px',
    padding: '2px 3px',
    outline: 'none',
    border: '2px solid #9a9da1c3',
    borderRadius: '15px',
    fontSize: state.selectProps.myFontSize,
    backgroundColor: '#374151',
    boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 200ms ease-in',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  }),
  input: (provided) => ({
    ...provided,
    color: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    width: '176px',
    borderBottom: '0.1px solid #414d60',
    fontSize: state.selectProps.myFontSize,
    fontWeight: state.isSelected ? 'bold' : 'normal',
    color: '#94a3b8',
    backgroundColor: state.isSelected ? '#1f2937' : '#374151',
    transition: 'all 100ms ease-in',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#4b5563',
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    width: '179px',
    border: '2px solid #9a9da1c3',
    borderRadius: '15px',
    fontSize: state.selectProps.myFontSize,
    fontWeight: state.isSelected ? 'bold' : 'normal',
    backgroundColor: '#374151',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  }),
  menuList: (provided, state) => ({
    ...provided,
    width: '176px',
    borderRadius: '15px',
    fontSize: state.selectProps.myFontSize,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    width: '176px',
    color: '#d1d5db',
    fontSize: state.selectProps.myFontSize,
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: '10px',
    backgroundColor: '#4b5563',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#d1d5db',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    ':hover': {
      color: '#ef4444',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#94a3b8',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#94a3b8',
    transition: 'all 100ms ease-in',
  }),
};
