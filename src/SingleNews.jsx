import React from "react";

const SingleNews = ({ author, title, img }) => {
  return (
    <>
      <article className="single-news shadow-lg">
        <div className="img-container">
          <img src={img} alt={"--"} className=" object-cover" />
        </div>
      </article>
    </>
  );
};

export default SingleNews;
