import React, { Component } from 'react';

import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'LabelItem',

  onEditClick () {
    this.props.label.editing = true;
  },

  render () {
    const { label } = this.props;
    const cssColor = '#' + label.color;

    const editLabel = (
      <div>
        <form className='label'>
          <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
          <input name='name'/>
          <input name='color'/>
          <button type='submit' className='button button-small'>Save</button>
          <button type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      </div>
    );

    const showLabel = (
      <div>
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{label.name}</span>
          <span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
          <span className='octicon octicon-x'></span>
        </div>
      </div>
    );

    return label.editing ? editLabel : showLabel;
  }
});
