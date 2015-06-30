import React from 'react';

import {Router, Route, DefaultRoute} from 'react-router';

import Main from '../components/Main.js';
import Home from '../components/Home.js';
import Profile from '../components/Profile.js';


export default (
    <Route name="app" path="/" handler={Main}>

        <Route name="profile" path="/profile/:username" handler={Profile} />

        <DefaultRoute handler={Home} />

    </Route>
);