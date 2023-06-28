import React from "react";

const SingleNews = ({ content, title, urlToImage, url, description }) => {
  return (
    <>
      <article className="single-news shadow-lg pb-4">
        <div className="img-container h-70">
          <img
            className="h-full"
            src={
              urlToImage == null
                ? "https://images.pexels.com/photos/177557/pexels-photo-177557.jpeg?auto=compress&cs=tinysrgb&w=600"
                : urlToImage
            }
            alt={"--"}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <h4 className="mb-4">{content !== null ? content : description}</h4>
        <a
          href={url}
          target="_blank"
          className="px-2 py-1 bg-teal-600 font-medium text-white hover:bg-teal-900 hover:text-black"
        >
          Read More
        </a>
      </article>
    </>
  );
};

export default SingleNews;
