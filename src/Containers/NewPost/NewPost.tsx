import PostForm from "../../components/PostForm.tsx";
import { IPostForm } from "../../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../UI/Loader.tsx";
import axiosApi from "../../axiosApi.ts";
import { toast } from "react-toastify";

const NewPost = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitAddNewPost = async (post: IPostForm) => {
    try {
      setLoading(true);
      await axiosApi.post('posts.json', post);
      toast.success("Post was successfully added");
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    console.log(post);
  };

  let form = (<PostForm onSubmitAdd={onSubmitAddNewPost}/>);

  if (loading) form = <Loader/>;

  return (
    <div>
      {form}
    </div>
  );
};

export default NewPost;