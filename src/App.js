import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { useCitiesList } from './hooks/useCitiesList';

import { MainPage } from './MainPage';
import { SingleCity } from './SingleCity';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/city/:city" element={<SingleCity />} />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App; 