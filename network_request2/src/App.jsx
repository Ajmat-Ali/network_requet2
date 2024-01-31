import { useState, useEffect } from "react";
import "./App.css";
import PostItem from "./components/PostItem";

function App() {
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  async function fetchData(page) {
    try {
      setLoading(true);
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      let finalData = await res.json();

      setPost(finalData);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <div>
      {isLoading && (
        <div style={{margin:"auto",width:"50%"}}>
          <p
            style={{
              position: "fixed",
              top: "250px",
              // left: "250px",
              backgroundColor: "white",
              color: "green",
              paddingLeft: "20px",
              paddingRight: "20px",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            Loading...
          </p>
        </div>
      )}
      {error && (
        <div>
          <p>{error.message}</p>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          padding: "20px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <button
          onClick={() => {
            page > 1 ? setPage(page - 1) : null;
          }}
        >
          Previous
        </button>
        <p style={{ color: "royalblue" }}>Page: {page}</p>
        <button
          onClick={() => {
            page > 9 ? "" : setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>

      {post.map((item) => (
        <div key={item.id}>
          <PostItem item={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
