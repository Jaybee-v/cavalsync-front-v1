import React from "react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-10">
      <div className="col-span-2 bg-gray-400"></div>
      <div className="col-span-8">{children}</div>
    </main>
  );
}
