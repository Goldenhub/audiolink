import { playlistItems } from "../../constants/playlist";
import type { PlaylistItem } from "../../constants/playlist";

export const Playlist = () => {
  return (
    <div>
      <h2>Playlist</h2>
      {playlistItems.map((item: PlaylistItem) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.artist}</p>
        </div>
      ))}
    </div>
  );
};
