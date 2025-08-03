export default function PostCard({ title, body, tags, reactions, views }) {
  return (
    <div className="card-detail">
      <h4>{title}</h4>
      <p>{body}</p>
      <span className="tag-container">
        {tags.map((tagItem, index) => (
          <p key={index} className="tag-item">
            #{tagItem}&nbsp;
          </p>
        ))}
      </span>
      <div className="post-analytics">
        <p>
          👍 {reactions.likes} | 👎{reactions.dislikes} | 👁️ {views}
        </p>
      </div>
    </div>
  );
}
