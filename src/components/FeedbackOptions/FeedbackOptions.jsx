import React from "react";
import PropTypes from 'prop-types';
import { Button, Container } from "./FeedbackOptions.styled";


const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <Container>
            {options.map(option=>
            <Button type="button" onClick={()=>onLeaveFeedback(option)} key={option}>{option[0].toUpperCase()+option.slice(1)}
            </Button>
            )}
        </Container>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;