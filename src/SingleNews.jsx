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
        <div className="px-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mb-4 text-sm">{description}</p>
          <a
            href={url}
            target="_blank"
            className="px-2 py-1 bg-teal-600 font-medium text-white hover:bg-teal-900 hover:text-black rounded-md inline-block"
          >
            Read More
          </a>
        </div>
      </article>
    </>
  );
};

export default SingleNews;
