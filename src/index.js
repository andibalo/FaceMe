import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons'

ReactDOM.render(<App/>, document.getElementById('root'));

//linear gradeint background on body in index.css has to start at 89 deg(to left)
// otherwise if to bottom linear backround will repeat

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
