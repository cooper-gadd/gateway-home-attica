"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

interface VideoProps {
  thumbnailSrc: string;
  videoSrc: string;
}

export function Video({ thumbnailSrc, videoSrc }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative aspect-video">
      {!isPlaying && (
        <div className="absolute inset-0 z-10">
          <Image
            src={thumbnailSrc || "/placeholder.svg"}
            alt="Video Thumbnail"
            fill
            className="object-cover rounded-lg"
          />
          <div
            className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-all duration-300 flex items-center justify-center cursor-pointer rounded-lg"
            onClick={handlePlay}
          >
            <div className="bg-white/95 rounded-full p-6 shadow-xl hover:bg-white transform transition-transform duration-300 hover:scale-110">
              <Play className="h-12 w-12 text-black" fill="currentColor" />
            </div>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        controls={isPlaying}
        className="w-full h-full rounded-lg"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
