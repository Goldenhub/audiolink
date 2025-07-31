import Style from "./style.module.css";
import { SeekBar } from "../SeekBar";
import { MinusCircleIcon, PauseIcon, PlayIcon, PlusCircleIcon, SkipBackIcon, SkipForwardIcon } from "lucide-react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

export const Player = () => {
  const { audioItem, currentTime, duration, handleNext, handlePause, handlePlay, handlePrevious, handleSeek, increaseVolume, reduceVolume, volume, shouldPlayRef } = useAudioPlayer();

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
          <meter title="volume" max={1} min={0} value={volume} className={Style.Meter}></meter>
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
