/* eslint-disable react/prop-types */
import NavBar from "../NavBar";
import Content from "./content";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Content>{children}</Content>
    </>
  );
};

export default MainLayout;
