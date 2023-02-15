import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../feature/store';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import NewNotePage from '../pages/NewNotePage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='bg-body-color text-white h-screen overflow-hidden p-0 m-0 box-border'>
          <div className='flex items-start  justify-between'>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/new-note' element={<NewNotePage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
