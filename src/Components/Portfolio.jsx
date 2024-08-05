import React from "react";
import codepen from "../assets/portfolio/codepen.jpg";
import iNotebook from "../assets/portfolio/iNotebook.jpg";
import ecommerceWebsite from "../assets/portfolio/ecommerceWebsite.jpg";
import news_app from "../assets/portfolio/news_app.jpg";
import textAnalyzer from "../assets/portfolio/textAnalyzer.jpg";
import stickyNotes from "../assets/portfolio/stickyNotes.jpg";
import todoList from "../assets/portfolio/todoList.jpg";
import weather from "../assets/portfolio/weather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: codepen,
    },
    {
      id: 2,
      src: iNotebook,
    },
    {
      id: 3,
      src: ecommerceWebsite,
    },
    {
      id: 4,
      src: news_app,
    },
    {
      id: 5,
      src: textAnalyzer,
    },
    {
      id: 6,
      src: stickyNotes,
    },
    {
      id: 7,
      src: todoList,
    },
    {
      id: 8,
      src: weather,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-20">
          {portfolios.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 w-[400px] h-[200px] hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
