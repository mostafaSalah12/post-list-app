// import React, { useState, useEffect } from "react";
// import "../components/style.css";
// import Posts from "../components/posts";
// import Pagination from "../components/Pagination";
// import { useSelector, useDispatch } from "react-redux";
// import { getPostsStart } from "../redux/actions/allPosts";

// function PostsList() {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state.AllPosts);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(10);
//   const [currentPosts, setCurrentPosts] = useState([]);

//   const indexOfLastPost = currentPage * postsPerPage;

//   const indexOfFirstPost = indexOfLastPost - postsPerPage;

//   useEffect(() => {
//     dispatch(getPostsStart());
//   }, [dispatch]);
//   useEffect(() => {
//     setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
//   }, []);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const [searchValue, setSearchValue] = useState("");

//   const handleSearch = (e) => {
//     setSearchValue(e.target.value);
//     //
//     const filtered = posts.filter((post) =>
//       post.title.includes(searchValue)
//     );
//   };
//   return (
//     <div className="container">
//       <h1 className="text-primary mn-3">My Posts</h1>
//       <input type="text" value={searchValue} onChange={handleSearch} />
//       <Posts posts={currentPosts} loading={loading} />
//       <Pagination
//         paginate={paginate}
//         postsPerPage={postsPerPage}
//         totalPosts={posts.length}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// }
// export default PostsList;
