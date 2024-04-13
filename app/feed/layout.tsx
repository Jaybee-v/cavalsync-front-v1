import { Sidebar } from "@/components/Feed/Navigation/Sidebar";
import React from "react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="md:grid md:grid-cols-10">
      <Sidebar />
      <div className="md:col-span-8">{children}</div>
    </main>
  );
}
