import { useEffect, useState } from "react";
import WebApiPost from "../../../api/posts";
import Search from "../../components/Search/index";
import CardPost from "../../components/card/card";
import MainLayout from "../../components/layout/MainLayout";
import ModalPost from "./components/modal";
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetPosts();
  }, []);

  const GetPosts = async () => {
    try {
      const response = await WebApiPost.getPosts();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainLayout>
      <Search />
      <div className="grid grid-cols-1 text-gray-50 gap-4 w-3/4">
        {posts.length > 0 ? (
          <CardPost data={posts} />
        ) : (
          <div className="flex justify-center mt-10 border-dashed border-2 bord p-10">
            <span className="text-gray-300 text-3xl font-bold">
              No hay contenido
            </span>
          </div>
        )}
      </div>
      <ModalPost />
    </MainLayout>
  );
};

export default Blog;
