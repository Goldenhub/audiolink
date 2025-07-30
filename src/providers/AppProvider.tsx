import { type ReactNode } from "react";
import { AppContext } from "@/contexts/AppContext";

import { useEffect, useState } from "react";
import { PLAYLIST } from "../constants/audioList";
import { type IAudioMetaData, type IPlayListItem } from "@/types/types";
import { getAudioMetaData } from "@/hooks/useAudioMetaData";

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [audioList, setAudioList] = useState<(IAudioMetaData & IPlayListItem)[]>();
  const [isPanelOpen, setPanelOpen] = useState<boolean>(false);
  useEffect(() => {
    const loadMetaData = async () => {
      const playlistWithMetaData = await Promise.all(
        PLAYLIST.map(async (item) => {
          const meta = await getAudioMetaData(item.url);
          return {
            ...item,
            ...meta,
          };
        })
      );
      setAudioList(playlistWithMetaData);
    };
    loadMetaData();
  }, []);
  return <AppContext.Provider value={{ currentIndex, setCurrentIndex, audioList, isPanelOpen, setPanelOpen }}>{children}</AppContext.Provider>;
}
