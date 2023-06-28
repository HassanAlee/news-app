import React, { useEffect } from "react";
import axios from "axios";
import reducer from "./Reducer";
import { connect } from "react-redux";
import "./dist/output.css";
const API_KEY = "f1af2254555b4a1ab365d9d6d3f39b29";
const url = "https://newsapi.org/v2/everything?q=";
const topHeadlinesUrl = "https://newsapi.org/v2/top-headlines?country=us";
import SingleNews from "./SingleNews";
import { createStore } from "redux";
const initialState = {
  news: [],
  searchTerm: "",
  searchValue: "cryptocurrency",
};
export const store = createStore(reducer, initialState);
const App = ({
  load,
  news,
  onChange,
  searchTerm,
  changeValue,
  searchValue,
}) => {
  const fetchNews = async (term) => {
    console.log(term);
    try {
      const response = await axios(`${url}${searchValue}&apikey=${API_KEY}`);
      const { data } = response;
      const { articles } = data;
      load(articles);
    } catch (error) {
      console.log(error.response);
    }
  };
  // top headlines
  const fetchHeadLines = async () => {
    try {
      const response = await axios(`${topHeadlinesUrl}&apikey=${API_KEY}`);
      const { data } = response;
      const { articles } = data;
      load(articles);
    } catch (error) {
      console.log(error.response);
    }
  };
  // fetch category
  const fetchCategory = async (category) => {
    try {
      const response = await axios(
        `${topHeadlinesUrl}&category=${category}&apikey=${API_KEY}`
      );
      const { data } = response;
      const { articles } = data;
      load(articles);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchNews(searchValue);
  }, [searchValue]);
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
      <section id="news" className="my-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center pt-6">
          <div className="flex flex-col md:flex-row my-5 md:my-0">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md md:mr-2 mb-2 md:mb-0"
              onClick={() => fetchHeadLines()}
            >
              Top Headlines
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md md:mr-2 mb-2 md:mb-0"
              onClick={() => fetchCategory("health")}
            >
              Health
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md md:mr-2 mb-2 md:mb-0"
              onClick={() => fetchCategory("entertainment")}
            >
              Entertainment
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md md:mr-2 mb-2 md:mb-0"
              onClick={() => fetchCategory("science")}
            >
              Science
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md md:mr-2 mb-2 md:mb-0"
              onClick={() => fetchCategory("sports")}
            >
              Sports
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => fetchCategory("business")}
            >
              Business
            </button>
          </div>
          <input
            type="text"
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4 md:mb-0"
            placeholder="Enter your text"
            onChange={(e) => onChange(e.target.value)}
            value={searchTerm}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mx-2 md:mx-2"
            onClick={() => changeValue()}
          >
            Submit
          </button>
        </div>
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-6 my-8 ">
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
    onChange: (term) => {
      dispatch({ type: "ON_CHANGE", payload: { term } });
    },
    changeValue: () => {
      dispatch({ type: "SUBMIT" });
    },
  };
}
function mapStateToProp(state) {
  const { news, searchTerm, searchValue } = state;
  return { news, searchTerm, searchValue };
}
export default connect(mapStateToProp, mapDispatchToProp)(App);
