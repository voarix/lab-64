import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axiosApi from "../../axiosApi.ts";
import { IPostForm } from "../../types";
import Loader from "../../UI/Loader.tsx";
import { toast } from "react-toastify";

const PostDetails = () => {
  const [loading, setLoading] = useState(false);
  const [postDetails, setPostDetails] = useState<IPostForm>();
  const {idPost} = useParams();
  const navigate = useNavigate();

  const fetchData = useCallback( async () => {
    try{
      setLoading(true);
      const response = await axiosApi<IPostForm>(`posts/${idPost}.json`);
      setPostDetails(response.data);
    } catch(error) {
      console.error(error);
    } finally {
      setLoading(false );
    }
  }, [idPost]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);


  const onDeletePost = async () => {
    try {
      await axiosApi.delete(`posts/${idPost}.json`);
      toast.success("Post was successfully deleted");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete post");
    }
  };

  let content = null;
  if (loading) content = (<Loader/>);
  if (!loading && !postDetails) {
    content = <p>Post details not found</p>;
  }

  if(!loading && postDetails) {
    content = (
      <>
        <div className="card mt-1">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between align-items-center">
              <span>{postDetails.title}</span>
              <small className="text-muted">
                {postDetails.time}
              </small>
            </h5>
            <hr/>
            <p className="fs-4">{postDetails.message}</p>
            <button className='btn btn-primary' onClick={() => navigate(`/posts/${idPost}/edit`)}>Edit</button>
            <button className='btn btn-primary ms-4' onClick={onDeletePost}>Delete</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>{content}</h1>
    </>
  );

};

export default PostDetails;