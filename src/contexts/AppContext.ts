import type { IAudioMetaData, IPlayListItem } from "@/types/types";
import { createContext, useContext } from "react";

export const AppContext = createContext<{
  currentSong: string;
  setCurrentSong: React.Dispatch<React.SetStateAction<string>>;
  audioList: (IAudioMetaData & IPlayListItem)[] | undefined;
} | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
