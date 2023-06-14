import React from 'react';

import './App.css';

import { Input } from './Input';

import { CardList } from './CardList';

import { useCitiesList } from './hooks/useCitiesList';

const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList, editingCity } = state;
  return (
    <GlobalContext.Provider value={{ state , dispatch }}>
      <div className="Main">
        <Input dispatch={dispatch} inputValue={inputValue} editingCity={editingCity} />
        <CardList citiesList={citiesList} dispatch={dispatch} />
      </div>
    </GlobalContext.Provider>
  );
}

export default App; 