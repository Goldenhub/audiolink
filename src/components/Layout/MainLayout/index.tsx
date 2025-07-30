import { Header } from "@/components/Header";
import Style from "./style.module.css";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={Style.App}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
