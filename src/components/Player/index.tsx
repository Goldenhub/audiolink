import Style from "./style.module.css";
import { useAppContext } from "@/contexts/AppContext";
import { SeekBar } from "../SeekBar";
import { useEffect, useRef, useState } from "react";
import { MinusCircleIcon, PauseIcon, PlayIcon, PlusCircleIcon, SkipBackIcon, SkipForwardIcon } from "lucide-react";

export const Player = () => {
  const { currentIndex, setCurrentIndex, audioList } = useAppContext();
  const audioItem = audioList?.find((item) => item.id === currentIndex);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shouldPlayRef = useRef(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(audioItem?.audio.src);
    audioRef.current = audio;

    if (shouldPlayRef.current) {
      audioRef.current.play();
    }

    const handleLoaded = () => {
      setDuration(audioRef.current?.duration ?? 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current?.currentTime ?? 0);
    };

    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.pause();
      audioRef.current = null;
    };
  }, [audioItem]);

  const handlePlay = () => {
    audioRef.current?.play();
    shouldPlayRef.current = true;
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current?.pause();
    }
    shouldPlayRef.current = false;
  };

  const handleNext = () => {
    if (audioRef.current && audioList?.length) {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > audioList.length ? 1 : next;
      });
    }
    shouldPlayRef.current = true;
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

  const increaseVolume = () => {
    if (audioRef.current) {
      const newVal = audioRef.current.volume + 0.1;
      if (newVal <= 1) {
        audioRef.current.volume = newVal;
      }
    }
  };
  const reduceVolume = () => {
    if (audioRef.current) {
      const newVal = audioRef.current.volume - 0.1;
      if (newVal > 0) {
        audioRef.current.volume = newVal;
      }
    }
  };

  const handleSeek = (val: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };
  return (
    <div className={Style.Player}>
      <div className={Style.Info}>
        <div className={Style.Banner}>
          <p className={Style.BannerTitle}>{audioItem?.title}</p>
        </div>
        <div>
          <p className={Style.Title}>{audioItem?.title}</p>
          <p className={Style.Artist}>{audioItem?.artist}</p>
        </div>
      </div>
      <SeekBar max={duration} value={currentTime} onChange={handleSeek} />
      <div className={Style.Controls}>
        <div className={Style.VolumeControl}>
          <button title="volume down" type="button" onClick={reduceVolume} className={Style.Decrease}>
            <MinusCircleIcon size={16} />
          </button>
          <meter title="volume" max={1} min={0} value={audioRef.current?.volume ?? 1} className={Style.Meter}></meter>
          <button title="volume up" type="button" onClick={increaseVolume} className={Style.Increase}>
            <PlusCircleIcon size={16} />
          </button>
        </div>
        <div className={Style.MainControls}>
          <button title="previous" type="button" onClick={handlePrevious} className={Style.Previous}>
            <SkipBackIcon />
          </button>
          <div>
            {shouldPlayRef.current ? (
              <button title="pause" type="button" onClick={handlePause} className={Style.TogglePlay}>
                <PauseIcon color="white" size={25} />
              </button>
            ) : (
              <button title="play" type="button" onClick={handlePlay} className={Style.TogglePlay}>
                <PlayIcon color="white" size={25} />
              </button>
            )}
          </div>
          <button title="next" type="button" onClick={handleNext} className={Style.Next}>
            <SkipForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
