import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const news = [
  { _id: "1", title: "Master Next.js 14 App Router is now live!", tag: "New"},
  { _id: "2", title: "Flash Sale: 50% discount on all Development courses.", tag: "Offer"},
  { _id: "3", title: "Congratulations to our top 5 graduates of this month!", tag: "Update"},
  { _id: "4", title: "New profile features added for better user experience.", tag: "System"},
];

const BreakingNews = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-2">
      <div className="max-w-7xl mx-auto flex items-center px-6">
        <div className="flex items-center gap-2 pr-4 border-r border-gray-200">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-[12px] font-bold text-gray-900 uppercase tracking-tighter">
            Updates
          </span>
        </div>
        <Marquee
          pauseOnHover={true}
          speed={45}
          gradient={true}
          gradientWidth={30}
          className="ml-4"
        >
          {news.map((item) => (
            <div key={item._id} className="flex items-center mr-12 group">
              <span className="text-[10px] font-bold text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded mr-3">
                {item.tag}
              </span>
              <ul
                key={item._id}
                className="text-[13px] font-medium text-gray-600 hover:text-blue-600 transition-colors">
                {item.title}
              </ul>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;