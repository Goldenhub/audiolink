import Style from "./style.module.css";
import { type IAudioMetaData, type IPlayListItem } from "@/types/types";
import { formatTime } from "@/utils/helpers";
import { useAppContext } from "@/contexts/AppContext";

export const Playlist = () => {
  const { audioList, currentSong, setCurrentSong } = useAppContext();
  const handleSongChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const song = e.currentTarget.value;
    setCurrentSong(song);
  };

  return (
    <div className={Style.PlayList}>
      <h2 className={Style.PlayListHeading}>Playlist</h2>
      <div className={Style.PlayListItems}>
        {audioList?.map((item: IAudioMetaData & IPlayListItem) => (
          <button value={item.title} type="button" key={item.id} className={`${Style.PlayListItem} ${currentSong === item.title ? Style.Active : ""}`} onClick={handleSongChange}>
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
  );
};
