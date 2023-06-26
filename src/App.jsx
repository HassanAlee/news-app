import React, { useState, useEffect } from "react";
import axios from "axios";
import reducer from "./Reducer";
const API_KEY = "f1af2254555b4a1ab365d9d6d3f39b29";
const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=";
import { createStore } from "redux";
const initialState = {
  news: returnNews(),
};
function returnNews(news) {
  // return news;
  console.log(news);
}
export const store = createStore(reducer, initialState);
const App = () => {
  const [news, setNews] = useState(null);
  const fetchNews = async () => {
    try {
      const response = await axios(`${url}${API_KEY}`);
      const { data } = response;
      const { articles } = data;
      setNews(articles);
      // console.log(news);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  console.log(news);
  return <div>Appp is initialized!!!</div>;
};

export default App;
