import React from "react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

export default function Header({
  userArr,
  setUserArr,
  loginUserID,
  setLoginUserID,
}) {
  return (
    <div style={styles.test}>
      <div style={styles.test1}>
        <div style={styles.logo}>어떤 것을 만들까~</div>

        {loginUserID === "" ? (
          <LogIn
            userArr={userArr}
            setUserArr={setUserArr}
            setLoginUserID={setLoginUserID}></LogIn>
        ) : (
          <LogOut
            loginUserID={loginUserID}
            setLoginUserID={setLoginUserID}></LogOut>
        )}
      </div>
    </div>
  );
}

const styles = {
  test: {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  test1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    width: "100%",
  },
  logo: {
    width: "fit-content",
  },
};
