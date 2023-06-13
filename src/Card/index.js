import React, { memo } from 'react';

import '../App.css';

import { useWeather } from '../hooks/useWeather';

export const Card = memo(({city, dispatch}) => {
    const data = useWeather(city);
    if (!data) return null;
    const { name, weather, main } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;

    const handleOnClick = () => {
        dispatch({
            type: 'DELETE_CITY',
            payload: city,

        })
    };

    return (
    <div className='Card'>
        <div className='ActionButtons'>
            <button className='DeleteCity' onClick={handleOnClick}>X</button>
        </div>
        <div className='MainInfo'>
            <img className='Icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='Icon' />
            <div className='Title'>{name}</div>
            <div className='Description'>{description}</div>
            <div className='Tempereture'>{temp.toFixed()}</div>
        </div>
        <div className='Information'>
            <div>Humidity: {humidity}</div>
            <div>Feels like:  {feels_like}</div>
        </div>
    </div>
    );
})