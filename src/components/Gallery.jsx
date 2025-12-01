import React from "react";

export default function Gallery({ children }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
      {children}
    </section>
  );
}