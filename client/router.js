import React      from 'react';
import { render } from 'react-dom';
import app        from 'ampersand-app';
import Router     from 'ampersand-router';
import qs         from 'qs';
import xhr        from 'xhr';

import Layout    from './layout';
import HomePage  from './pages/home';
import ReposPage from './pages/repos';

export default Router.extend({
  renderPage (page, opts = {wrapInLayout: true}) {
    opts.wrapInLayout
      ? render(<Layout me={app.me}>{page}</Layout>,
               document.body)
      : render(page,
               document.body);
  },

  routes: {
    ''                    : 'home',
    'repos'               : 'repos',
    'login'               : 'login',
    'auth/callback?:query': 'authCallback',
    'logout'              : 'logout'
  },

  home () {
    this.renderPage(<HomePage />,
                    {wrapInLayout: false}
    );
  },

  repos () {
    this.renderPage(<ReposPage />);
  },

  // More info at:
  //   https://developer.github.com/v3/oauth/#web-application-flow
  login () {
    window.location =
      'https://github.com/login/oauth/authorize' +
      '?' +
      qs.stringify({
        client_id: '1d8ed4a7f1d79e0fe930',
        redirect_uri: window.location.origin
                      + '/auth/callback',
        scope: 'user,repo'
      });
  },

  authCallback (query) {
    const authCode = qs.parse(query).code;
    xhr({
      url: 'https://ghubtags-localhost.herokuapp.com/authenticate/'
           + authCode,
      json: true
    }, (err, req, body) => {
      app.me.token = body.token;
      this.redirectTo('/repos');
    });
  },

  logout () {
    window.localStorage.clear();
    window.location = '/';
  }
});
