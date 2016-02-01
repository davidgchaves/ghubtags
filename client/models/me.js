import Model from 'ampersand-model';

export default Model.extend({
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

  ajaxConfig () {
    return {
      headers: {
        Authorization: 'token' + ' ' + this.token
      }
    };
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
});
