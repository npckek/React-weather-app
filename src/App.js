import React from 'react';

import './App.css';

import { Input } from './Input';

import { Card } from './Card';

function App() {
  const citiesList = ['Moscow', 'New York', 'London'];
  return (
    <div className="Main">
      <Input />
      <div className='CardList'>
        {
          citiesList.map((city, index) => <Card key= {index} city={city} />)
        }
      </div>
    </div>
  );
}

export default App;