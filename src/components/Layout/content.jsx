import { useEffect, useState } from "react";
import WebApiPost from "../../../api/posts";
import CardPost from "../card/card";

const Content = () => {
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

  // const posts = [
  //   {
  //     title: "Post 1",
  //     user: "Jasson",
  //     date: "2014-12-11",
  //     content:
  //       "Lorem ipsum dolor sit amet. Vel architecto atque est deserunt maiores aut numquam saepe et fugit beatae eum facilis consequatur ea veritatis magni in unde culpa. Est amet molestiae nam quia alias et aliquam quibusdam. Qui atque fugiat et praesentium Quis qui consequatur enim quo omnis laborum. Est deserunt nulla qui consequatur galisum ab accusamus commodi.Qui voluptatem velit ex voluptas debitis non laudantium tempora in tempore animi aut eaque dolores. Et molestiae odit id voluptatem praesentium sed alias incidunt rem accusamus quod. Eos velit dolorem hic nisi enim qui rerum ullam ut necessitatibus recusandae ea possimus neque. Eos incidunt amet eum voluptatem libero est sequi dolor aut accusamus incidunt sed accusamus vitae sit saepe eligendi sed voluptates harum. Eum dolor facilis ut dolorem beatae sit molestiae galisum. Non culpa possimus ab sapiente natus ut tempore tempora. ",
  //   },
  //   {
  //     title: "Post 2",
  //     user: "Carolina",
  //     date: "2014-12-11",
  //     content:
  //       "Lorem ipsum dolor sit amet. Vel architecto atque est deserunt maiores aut numquam saepe et fugit beatae eum facilis consequatur ea veritatis magni in unde culpa. Est amet molestiae nam quia alias et aliquam quibusdam. Qui atque fugiat et praesentium Quis qui consequatur enim quo omnis laborum. Est deserunt nulla qui consequatur galisum ab accusamus commodi.Qui voluptatem velit ex voluptas debitis non laudantium tempora in tempore animi aut eaque dolores. Et molestiae odit id voluptatem praesentium sed alias incidunt rem accusamus quod. Eos velit dolorem hic nisi enim qui rerum ullam ut necessitatibus recusandae ea possimus neque. Eos incidunt amet eum voluptatem libero est sequi dolor aut accusamus incidunt sed accusamus vitae sit saepe eligendi sed voluptates harum. Eum dolor facilis ut dolorem beatae sit molestiae galisum. Non culpa possimus ab sapiente natus ut tempore tempora. ",
  //   },
  //   {
  //     title: "Post 3",
  //     user: "Tiana",
  //     date: "2014-12-11",
  //     content:
  //       "Lorem ipsum dolor sit amet. Vel architecto atque est deserunt maiores aut numquam saepe et fugit beatae eum facilis consequatur ea veritatis magni in unde culpa. Est amet molestiae nam quia alias et aliquam quibusdam. Qui atque fugiat et praesentium Quis qui consequatur enim quo omnis laborum. Est deserunt nulla qui consequatur galisum ab accusamus commodi.Qui voluptatem velit ex voluptas debitis non laudantium tempora in tempore animi aut eaque dolores. Et molestiae odit id voluptatem praesentium sed alias incidunt rem accusamus quod. Eos velit dolorem hic nisi enim qui rerum ullam ut necessitatibus recusandae ea possimus neque. Eos incidunt amet eum voluptatem libero est sequi dolor aut accusamus incidunt sed accusamus vitae sit saepe eligendi sed voluptates harum. Eum dolor facilis ut dolorem beatae sit molestiae galisum. Non culpa possimus ab sapiente natus ut tempore tempora. ",
  //   },
  // ];
  return (
    <div className="w-full grid grid-cols-1 mt-10 text-gray-50 gap-4">
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
  );
};

export default Content;
