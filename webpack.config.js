require('babel-register');
var getConfig      = require('hjs-webpack');
var React          = require('react');
var ReactDOMServer = require('react-dom/server');
var HomePage       = require('./client/pages/home').default;
var LayoutPage     = require('./client/layout').default;

module.exports = getConfig({
  in: 'client/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    const homePageHtmlString =
      ReactDOMServer.renderToString(React.createElement(HomePage));
    const layoutPageHtmlString =
      ReactDOMServer.renderToString(React.createElement(LayoutPage, {me: {}}));

    return {
      'index.html': data.defaultTemplate({html: homePageHtmlString}),
      '200.html': data.defaultTemplate({html: layoutPageHtmlString})
    };
  }
});
