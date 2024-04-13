import React from "react";

export const PostNewComment = () => {
  return (
    <form className="flex items-center gap-4 px-4 md:px-12 py-4">
      <div className="avatar">
        <div className="w-8 rounded-full bg-gray-500"></div>
      </div>
      <input
        type="text"
        placeholder="Commentez la publication..."
        className="input input-bordered w-full input-sm"
      />
    </form>
  );
};
