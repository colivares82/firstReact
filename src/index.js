import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App txt="This is the Prop Text"
         cat={56}/>,
    document.getElementById('root')
);
