import Model from 'ampersand-model';

import githubAuthMixin from '../helpers/github-auth-mixin';
import Labels          from './Labels'

export default Model.extend(
  githubAuthMixin,
  {
    url () {
      return 'https://api.github.com/repos/' + this.full_name;
    },

    props: {
      id: 'number',
      full_name: 'string'
    },

    derived: {
      appUrl: {
        deps: ['full_name'],
        fn () { return '/repo/' + this.full_name; }
      }
    },

    collections: {
      labels: Labels
    },

    fetch () {
      Model.prototype.fetch.apply(this, arguments);
      this.labels.fetch();
    }
  }
);
