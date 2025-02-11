import { Outlet } from "react-router";
import Header from "./Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div></div>
    </>
  );
};

export default RootLayout;
