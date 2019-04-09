import React from 'react';
import '.card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='row'>
                {props.children}
            </div>
        </div>

    );
}

export default Card;