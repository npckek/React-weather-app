import React from 'react';

import { Card } from '../Card';

import '../App.css';

export class CardList extends React.Component {
  render() {
    return (
      <>
        <select className='Select'>
          <option value='name' >By name</option>
          <option value='temp '>By temperature</option>
        </select>
        <div className='CardList'>
          {
            this.props.citiesList.map(city => <Card key={city} city={city} />)
          }
        </div>
      </>
    )
  }
}

// export const CardList = () => {
//   const { state: { citiesList } } = useContext(GlobalContext);
//   return (
//     <div className='CardList'>
//       {
//         citiesList.map(city => <Card key={city} city={city} />)
//       }
//     </div>
//   )
// }
