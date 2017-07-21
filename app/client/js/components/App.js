import React from 'react';
import { connect } from 'react-redux';
import Header from './Modules/Header';

const mapStateToProps = state => ({
  appName: state.appName,
  news: state.news
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} news={this.props.news} />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, () => ({}) )(App);
