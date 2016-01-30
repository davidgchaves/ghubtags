import Router from './router';

window.app = {
  // main entry point for our App
  init () {
    this.router = new Router();
    this.router.history.start();
  }
};

window.app.init();
