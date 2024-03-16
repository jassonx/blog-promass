import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import WebApiPost from "../../../api/posts";
import { ExtractFormData } from "../../../utils/functions";
import Search from "../../components/Search/index";
import CardPost from "../../components/card/card";
import MainLayout from "../../components/layout/MainLayout";
import NoContent from "./components/noContent";
import PostForm from "./components/postForm";

const Blog = ({ ...props }) => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [viewForm, setViewForm] = useState(false);

  useEffect(() => {
    if (props.login == false) navigate("/login");
  }, [props.login]);

  useEffect(() => {
    filter();
  }, []);

  const savePost = async (event) => {
    try {
      event.preventDefault();
      const data = ExtractFormData(event);
      data.userId = props.user.id;
      console.log("🚀 ~ savePost ~ data:", data);
      await WebApiPost.createPost(data);
      setViewForm(false);
    } catch (error) {
      console.log(error);
    } finally {
      filter();
    }
  };

  const dataForm = (event) => {
    event.preventDefault();
    const data = ExtractFormData(event);
    filter(data);
  };

  const filter = async (data) => {
    try {
      const { userId, title, content } = data || {};
      const params = [];

      if (userId && userId !== "Todos") params.push(`userId=${userId}`);
      if (title && title.trim() !== "") params.push(`title=${title}`);
      if (content && content.trim() !== "") params.push(`content=${content}`);

      let query = "";
      if (params.length > 0) {
        query = "?" + params.join("&");
      }
      console.log("🚀 ~ filter ~ data:", query);
      const response = await WebApiPost.filterPosts(query);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <Search setViewForm={setViewForm} filter={dataForm} />
      {viewForm && <PostForm savePost={savePost} setViewForm={setViewForm} />}
      <div className="grid grid-cols-1 text-gray-50 gap-4 w-3/4">
        {posts.length > 0 ? <CardPost posts={posts} /> : <NoContent />}
      </div>
    </MainLayout>
  );
};

const mapState = (state) => {
  return {
    login: state.globalStore.login,
    user: state.globalStore.user,
  };
};

export default connect(mapState)(Blog);
