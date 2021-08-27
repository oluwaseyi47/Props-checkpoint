import React from 'react';

const ActionComponent = ({ handleClick}) => {
    return (
        <a href="/" onClick= {e => handleClick(e)}>
        Click Me !
        </a>
    );
};





export default ActionComponent;
