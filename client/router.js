import React      from 'react';
import { render } from 'react-dom';
import Router     from 'ampersand-router';

import HomePage  from './pages/home';
import ReposPage from './pages/repos';

export default Router.extend({
  routes: {
    ''     : 'home',
    'repos': 'repos'
  },

  home () {
    render(
      <HomePage />,
      document.body
    );
  },

  repos () {
    render(
      <ReposPage />,
      document.body
    );
  }
});
