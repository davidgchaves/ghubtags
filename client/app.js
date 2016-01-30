import Router from './router';
import styles from './styles/main.styl';

window.app = {
  // main entry point for our App
  init () {
    this.router = new Router();
    this.router.history.start();
  }
};

window.app.init();
