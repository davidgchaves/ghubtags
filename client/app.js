import app from 'ampersand-app';

import Router from './router';
import Me     from './models/me';
import styles from './styles/main.styl';

// We need to put app explicitly on window, so
// we can access the app object in the browser from the console
window.app = app;

app.extend({
  // main entry point for our App
  init () {
    this.me = new Me();
    this.me.fetchInitialData();
    this.router = new Router();
    this.router.history.start();
  }
});

app.init();
