import React from "react";

const SingleNews = ({ author, title, urlToImage, description, url }) => {
  return (
    <>
      <article className="single-news">
        <div className="img-container">
          <img src={urlToImage} alt={title} />
        </div>
        <div className="news-content">
          <h2>{title}</h2>
          <h4>{author}</h4>
        </div>
      </article>
    </>
  );
};

export default SingleNews;
