import React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div>
            <h1 className="jumbotron">{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    );
};

export default Counter;