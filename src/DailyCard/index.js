import React from "react";

import '../App.css';


export const DailyCard = ({ dailyCard }) => {
    console.log('dailyCard', dailyCard);
    const { dt , weather, temp } = dailyCard;
    const { main, icon } = weather[0];
    return ( 

        <div className="DailyCard">
            <img className='Icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='Icon' />
        </div>
    )
};

