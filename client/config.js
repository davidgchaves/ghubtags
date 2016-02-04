const config = {
  'localhost': {
    authUrl: 'https://ghubtags-localhost.herokuapp.com/authenticate',
    clientId: '1d8ed4a7f1d79e0fe930'
  },

  'ghubtags.surge.sh': {
    authUrl: 'https://ghubtags-production.herokuapp.com/authenticate',
    clientId: '6499744082622fdd11bb'
  }
}[window.location.hostname];

export default config;
