import { Route, Routes } from "react-router-dom";
import Blog from "../Pages/blog";
import Login from "../Pages/login";
import Users from "../Pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Blog />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default AppRouter;
