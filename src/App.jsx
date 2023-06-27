import React, { useEffect, useCallback } from "react";
import axios from "axios";
import reducer from "./Reducer";
import { connect } from "react-redux";
import "./dist/output.css";
import { newsData } from "./newsData";
const API_KEY = "f1af2254555b4a1ab365d9d6d3f39b29";
const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=";
import SingleNews from "./SingleNews";
import { createStore } from "redux";
const initialState = {
  news: newsData,
};
export const store = createStore(reducer, initialState);
const App = ({ load, news }) => {
  const fetchNews = useCallback(async () => {
    try {
      const response = await axios(`${url}${API_KEY}`);
      const { data } = response;
      const { articles } = data;
      load(articles);
    } catch (error) {
      console.log(error.response);
    }
  }, [API_KEY]);
  useEffect(() => {
    // fetchNews();
  }, [fetchNews]);
  if (news.length < 1) {
    return (
      <>
        <h1 key={0} className="text-3xl font-bold underline text-center">
          Loading News
        </h1>
      </>
    );
  }
  return (
    <>
      <section id="news">
        <h1 className="text-3xl font-bold underline text-center">
          Latest News
        </h1>
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {news.map((item, index) => {
            console.log(index);
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
