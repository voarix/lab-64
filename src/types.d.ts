export interface IPost {
  id: string;
  title: string;
  message: string;
  time: string;
}

export interface IPostForm {
  title: string;
  message: string;
  time: string;
}

export interface IPostApi {
  [id: string]: IPostForm;
}