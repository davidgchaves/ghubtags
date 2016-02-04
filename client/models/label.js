import Model from 'ampersand-model';
import xhr   from 'xhr';

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
    },

    update (attributes) {
      const oldAttributes = this.attributes;

      xhr({
        url: this.url(),
        json: attributes,
        method: 'PATCH',
        headers: {
          Authorization: 'token' + app.me.token
        }
      }, (err, req, body) => {
        if (err) {
          this.set(oldAttributes);
          console.error('Something went wrong when updating the label, maybe check your wifi?');
        }
      });

      this.set(attributes);
    }
  }
);
