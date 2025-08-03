import PostCard from "./PostCard";
import "./styles.css";
import postData from "./postData";

export default function BlogPosts() {
  return (
    <div>
      <h2>Blog Posts </h2>
      <div className="post-container">
        {postData.map((item) => (
          <PostCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
