import React, { useState } from "react";

import '../App.css';

import { Card } from "../Card";

import { useForecast } from "../hooks/useForecast";

export const SingleCity = (props) => {
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast( cityCoord );
    console.log('data', data);
    const { city } = props.match.params;
    return (<Card city={city} setCityCoord={setCityCoord}  />)
};


