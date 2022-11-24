import React from "react";

export default function LogOut({ loginUserID, setLoginUserID }) {
  function logOut() {
    setLoginUserID("");
  }
  return (
    <div style={styles.base}>
      <div>{loginUserID}님 반갑습니다.</div>
      <button style={styles.btn} onClick={logOut}>
        로그아웃
      </button>
    </div>
  );
}
const styles = {
  base: { display: "flex" },
  btn: {
    width: "fit-content",
    height: "fit-content",
  },
};
