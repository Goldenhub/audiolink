import type { ISeekBarProps } from "@/types/types";
import Style from "./style.module.css";
import * as Slider from "@radix-ui/react-slider";

export const SeekBar = ({ value, max, onChange }: ISeekBarProps) => {
  return (
    <Slider.Root className={Style.SliderRoot} value={[value]} min={0} max={max} step={1} onValueChange={([val]) => onChange(val)}>
      <Slider.Track className={Style.SliderTrack}>
        {/* <Slider.Range className={Style.sSiderRange} /> */}
        <Slider.Range className={Style.SliderRange} />
      </Slider.Track>
      <Slider.Thumb className={Style.SliderThumb} />
    </Slider.Root>
  );
};

// { onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
