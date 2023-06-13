import React from 'react';

import './App.css';

import { Input } from './Input';

import { CardList } from './CardList';

import { useCitiesList } from './hooks/useCitiesList'

function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, citiesList } = state;
  return (
    <div className="Main">
      <Input dispatch={dispatch} inputValue={inputValue} />
      <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  );
}

export default App; 