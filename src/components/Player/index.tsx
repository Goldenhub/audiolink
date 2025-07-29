import type { IAudioMetaData, IPlayListItem } from "@/types/types";
import Style from "./style.module.css";
import { useAppContext } from "@/contexts/AppContext";

export const Player = () => {
  const { currentSong, audioList } = useAppContext();
  const audioItem = audioList?.find((item: IAudioMetaData & IPlayListItem) => item.title === currentSong);
  return (
    <div className={Style.Player}>
      <div className={Style.Info}>
        <div className={Style.Banner}>
          <p className={Style.BannerTitle}>{currentSong}</p>
        </div>
        <div>
          <p className={Style.Title}>{currentSong}</p>
          <p className={Style.Artist}>{audioItem?.artist}</p>
        </div>
      </div>
      <div className={Style.Controls}></div>
    </div>
  );
};
