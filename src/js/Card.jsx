import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const Card = (props) => {
    return (
        <>
            <div className="counter">
                <div className="cardnumbers1">
                    <p>
                        <FontAwesomeIcon icon={faClock} />
                    </p>
                </div>
                <div className="cardnumbers2">
                    <p>{props.cardnumbers2 % 10}</p>
                </div>
                <div className="cardnumbers3">
                    <p>{props.cardnumbers3 % 10}</p>
                </div>
                <div className="cardnumbers4">
                    <p>{props.cardnumbers4 % 10}</p>
                </div>
                <div className="cardnumbers5">
                    <p>{props.cardnumbers5 % 10}</p>
                </div>
                <div className="cardnumbers6">
                    <p>{props.cardnumbers6 % 10}</p>
                </div>
                <div className="cardnumbers7">
                    <p>{props.cardnumbers7 % 10}</p>
                </div>
            </div>
        </>


    )
}

Card.propTypes = {

    cardnumbers2: PropTypes.number,
    cardnumbers3: PropTypes.number,
    cardnumbers4: PropTypes.number,
    cardnumbers5: PropTypes.number,
    cardnumbers6: PropTypes.number,
    cardnumbers7: PropTypes.number

}