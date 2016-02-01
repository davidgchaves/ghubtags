import Model from 'ampersand-model';

export default Model.extend({
  initialize () {
    this.token = window.localStorage.token;

    this.on('change:token', this.onTokenChange);
  },

  session: {
    token: 'string'
  },

  onTokenChange () {
    window.localStorage.token = this.token;
  }
});
