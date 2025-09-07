import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main style={{ padding: "2rem" }}>
      <Outlet />
    </main>
  );
};

export default MainLayout;
