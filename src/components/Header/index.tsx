import { PanelLeftOpen } from "lucide-react";
import { NavLink } from "react-router";
import Style from "./style.module.css";
import { useAppContext } from "@/contexts/AppContext";

export const Header = () => {
  const { setPanelOpen, isPanelOpen } = useAppContext();
  return (
    <header className={Style.Header}>
      <nav>
        <ul className={Style.NavList}>
          <li className={Style.NavBrand}>
            <button type="button" title="open playlist" onClick={() => setPanelOpen(!isPanelOpen)}>
              <PanelLeftOpen className={Style.TogglePanel} />
            </button>
            <NavLink to="/">
              <span role="img" aria-label="logo">
                🎧 audioLink
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
