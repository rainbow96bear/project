import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

export default function Main({ post, loginUserID }) {
  return (
    <div style={styles.base}>
      <div style={styles.boardFrame}>
        {post.map((item, index) => {
          return (
            <div key={index} style={styles.boardBox}>
              <Link
                to={"board?" + queryString.stringify({ title: item.title })}>
                <div style={styles.titleBox}>{item.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
      {loginUserID !== "" ? (
        <Link to={"addpost"}>
          <button style={styles.btn}>글 쓰기</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

const styles = {
  base: {
    maxWidth: "100vw",
    minHeight: "calc(100vh - 50px)",
    height: "fit-content",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  boardFrame: {
    width: "95vw",
    padding: "10px",
    flexDirection: "column",
  },
  boardBox: {
    width: "95vw",
    border: "1px solid white",
    borderRadius: "30px",
    margin: "15px 0",
  },
  titleBox: { display: "flex", margin: "20px" },
  btn: {
    position: "absolute",
    right: 50,
    bottom: 50,
  },
};
