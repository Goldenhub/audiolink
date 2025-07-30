import type { IAudioMetaData, IPlayListItem } from "@/types/types";
import React, { createContext, useContext } from "react";

export const AppContext = createContext<{
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  audioList: (IAudioMetaData & IPlayListItem)[] | undefined;
  isPanelOpen: boolean;
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
