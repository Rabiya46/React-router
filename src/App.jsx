import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import PostInfo from "./components/PostInfo";
import Posts from "./components/Posts";
import UserInfo from "./components/UserInfo";
import CommentInfo from "./components/CommentInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="post" element={<Posts />} />
            <Route path="comments" element={<Comments />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="post/:id" element={<PostInfo />} />
          <Route path="users/:id" element={<UserInfo />} />
          <Route path="comments/:id" element={<CommentInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
