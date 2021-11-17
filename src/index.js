import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators, createStore} from "redux";
import reduser from "./reducer";
import * as actions from './actions';

const store = createStore(reduser)

const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args))
// }

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', ()=> {
    const value = Math.floor(Math.random() * 10);
    rnd(value)
})

ReactDOM.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>,
    document.getElementById('root')
);
