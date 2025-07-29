import { Playlist } from "@/components/Playlist";
import Style from "./style.module.css";
import { Player } from "@/components/Player";

export const Home = () => {
  return (
    <div className={Style.Home}>
      <Playlist />
      <Player />
    </div>
  );
};
