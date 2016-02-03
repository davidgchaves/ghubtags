import React, { Component } from 'react';

class RepoDetail extends Component {
  render () {
    const { repo } = this.props;

    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p></p>
        <ul></ul>
      </div>
    );
  }
}

export default RepoDetail;
