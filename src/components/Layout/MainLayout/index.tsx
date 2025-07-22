import { NavLink } from "react-router";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
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
    </>
  );
};
