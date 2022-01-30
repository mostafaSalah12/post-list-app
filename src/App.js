import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPost from "./components/edit-post";
import NotFound from "./components/not-found-page";
import Posts from "./components/posts-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='*' element={<NotFound />} />
        <Route path="/posts-list" element={<Posts />} />
        <Route path="/posts-list/edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
