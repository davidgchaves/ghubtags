import React, { Component } from 'react';
import localLinks           from 'local-links';

class NavHelper extends Component {
  onClick (e) {
    const localPathname = localLinks.getLocalPathname(e);

    if (localPathname) {
      e.preventDefault();
      app.router.history.navigate(localPathname);
    }
  }

  render () {
    return (
      <div onClick={this.onClick} {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default NavHelper;
