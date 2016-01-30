import Router from 'ampersand-router';

export default Router.extend({
  routes: {
    ''     : 'home',
    'repos': 'repos'
  },

  home () {
    console.log('home page');
  },

  repos () {
    console.log('repos page');
  }
});
