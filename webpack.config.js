var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'client/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (context) {
    return {
      'index.html': context.defaultTemplate(),
      '200.html': context.defaultTemplate()
    };
  }
});
