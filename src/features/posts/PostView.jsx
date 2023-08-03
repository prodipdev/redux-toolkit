import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts View</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post) => (
            <article key={post.title}>
              <h5>{post.title}</h5> <p>{post.body}</p>
            </article>
          ))}
      </section>
    </div>
  );
};

export default PostView;
