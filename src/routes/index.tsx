import { Layout } from "@/components/Layout";
import { About, Home, NotFound } from "@/pages";
import { Route, Routes } from "react-router";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
