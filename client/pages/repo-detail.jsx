import React          from 'react';
import ampersandMixin from 'ampersand-react-mixin';

import LabelItem from '../components/label-item';

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'RepoDetail',

  onAddLabelClick () {
    this.props.labels.add({
      name: '',
      color: '',
      editing: true,
      saved: false
    }, {
      at: 0
    });
  },

  render () {
    const { repo, labels } = this.props;

    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p>
          <button onClick={this.onAddLabelClick} className='button'>Add New Label</button>
        </p>
        <ul>
          {labels.map(l => <LabelItem key={l.name} label={l} />)}
        </ul>
      </div>
    );
  }
});
