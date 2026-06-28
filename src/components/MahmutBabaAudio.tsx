"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { PlayIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const mahmutBabaAudioSrc = "/audio/mahmut-baba.mp3";

interface MahmutBabaAudioProps {
  children: ReactNode;
  className?: string;
}

export function MahmutBabaAudio({
  children,
  className,
}: MahmutBabaAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      audio.currentTime = 0;
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={cn(
        "transition-shadow duration-500",
        isPlaying && "shadow-[0_0_30px_rgba(182,111,122,0.58)]",
        className,
      )}
    >
      {children}

      <audio ref={audioRef} preload="none">
        <source src={mahmutBabaAudioSrc} type="audio/mpeg" />
      </audio>

      <button
        type="button"
        aria-label={
          isPlaying
            ? "Mahmut Baba Modu’nu duraklat"
            : "Mahmut Baba Modu’nu başlat"
        }
        aria-pressed={isPlaying}
        onClick={() => {
          void togglePlayback();
        }}
        className={cn(
          "absolute left-1/2 top-1/2 z-20 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#B66F7A] text-white transition-[transform,background-color] duration-300 hover:scale-110 hover:bg-[#985A65] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-14 lg:size-16",
          isPlaying && "animate-pulse motion-reduce:animate-none",
        )}
      >
        {isPlaying ? (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-7 sm:size-8 lg:size-9"
          >
            <path
              d="M7.5 5.5v13M16.5 5.5v13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <PlayIcon className="size-7 sm:size-8 lg:size-9" />
        )}
      </button>
    </div>
  );
}
