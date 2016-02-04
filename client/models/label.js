import Model from 'ampersand-model';

import githubAuthMixin from '../helpers/github-auth-mixin';

export default Model.extend(
  githubAuthMixin,
  {
    idAttribute: 'name',

    props: {
      name: 'string',
      color: 'string'
    },

    session: {
      editing: {
        type: 'boolean',
        default: false
      }
    }
  }
);
