import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
    return (
        <>
                        <div className={props.cardnumbers1}>
                    <p>1</p>
                </div>
                <div className={props.cardnumbers2}>
                    <p>1</p>
                </div>
                <div className={props.cardnumbers3}>
                    <p>1</p>
                </div>
                <div className={props.cardnumbers4}>
                    <p>1</p>
                </div>
                <div className={props.cardnumbers5}>
                    <p>1</p>
                </div>
                <div className={props.cardnumbers6}>
                    <p>1</p>
                </div>
                <div className={props.cardnumbers7}>
                    <p>1</p>
                </div>
            </>

        
    )
}

Card.propTypes = {
    cardnumbers1 : PropTypes.number,
    cardnumbers2 : PropTypes.number,
    cardnumbers3 : PropTypes.number,
    cardnumbers4 : PropTypes.number,
    cardnumbers5 : PropTypes.number,
    cardnumbers6 : PropTypes.number,
    cardnumbers7 : PropTypes.number

}