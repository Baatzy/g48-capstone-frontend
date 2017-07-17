import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Login from './Login/login'
import Navbar from './Navbar/navbar';
import Dashboard from './Dashboard/dashboard';
import Train from './Train/train';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
