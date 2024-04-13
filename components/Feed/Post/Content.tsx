"use client";
import React from "react";

interface Props {
  content: string;
}

export const Content = (props: Props) => {
  const [showFullContent, setShowFullContent] = React.useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <section className="px-6 py-8 border-b border-t">
      <p className="text-neutral text-justify">
        {showFullContent
          ? props.content
          : `${props.content.substring(0, 400)}...`}
        <span className="">
          {!showFullContent && (
            <button
              onClick={toggleContent}
              className="text-gray-400 italic font-semibold text-sm hover:text-primary px-6 transition"
            >
              voir plus...
            </button>
          )}
          {showFullContent && (
            <button
              onClick={toggleContent}
              className="text-gray-400 italic font-semibold text-sm hover:text-primary px-6 transition"
            >
              voir moins...
            </button>
          )}
        </span>
      </p>
    </section>
  );
};
