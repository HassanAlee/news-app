import React, { useState, useEffect } from "react";
import axios from "axios";
import reducer from "./Reducer";
import { connect } from "react-redux";
import "./SingleNews.scss";
const API_KEY = "f1af2254555b4a1ab365d9d6d3f39b29";
const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=";
import SingleNews from "./SingleNews";
import { createStore } from "redux";
const initialState = {
  news: [],
};
export const store = createStore(reducer, initialState);
const App = ({ load, news }) => {
  const fetchNews = async () => {
    try {
      const response = await axios(`${url}${API_KEY}`);
      const { data } = response;
      const { articles } = data;
      load(articles);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  if (news.length < 1) {
    return <h1>Loading News</h1>;
  }
  return (
    <>
      <section id="news">
        <h1>Latest News</h1>
        <div className="news-container">
          {news.map((item, index) => {
            return (
              <>
                <SingleNews key={index} {...item} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
function mapDispatchToProp(dispatch) {
  return {
    load: (articles) => {
      dispatch({ type: "ON_LOAD", payload: { articles } });
    },
  };
}
function mapStateToProp(state) {
  const { news } = state;
  return { news };
}
export default connect(mapStateToProp, mapDispatchToProp)(App);
