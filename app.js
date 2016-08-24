require('babel-register'); //The require hook will bind itself to node's require and automatically compile files on the fly.

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const _ = require('lodash');
const fs = require('fs');

const port = 5050;
const match = ReactRouter.match;
const RouterContext = ReactRouter.RouterContext;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
const ClientApp = require('./src/App.js');
const Routes = ClientApp.Routes()
const app = express();

app.use('/public', express.static('./public'));

app.use((req, res) => {
  match(
    { routes: Routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const body = ReactDOMServer.renderToString(React.createElement(RouterContext, renderProps))
        res.status(200).send(template({body}));
      } else {
        res.status(404).send('Not found');
      }
  });
});

console.log('Express server listening on port ' + port);
app.listen(port);
