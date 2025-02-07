import { useCallback, useEffect, useState } from "react";
import { IPost, IPostApi } from "../../types";
import axiosApi from "../../axiosApi.ts";
import Loader from "../../UI/Loader.tsx";
import PostItem from "./components/PostItem.tsx";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosApi<IPostApi>("posts.json");
      setLoading(true);

      if (response.data) {
        const postsObject = response.data;
        const postsObjectKeys = Object.keys(postsObject);
        const postsArray = postsObjectKeys.map(key => {
          return {
            id: key,
            ...postsObject[key],
          };
        });
        setPosts(postsArray);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  let content = null;

  if (loading) content = (<Loader/>);

  if (!loading) {
    if (posts.length > 0) {
      content = (
        <>
          {posts.map((post) => (
            <div key={post.id}>
              <PostItem post={post} />
            </div>
          ))}
        </>
      );
    } else {
      content = (<p>No posts yet</p>);
    }
  }


  return (
    <div>
      {content}
    </div>
  );
};

export default Home;