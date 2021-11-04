import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const nextPage = () => {
    setPage((oldPage) => {
      let page = oldPage + 1;
      if (page > data.length - 1) page = 0;
      return page;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let page = oldPage - 1;
      if (page < 0) page = data.length - 1;
      return page;
    });
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              {"<<<"}
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${page === index && "active-btn"}`}
                  data-numy={index}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              {">>>"}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
