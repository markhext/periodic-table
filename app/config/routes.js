var React = require('react'),
    Main = require('../components/Main'),
    Home = require('../components/Home'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <DefaultRoute handler={Home} />
    </Route>
);