import { useAppContext } from "@/contexts/AppContext";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

export const useAudioPlayer = () => {
  const { currentIndex, setCurrentIndex, audioList, volume, setVolume } = useAppContext();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioItem = useMemo(() => {
    return audioList?.find((item) => item.id === currentIndex);
  }, [currentIndex, audioList]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shouldPlayRef = useRef(false);

  const handleNext = useCallback(() => {
    if (audioRef.current && audioList?.length) {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > audioList.length ? 1 : next;
      });
    }
    shouldPlayRef.current = true;
  }, [audioList, setCurrentIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(audioItem?.audio.src);
    audioRef.current = audio;

    if (shouldPlayRef.current) {
      audioRef.current.play();
    }

    const handleLoaded = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration ?? 0);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current?.currentTime ?? 0);
      if (audioRef.current?.currentTime === audioRef.current?.duration) {
        handleNext();
      }
    };

    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.pause();
      audioRef.current = null;
    };
  }, [audioItem, handleNext]);

  const handlePlay = () => {
    audioRef.current?.play();
    shouldPlayRef.current = true;
  };

  const handlePause = () => {
    audioRef.current?.pause();
    shouldPlayRef.current = false;
  };

  const handlePrevious = () => {
    if (audioRef.current && audioList?.length) {
      setCurrentIndex((prev) => {
        const prevIndex = prev - 1;
        return prevIndex < 1 ? audioList.length : prevIndex;
      });
      shouldPlayRef.current = true;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const increaseVolume = () => {
    setVolume((prev) => Math.min(prev + 0.1, 1));
  };
  const reduceVolume = () => {
    setVolume((prev) => Math.max(prev - 0.1, 0));
  };

  const handleSeek = (val: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  return {
    audioItem,
    currentTime,
    duration,
    handleNext,
    handlePlay,
    handlePause,
    handlePrevious,
    handleSeek,
    increaseVolume,
    reduceVolume,
    shouldPlayRef,
    volume,
  };
};
