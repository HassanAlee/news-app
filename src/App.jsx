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
  // health
  const fetchHealth = async () => {
    try {
      const response = await axios(`${topHeadlinesUrl}${API_KEY}`);
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
        <div class="flex flex-col md:flex-row justify-evenly items-center">
          <div class="flex my-5 md:my-0">
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mr-2"
              onClick={() => fetchHeadLines()}
            >
              Top Headlines
            </button>
            <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md mr-2">
              Button 2
            </button>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md">
              Button 3
            </button>
          </div>
          <input
            type="text"
            class="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4 md:mb-0"
            placeholder="Enter your text"
            onChange={(e) => onChange(e.target.value)}
            value={searchTerm}
          />
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mx-2 md:mx-2"
            onClick={() => changeValue()}
          >
            Submit
          </button>
        </div>
        {/* <div className="flex justify-between mb-6">
          <input
            type="text"
            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="inputField"
            onChange={(e) => onChange(e.target.value)}
            value={searchTerm}
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => changeValue()}
          >
            Search
          </button>
        </div> */}
        <h1 className="text-3xl font-bold underline text-center mt-4">
          Latest News
        </h1>
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
