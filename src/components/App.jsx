import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../feature/store';
import NotesListPage from '../pages/NotesListPage';
import MainPage from '../pages/MainPage';
import NewNotePage from '../pages/NewNotePage';
import EditNote from '../pages/EditNote';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='bg-body-color text-white h-screen overflow-y-auto p-0 m-0 box-border'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/new-note' element={<NewNotePage />} />
            <Route path='/notes-list' element={<NotesListPage />} />
            <Route path='/user/:id' element={<EditNote />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
