import React from 'react';
import NewsPreview from './NewsPreview';

class NewsList extends React.Component {
  render() {
    if (!this.props.news) {
      return null;
    }

    return (
      <ul className="news-list group">
        {
          this.props.news.map((newsItem, index) => {
            return (
              <NewsPreview newsItem={newsItem} key={index} />
            );
          })
        }
      </ul>
    );
  }
}

export default NewsList;

