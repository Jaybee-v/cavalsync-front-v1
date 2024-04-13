"use client";
import { MessagesSquare, ThumbsUp } from "lucide-react";
import React from "react";
import { Commentaries } from "./Commentaries";
import { PostNewComment } from "./PostNewComment";

export const Actions = () => {
  const [openCommentaries, setOpenCommentaries] =
    React.useState<boolean>(false);
  const [like, setLike] = React.useState<boolean>(false);
  return (
    <>
      <section className="flex justify-evenly py-4">
        <button
          onClick={() => setLike(!like)}
          className={`btn btn-ghost !rounded-full ${
            like
              ? "!bg-green-500 text-white shadow-md shadow-neutral"
              : "hover:!bg-green-500 hover:text-white"
          }`}
        >
          <ThumbsUp />
        </button>
        <button
          className={`btn btn-ghost ${openCommentaries ? "bg-base-100" : ""}`}
          onClick={() => setOpenCommentaries(!openCommentaries)}
        >
          <MessagesSquare />
        </button>
      </section>
      {openCommentaries && (
        <>
          <section></section>
          <Commentaries />
        </>
      )}
      {!openCommentaries && <PostNewComment />}
    </>
  );
};
