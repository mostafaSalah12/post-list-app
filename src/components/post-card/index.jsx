import React from "react";
import editIcon from "../../images/edit_black_24dp.svg";
import deleteIcon from "../../images/delete_black_24dp.svg";
import { useNavigate } from "react-router-dom";
import {
  deletePostAction,
  retrievePostEditAction,
} from "../../redux/actions/posts-actions";

import Swal from "sweetalert2";

const PostCard = (post) => {
  const { id, title, body } = post;
  let navigate = useNavigate();

  const handleDeletePost = (id) => {
    // ask the user for confirmation
    Swal.fire({
      title: "Are you sure you want to delete the post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#62a086",
      cancelButtonColor: "#f66b61",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      result.value && deletePostAction(id);
    });
  };
  // function that redirects automátically, is better than 'Link'
  const redirectionEdition = (post) => {
    retrievePostEditAction(post);
    navigate(`posts/edit/${id}`);
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{body}</td>
      <td className="action">
        <img
          src={editIcon}
          alt=""
          className="action__icon edit-icon"
          onClick={() => redirectionEdition(post)}
        />

        <img
          src={deleteIcon}
          onClick={() => handleDeletePost(id)}
          alt=""
          className="action__icon delete-icon"
        />
      </td>
    </tr>
  );
};
export default PostCard;
