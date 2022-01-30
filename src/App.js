import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPost from "./components/edit-post";
import Posts from "./components/posts-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts-app" element={<Posts />} />
        <Route path="/posts-app/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
