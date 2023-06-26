import React, { useState } from "react";

import '../App.css';

import { Card } from "../Card";

import { useForecast } from "../hooks/useForecast";

import { DailyCard } from '../DailyCard';

export const SingleCity = (props) => {
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast( cityCoord );
    console.log('data', data);
    const { city } = props.match.params;
    return ( 
        <div className="SingleCityWrap">
            <Card city={city} setCityCoord={setCityCoord}  />
            {data && 
                <div className="DailyCards">
                    {
                        data.list.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)
                    }
                </div>
            }
       </div>
    )
};


