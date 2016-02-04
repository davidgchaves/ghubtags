import React, { Component } from 'react';

import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'LabelItem',

  onEditClick (e) {
    e.preventDefault();
    this.props.label.editing = true;
  },

  onCancelClick (e) {
    e.preventDefault();
    this.props.label.editing = false;
  },

  onDeleteClick (e) {
    e.preventDefault();
    this.props.label.destroy();
  },

  onNameChange (e) {
    this.setState({
      name: e.target.value
    });
  },

  onColorChange (e) {
    this.setState({
      color: e.target.value.slice(1)
    });
  },

  getInitialState () {
    const { name, color } = this.props.label;

    return {
      name,
      color
    };
  },

  render () {
    const { label } = this.props;
    const { name, color } = this.state;
    const cssColor = '#' + color;

    const editLabel = (
      <div>
        <form className='label'>
          <span style={{backgroundColor: cssColor}} className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
          <input name='name' onChange={this.onNameChange} value={name} />
          <input name='color' onChange={this.onColorChange} value={cssColor} />
          <button type='submit' className='button button-small'>Save</button>
          <button onClick={this.onCancelClick} type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      </div>
    );

    const showLabel = (
      <div>
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{label.name}</span>
          <span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
          <span onClick={this.onDeleteClick} className='octicon octicon-x'></span>
        </div>
      </div>
    );

    return label.editing ? editLabel : showLabel;
  }
});
