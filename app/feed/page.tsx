import { CreatePost } from "@/components/Feed/Post/CreatePost";
import { Post } from "@/components/Feed/Post/Post";
import React from "react";

export default function FeedPage() {
  return (
    <div className="min-h-screen py-4 px-6 md:px-8">
      <CreatePost />
      <Post />
    </div>
  );
}
