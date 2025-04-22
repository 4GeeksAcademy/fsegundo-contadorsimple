import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
    return (
        <>
            <div className="counter">
                <div className="cardnumbers1">
                    <p>{props.cardnumbers1}</p>
                </div>
                <div className="cardnumbers2">
                    <p>{props.cardnumbers2}</p>
                </div>
                <div className="cardnumbers3">
                    <p>{props.cardnumbers3}</p>
                </div>
                <div className="cardnumbers4">
                    <p>{props.cardnumbers4}</p>
                </div>
                <div className="cardnumbers5">
                    <p>{props.cardnumbers5}</p>
                </div>
                <div className="cardnumbers6">
                    <p>{props.cardnumbers6}</p>
                </div>
                <div className="cardnumbers7">
                    <p>{props.cardnumbers7}</p>
                </div>
            </div>
        </>


    )
}

Card.propTypes = {

    cardnumbers2: PropTypes.string,
    cardnumbers3: PropTypes.string,
    cardnumbers4: PropTypes.string,
    cardnumbers5: PropTypes.string,
    cardnumbers6: PropTypes.string,
    cardnumbers7: PropTypes.string

}