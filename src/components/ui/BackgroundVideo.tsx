"use client";

import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * Vídeo de fundo com autoplay garantido após montagem (políticas do navegador).
 */
export function BackgroundVideo({ src, poster, className = "" }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const play = () => {
      void video.play().catch(() => {
        /* autoplay bloqueado — poster permanece visível */
      });
    };

    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });

    return () => video.removeEventListener("loadeddata", play);
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={className}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
