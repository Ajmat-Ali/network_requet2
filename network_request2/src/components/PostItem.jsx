function PostItem({ item }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        width: "50%",
        margin: "auto",
        marginTop: "20px",
        padding: "20px",
      }}
    >
      <h3>ID: {item.id}</h3>
      <div>
        <p style={{ color: "teal" }}>Title</p>
        <p style={{ fontSize: "14px", letterSpacing: ".5px" }}> {item.title}</p>
      </div>
      <div>
        <p style={{ color: "teal" }}>Description</p>
        <p style={{ fontSize: "14px", letterSpacing: ".5px" }}>{item.body}</p>
      </div>
      <p>User ID: {item.userId}</p>
    </div>
  );
}
export default PostItem;
