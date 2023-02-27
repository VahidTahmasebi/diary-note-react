import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../feature/store';
import NotesListPage from '../pages/NotesListPage';
import MainPage from '../pages/MainPage';
import FormNotePage from '../pages/FormNotePage';
import EditNote from '../pages/EditNote';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='bg-body-color text-white h-screen overflow-y-auto p-0 m-0 box-border'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/new-note' element={<FormNotePage />} />
            <Route path='/notes-list' element={<NotesListPage />} />
            <Route path='/note/:id' element={<FormNotePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
