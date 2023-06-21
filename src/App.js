import React from 'react';

import {
  BrowserRouter
} from "react-router-dom";

import './App.css';

import { Input } from './Input';

import { CardList } from './CardList';

import { ErrorBoundary } from './ErrorBoundary';

import { useCitiesList } from './hooks/useCitiesList';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <div className="Main">
          <Input />
          <ErrorBoundary>
            <CardList />
          </ErrorBoundary>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App; 