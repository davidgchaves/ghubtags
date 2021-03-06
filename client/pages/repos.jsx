import React          from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Repos',

  render () {
    const { repos } = this.props;

    return (
      <div>
        <h2>Repos</h2>
        <ul>
          {repos.map(r =>
            (<li key={r.id}>
              <span className="octicon octicon-repo"></span>
              {" "}
              <a href={r.appUrl}>{r.full_name}</a>
            </li>)
          )}
        </ul>
      </div>
    );
  }
});
