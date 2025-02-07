import React from 'react';

interface PostItemProps {
  time: string;
  title: string;
}

const PostItem: React.FC<PostItemProps> = ({ time, title}) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <small className="text-muted">Created on: {time}</small>
        <h2 className="card-title mt-2">{title}</h2>
        <button
          className="btn btn-primary mt-3"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default PostItem;