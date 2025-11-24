import React from "react";

function AudioPlayer({ sources, title }) {
  return (
    <section className="py-6 bg-gray-100 rounded-xl shadow-md p-6 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>
      <audio controls className="w-full" preload="none">
        {sources.map((src, index) => (
          <source key={index} src={src.url} type={src.type} />
        ))}
        El teu navegador no suporta l'àudio.
      </audio>
    </section>
  );
}

export default AudioPlayer;
