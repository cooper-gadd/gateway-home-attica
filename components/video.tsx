"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

export function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="lg"
            variant="outline"
            className="text-foreground"
            onClick={handlePlay}
          >
            <Play className="mr-2 h-6 w-6" />
            Play Video
          </Button>
        </div>
      ) : (
        <video className="w-full h-full" controls autoPlay preload="none">
          <source src="/promo.mp4" type="video/mp4" />
          <track
            src="/promo.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
      )}
    </div>
  );
}
