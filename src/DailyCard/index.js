import React from "react";

import '../App.css';


export const DailyCard = ({ dailyCard }) => {
    console.log('dailyCard', dailyCard);
    const { dt , weather, main: { temp } } = dailyCard;
    const { main, icon } = weather[0];
    const currentDate = new Date(dt * 1000);
    return ( 
        <div className="DailyCard">
            <div> { currentDate.toString().split(' ')[0] } { currentDate.toString().split(' ')[2] } </div>
            <div> { currentDate.toString().split(' ')[4] } </div>
            <img className='Icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='Icon' />
            <div className="TemperetureIcon">{ temp.toFixed(0) }</div>
            <div> { main } </div>
        </div>
    )
};


