var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var jQuery = require('jquery');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Profile = require('../components/Profile');

module.exports = (
    <Route name="app" path="/" handler={Main}>

        <Route name="profile" path="/profile/:username" handler={Profile} />

        <DefaultRoute handler={Home} />

    </Route>
);