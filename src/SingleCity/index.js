import React from "react";

import '../App.css';

import { Card } from "../Card";

export const SingleCity = (props) => {
    console.log('props', props);
    const { city } = props.match.params;
    return (<Card city={city}/>)
};


