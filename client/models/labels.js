import Collection from 'ampersand-rest-collection';

import githubAuthMixin from '../helpers/github-auth-mixin';
import Label           from './label';

export default Collection.extend(
  githubAuthMixin,
  {
    url () {
      return this.parent.url() + '/labels';
    },

    model: Label
  }
);
