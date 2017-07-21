import React from 'react';

class NewsPreview extends React.Component {
  truncate(desc) {
    return desc;
  }

  render() {
    const newsItem = this.props.newsItem;

    let style = {};

    if (newsItem.images && newsItem.images.length > 0) {
      style = {backgroundImage: `url(${newsItem.images[0]})`};
    }

    return (
      <li className="news-preview">
        <a href={newsItem.url} target="_blank" style={style}>
          <p className="news-preview-title">
            {this.truncate(newsItem.description || newsItem.url)}
          </p>
        </a>
      </li>
    )
  }
};

export default NewsPreview;
