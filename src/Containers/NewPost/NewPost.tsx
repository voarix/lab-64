import PostForm from "../../components/PostForm.tsx";
import { IPostForm } from "../../types";

const NewPost = () => {
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const onSubmitAddNewPost = async (post: IPostForm) => {
    console.log(post);
  };

  return (
    <div>
      <PostForm onSubmitAdd={onSubmitAddNewPost} />
    </div>
  );
};

export default NewPost;