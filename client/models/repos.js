import Collection from 'ampersand-rest-collection';

import githubAuthMixin from '../helpers/github-auth-mixin';
import Repo            from './repo';

export default Collection.extend(
  githubAuthMixin,
  {
    url: 'https://api.github.com/user/repos',

    model: Repo,
  }
);
