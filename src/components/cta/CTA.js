import React from 'react';

import "./styling/cta.css";
import {Link, Route} from "react-router-dom";
//import SVG from "./styling/Arrow_east.svg";

function CTA(props) {

    const behavior = () => {
        console.log("pressed");
    }

    return(
        <>
        <button className={props.buttonType + ' cta-container'} onClick={behavior}>
            <span className='cta-text'>{props.buttonText}</span>
            <span className='cta-arrow'>{"---->"}</span>
        </button>
        </>
    );
}

export default CTA;