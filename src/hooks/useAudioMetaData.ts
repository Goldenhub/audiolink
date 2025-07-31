import type { IAudioMetaData } from "@/types/types";

export const useAudioMetaData = async (src: string): Promise<IAudioMetaData> => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(src);

    const onLoaded = () => {
      resolve({
        duration: audio.duration,
        currentTime: audio.currentTime,
        percent: (audio.currentTime / audio.duration) * 100,
        setAudioTime: (time: number) => (audio.currentTime = time),
        audio,
      });
      cleanup();
    };

    const onError = () => {
      reject(new Error(`Failed to load audio: ${src}`));
      cleanup();
    };

    const cleanup = () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("error", onError);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("error", onError);
  });
};
