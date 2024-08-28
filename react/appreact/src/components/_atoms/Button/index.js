import React from 'react';
import "./button.css"
import {COLORS} from "../../../res/colors/colors";
import {Link} from "react-router-dom";

function Button(props) {

    const filledBgColor = props.color || COLORS.primary;  // Couleur de fond si le bouton est rempli
    const outlinedColor = props.borderColor || COLORS.white;  // Couleur de fond si le bouton est seulement contourné
    const bgColor = props.filled ? filledBgColor : (props.disabled ? COLORS.floatblack : outlinedColor);  // Choix de la couleur de fond en fonction de la prop 'filled'
    const textColor = props.filled ? COLORS.white : (props.disabled ? COLORS.white : COLORS.black);  // Choix de la couleur du texte en fonction de la prop 'filled'

    return (
        <div className={`button_content ${props.className}`}>
            <Link style={{ position: 'relative'}} to={props.to}>
                <button className="myButton" onClick={props.onClick}
                        style={{backgroundColor: bgColor, color: textColor, borderColor: outlinedColor}}>

                    {props.title}
                </button>
            </Link>
        </div>
    );
}

export default Button