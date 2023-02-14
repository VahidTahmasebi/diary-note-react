import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import NewNotePage from '../pages/NewNotePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-slate-900 text-white'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/new-note' element={<NewNotePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
