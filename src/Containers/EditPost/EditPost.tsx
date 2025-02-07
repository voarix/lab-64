import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPostForm } from "../../types";
import axiosApi from "../../axiosApi.ts";
import { toast } from "react-toastify";
import PostForm from "../../components/PostForm.tsx";
import Loader from "../../UI/Loader.tsx";

const EditPost = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {idPost} = useParams();

  const onSubmitAddNewPost = async (post: IPostForm) => {
    try {
      setLoading(true);
      await axiosApi.put(`posts/${idPost}.json`, post);
      toast.success("Post was successfully edited");
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    console.log(post);
  };

  let form = (<PostForm onSubmitAdd={onSubmitAddNewPost} isEdit idPost={idPost} />);

  if (loading) form = <Loader/>;

  return (
    <div>
      {form}
    </div>
  );
};

export default EditPost;