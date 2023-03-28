import React, { useState } from 'react';
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
  const props = {
    optionsTags,
    setOptionsTags,
    selectedTags,
    setSelectedTags,
    initialOptions,
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster />
        <div className='min-h-screen m-0 p-0 box-border bg-body-color text-main-white overflow-hidden'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/new-note' element={<FormNotePage {...props} />} />
            <Route path='/notes-list' element={<NotesListPage {...props} />} />
            <Route path='/note/:id' element={<EditNote {...props} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
