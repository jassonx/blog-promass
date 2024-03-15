import { Route, Routes } from "react-router-dom";
import Users from "../Pages/admin";
import Blog from "../Pages/blog";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default AppRouter;
