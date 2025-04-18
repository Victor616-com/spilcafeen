import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function UpdatePage() {
  const [post, setPost] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const url = `https://spilcafeen-c14e8-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const data = await response.json();
      setPost(data);
    }

    getPost();
  }, [url]);

  async function updatePost(postToUpdate) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(postToUpdate),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Post updated: ", data);
      navigate("/spilcafeen/");
    } else {
      console.log("Sorry, something went wrong");
    }
  }

  async function deletePost() {
    const confirmDelete = window.confirm(
      `Do you want to delete post, ${post.title}?`
    );
    if (confirmDelete) {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Post deleted");
        navigate("/spilcafeen/");
      } else {
        console.log("Sorry, something went wrong");
      }
    }
  }

  return (
    <section className="page">
      <h1 className="update-title">Update Board Game Entry</h1>
      <PostForm post={post} savePost={updatePost} />
      <div className="delete-container">
        <button className="deleteBtn" onClick={deletePost}>
          Delete Entry
        </button>
      </div>
    </section>
  );
}
