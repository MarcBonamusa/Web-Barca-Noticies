import React from 'react';

function VideoPlayer({ mp4Src, webmSrc, title }) {
  return (
    <video
      className="w-full h-full object-cover rounded-2xl shadow-lg"
      controls
      preload="metadata"
      title={title}
      loading="lazy"
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      {mp4Src && <source src={mp4Src} type="video/mp4" />}
      El teu navegador no suporta la reproducció de vídeo.
    </video>
  );
}

export default VideoPlayer;
