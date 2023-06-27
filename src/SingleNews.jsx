import React from "react";

const SingleNews = ({ author, title, urlToImage }) => {
  return (
    <>
      <article className="single-news shadow-lg">
        <div className="img-container">
          <img src={urlToImage} alt={"--"} className=" object-cover" />
        </div>
        <h2 className="text-xl">{title}</h2>
        <h4>{author}</h4>
      </article>
    </>
  );
};

export default SingleNews;
