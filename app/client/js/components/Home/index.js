import React from 'react';
import { connect } from 'react-redux';
import NewsList from '../Modules/NewsList';
import data from '../../data';

const mapStateToProps = state => ({
  news: state.news
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) => dispatch({type: 'HOME_PAGE_LOADED', payload})
});

class Home extends React.Component {
	componentWillMount() {
	  this.props.onLoad(data.News.all());
	}

  render() {
    return (
      <div className="container page">
        <NewsList news={this.props.news} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
