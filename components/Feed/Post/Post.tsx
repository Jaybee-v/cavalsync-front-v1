import React from "react";
import { Actions } from "./Actions";
import { Content } from "./Content";

const CONTENT =
  "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet, labore quod temporibus, provident et natus neque porro quae dicta illo ad perferendis enim! Eius blanditiis sequi rerum vero asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet, labore quod temporibus, provident et natus neque porro quae dicta illo ad perferendis enim! Eius blanditiis sequi rerum vero asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet, labore quod temporibus, provident et natus neque porro quae dicta illo ad perferendis enim! Eius blanditiis sequi rerum vero asperiores!";

export const Post = () => {
  return (
    <div className="shadow rounded-xl bg-white">
      <section className="flex items-center gap-8 p-4">
        <div className="avatar">
          <div className="w-16 rounded-full bg-gray-500"></div>
        </div>
        <div>
          <h6 className="font-semibold text-gray-700">John Doe</h6>
          <p className="text-xs text-gray-400">il y a 3h.</p>
        </div>
      </section>
      <Content content={CONTENT} />
      <Actions />
    </div>
  );
};
