import { Outlet } from "react-router-dom";
import Navbr from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbr />
      <Outlet />
    </>
  );
};

export default MainLayout;
