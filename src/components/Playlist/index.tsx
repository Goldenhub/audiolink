import Style from "./style.module.css";
import { type IAudioMetaData, type IPlayListItem } from "@/types/types";
import { formatTime } from "@/utils/helpers";
import { useAppContext } from "@/contexts/AppContext";
import { AnimatePresence, motion } from "motion/react";

export const Playlist = () => {
  const { audioList, currentIndex, setCurrentIndex, isPanelOpen } = useAppContext();
  const currentSong = audioList?.find((item) => item.id === currentIndex);
  const handleSongChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const index = audioList?.find((item) => item.id === Number(e.currentTarget.value))?.id;
    setCurrentIndex(index!);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isPanelOpen && (
          <motion.div initial={{ opacity: 0, left: -1000 }} animate={{ opacity: 1, left: 0 }} exit={{ opacity: 0.5, left: -1000 }} transition={{ duration: 0.5, ease: "easeInOut" }} className={Style.PlayList}>
            <h2 className={Style.PlayListHeading}>Playlist</h2>
            <div className={Style.PlayListItems}>
              {audioList?.map((item: IAudioMetaData & IPlayListItem) => (
                <button value={item.id} type="button" key={item.id} className={`${Style.PlayListItem} ${currentSong?.title === item.title ? Style.Active : ""}`} onClick={handleSongChange}>
                  <div className={Style.PlayListTexts}>
                    <div>
                      <h3 className={Style.PlayListItemHeading}>{item.title}</h3>
                      <p>{item.artist}</p>
                    </div>
                    <span>{formatTime(item.duration)}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={Style.PlayListDesktop}>
        <h2 className={Style.PlayListHeading}>Playlist</h2>
        <div className={Style.PlayListItems}>
          {audioList?.map((item: IAudioMetaData & IPlayListItem) => (
            <button value={item.id} type="button" key={item.id} className={`${Style.PlayListItem} ${currentSong?.title === item.title ? Style.Active : ""}`} onClick={handleSongChange}>
              <div className={Style.PlayListTexts}>
                <div>
                  <h3 className={Style.PlayListItemHeading}>{item.title}</h3>
                  <p>{item.artist}</p>
                </div>
                <span>{formatTime(item.duration)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
