import React, { useState } from "react";

import { Link, useParams } from 'react-router-dom';

import '../App.css';

import { Card } from "../Card";

import { useForecast } from "../hooks/useForecast";

import { DailyCard } from '../DailyCard';

export const SingleCity = () => {
    const params = useParams();
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast( cityCoord );
    const { city } = params;
    return ( 
        <div className="SingleCityWrap">
            <Link to='/home' className="GoBack">Go back</Link>
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


