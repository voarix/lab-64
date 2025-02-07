import React from 'react';
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../types";

interface PostItemProps {
 post: IPost;
}

const PostItem: React.FC<PostItemProps> = ({post}) => {
  const navigate = useNavigate();

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <small className="text-muted">Created on: {post.time}</small>
        <h2 className="card-title mt-2">{post.title}</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate(`/posts/${post.id}`)}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default PostItem;