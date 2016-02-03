import React          from 'react';
import ampersandMixin from 'ampersand-react-mixin';

import LabelItem from '../components/label-item';

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'RepoDetail',

  render () {
    const { repo, labels } = this.props;
    console.log(labels);

    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p></p>
        <ul>
          {labels.map(l => <LabelItem key={l.name} label={l} />)}
        </ul>
      </div>
    );
  }
});
