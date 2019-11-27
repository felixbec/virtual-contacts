import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Components/Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { contacts } from './contactData';

ReactDOM.render(
    <div>
        <Card id={contacts[0].id} name={contacts[0].name} email={contacts[0].email} />
        <Card id={contacts[1].id} name={contacts[1].name} email={contacts[1].email} />
        <Card id={contacts[2].id} name={contacts[2].name} email={contacts[2].email} />
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
