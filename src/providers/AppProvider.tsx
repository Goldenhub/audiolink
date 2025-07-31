import { type ReactNode } from "react";
import { AppContext } from "@/contexts/AppContext";

import { useEffect, useState } from "react";
import { PLAYLIST } from "../constants/audioList";
import { type IAudioMetaData, type IPlayListItem } from "@/types/types";
import { useAudioMetaData } from "@/hooks/useAudioMetaData";
const meta = useAudioMetaData;

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [audioList, setAudioList] = useState<(IAudioMetaData & IPlayListItem)[]>();
  const [isPanelOpen, setPanelOpen] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  useEffect(() => {
    const loadMetaData = async () => {
      const playlistWithMetaData = await Promise.all(
        PLAYLIST.map(async (item) => {
          const metaData = await meta(item.url);
          return {
            ...item,
            ...metaData,
          };
        })
      );
      setAudioList(playlistWithMetaData);
    };
    loadMetaData();
  }, []);
  return <AppContext.Provider value={{ currentIndex, setCurrentIndex, audioList, isPanelOpen, setPanelOpen, volume, setVolume }}>{children}</AppContext.Provider>;
}
