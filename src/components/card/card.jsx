import { useState } from "react";
import { DinamicColor } from "../../../utils/functions";

const CardPost = (posts) => {
  const [postSelected, SetPostSelected] = useState(null);

  const Post = (posts) => {
    return (
      <>
        {posts.posts.data.map((post, i) => {
          return (
            <div
              onClick={() =>
                postSelected === i ? SetPostSelected(null) : SetPostSelected(i)
              }
              key={i}
              className="mt-4 dark:md:hover:bg-gray-700 hover:p-4 hover:cursor-pointer bg-white dark:bg-slate-900 rounded-lg px-6 py-1 ring-1 ring-slate-900/5 shadow-xl"
            >
              <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                {post.title}
                <span className="ml-4 text-sm text-gray-600">{post.date}</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm text-justify">
                {postSelected === i || post.content.length < 70
                  ? post.content
                  : `${post.content.substring(0, 70)}...`}
              </p>
              <div className="flex justify-end mt-2 text-white">
                <div
                  className="text-white h-7 w-7 shadow-inner border-2 border-white rounded-full -mt-1 flex items-center justify-center mr-2"
                  style={{ backgroundColor: `${DinamicColor()}` }}
                >
                  {post.user.substring(0, 1)}
                </div>
                {post.user}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return <Post posts={posts} />;
};

export default CardPost;
