import "./App.css";
import ToolBar from "./components/ToolBar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";
import About from "./Containers/About/About.tsx";
import Contacts from "./Containers/Contacts/Contacts.tsx";
import NewPost from "./Containers/NewPost/NewPost.tsx";
import PostDetails from "./Containers/PostDetails/PostDetails.tsx";
import EditPost from "./Containers/EditPost/EditPost.tsx";

const App = () => {

  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Home/>}/>
          <Route path="/posts/new-post" element={<NewPost/>}/>
          <Route path={"/posts/:idPost"} element={<PostDetails/>}/>
          <Route path={'/posts/:idPost/edit'} element={<EditPost/>}/>
          <Route path="/posts/about" element={<About/>}/>
          <Route path="/posts/contacts" element={<Contacts/>}/>
          <Route path="*" element={<h1>No found page</h1>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
