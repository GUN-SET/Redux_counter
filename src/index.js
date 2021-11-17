import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import reduser from "./reducer";
import App from "./components/App";
import {Provider} from "react-redux";

const store = createStore(reduser)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);



