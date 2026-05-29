"use client";

import { useEffect, useRef } from "react";

interface ProjectVideoProps {
  src: string;
  poster: string;
  title: string;
}

/**
 * Vídeo do card: loop mudo, reproduz quando entra no viewport.
 */
export function ProjectVideo({ src, poster, title }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="auto"
      className="h-full w-full object-cover"
      aria-label={title}
    />
  );
}
