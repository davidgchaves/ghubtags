import Model from 'ampersand-model';

import githubAuthMixin from '../helpers/github-auth-mixin';

export default Model.extend(
  githubAuthMixin,
  {
    url: 'https://api.github.com/user',

    initialize () {
      this.token = window.localStorage.token;

      this.on('change:token', this.onTokenChange);
    },

    props: {
      login: 'string'
    },

    session: {
      token: 'string'
    },

    onTokenChange () {
      window.localStorage.token = this.token;
      this.fetchInitialData();
    },

    fetchInitialData () {
      if (this.token) {
        this.fetch();
      }
    }
  }
);
