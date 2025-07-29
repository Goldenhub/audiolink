import { PanelLeftOpen } from "lucide-react";
import { NavLink } from "react-router";
import Style from "./style.module.css";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={Style.App}>
      <header className={Style.Header}>
        <nav>
          <ul className={Style.NavList}>
            <li className={Style.NavBrand}>
              <PanelLeftOpen className={Style.TogglePanel} />
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
      <main>{children}</main>
    </div>
  );
};
