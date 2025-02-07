import React, { useState } from "react";
import { IPostForm } from "../types";

interface Props {
  isEdit?: boolean;
  onSubmitAdd: (post: IPostForm) => void;
}

const initialForm = {
  title: '',
  message: '',
};

const PostForm : React.FC<Props>  = ({ isEdit = false, onSubmitAdd}) => {

  const [form, setForm] = useState(initialForm);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitAdd({
      ...form,
      time: new Date().toLocaleString(),
    });
    setForm(initialForm);
  };

  const onChangeInputMessage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <>
      <>
        <div className="mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="mb-4">{isEdit ? 'Edit' : 'Add new'} post</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="title"
                    id="title"
                    value={form.title}
                    onChange={onChangeInputMessage}
                  />
                </div>
                <label htmlFor="message">Description</label>
                <textarea
                  className="form-control mt-2"
                  rows={5}
                  required
                  value={form.message}
                  name="message"
                  id="message"
                  onChange={onChangeInputMessage}></textarea>
                <button type="submit" className="btn btn-primary mt-3">
                  {isEdit ? 'Edit' : 'Add'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default PostForm;