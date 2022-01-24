import React from "react";
import CardPopular from "./CardPopular";

const RecentPosts = () => {
  return (
    <div>
      <div className="flex-col mb-6 content-center items-center">
        <div className="flex content-center pb-3 items-center ">
          <h3 className="text-3xl text-shadow font-semibold">RECENT POSTS</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 ml-2 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <p className="text-secondary">
          This is a collection of the most rated posts
        </p>
      </div>

      <div className="  flex-wrap justify-between  w-12/12 sm:w-11/12">
        <CardPopular glass="glass" />
        <CardPopular glass="glass" />
        <CardPopular glass="glass" />
        <CardPopular glass="glass" />
      </div>
      <div className="w-full justify-end pt-4  flex w-12/12 sm:w-11/12 pr-4">
        <button class="btn pr-0 text-white btn-link">See More</button>
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default RecentPosts;