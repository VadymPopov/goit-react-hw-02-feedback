import React from "react";
import PropTypes from 'prop-types';


const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <div>
            {options.map(option=>
            <button type="button" onClick={()=>onLeaveFeedback(option)} key={option}>{option[0].toUpperCase()+option.slice(1)}
            </button>
            )}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;