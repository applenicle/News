import React from 'react';

const News = ({ content, title }) => {
  return (
    <div className="news__content">
      <h3 className="news__subtitle">{title}</h3>
      <p className="news__text">{content}</p>
    </div>
  );
};

export default News;
