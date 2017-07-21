import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container group">
          <a href="/" className="navbar-brand">
            {this.props.appName}
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
