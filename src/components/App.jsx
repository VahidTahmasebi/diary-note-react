import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../feature/store';
import NotesListPage from '../pages/NotesListPage';
import MainPage from '../pages/MainPage';
import FormNotePage from '../pages/FormNotePage';
import SignupPage from '../pages/user/SignupPage';
import LoginPage from '../pages/user/LoginPage';
// import EditNote from '../pages/EditNote';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='h-full min-h-screen m-0 p-0 box-border bg-body-color text-white overflow-hidden'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
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
