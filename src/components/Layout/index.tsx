import { Suspense } from "react";
import { MainLayout } from "./MainLayout";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};
