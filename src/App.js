import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { useCitiesList } from './hooks/useCitiesList';

import { ErrorBoundary } from './ErrorBoundary';

import { Input } from './Input';

import { CardList } from './CardList';

import { SingleCity } from './SingleCity';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <Router>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Route path="/home">
          <div className="Main">
            <Input />
            <ErrorBoundary>
              <CardList />
            </ErrorBoundary>
          </div>
        </Route>
        <Route path="/city/:city">
          <SingleCity />
        </Route>
      </GlobalContext.Provider>
    </Router>
  );
}

export default App; 