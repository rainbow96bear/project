document.getElementById("login_btn").onclick = async function (e) {
  e.preventDefault();

  const data = await axios.post("/api/user/login", {
    id: document.getElementById("id_input").value,
    pw: document.getElementById("pw_input").value,
  });
  switch (data.data.status) {
    case 200:
      alert("로그인 성공");
      document.getElementById("id_input").value = document.getElementById(
        "pw_input"
      ).value = "";
      document.getElementById(
        "login_id_span"
      ).innerText = `${data.data.id}님 반갑습니다.`;
      document.getElementById("sign_box").classList.add("hide");
      document.getElementById("signout_box").classList.remove("hide");
      document.getElementById("addPost_box").classList.remove("hide");
      break;
    case 400:
      alert("비밀번호가 틀렸습니다.");
      break;
    case 401:
      alert("아이디가 없습니다.");
      break;
  }
};

document.getElementById("signup_btn").onclick = async function () {
  location.href = "/signup";
  document.getElementById("id_input").value = document.getElementById(
    "pw_input"
  ).value = "";
};
var deleteCookie = function (name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};
document.getElementById("logout_btn").onclick = async function () {
  document.getElementById("login_id_span").innerText = "";
  document.getElementById("sign_box").classList.remove("hide");
  document.getElementById("signout_box").classList.add("hide");
  document.getElementById("addPost_box").classList.add("hide");
  deleteCookie("accessCookie");
};
document.getElementById("addPost_btn").onclick = async function () {
  location.href = "./writepost";
};
document.getElementById("cheating_btn").onclick = async function () {
  location.href = "./cheating";
};

async function getPost() {
  const data = await axios.post("/api/board/getPost", {});
  document.getElementById("post_box").innerHTML = "";

  let check = 0;
  await data.data.data.forEach((item) => {
    const tempDiv = document.createElement("div");
    const tempTitle = document.createElement("div");
    const tempWriter = document.createElement("div");
    const tempDate = document.createElement("div");

    tempTitle.innerText = item.title;
    tempTitle.classList.add("titleDiv");
    tempWriter.innerText = item.uploader;
    tempWriter.classList.add("info");
    tempDate.innerText = item.uptime;
    tempDate.classList.add("info");
    tempDiv.append(tempTitle);
    tempDiv.append(tempWriter);
    tempDiv.append(tempDate);
    tempDiv.classList.add("title_box");
    tempDiv.id = check++;
    // tempDiv.onclick = ()=>{}
    document.getElementById("post_box").append(tempDiv);
  });
}

async function checkToken() {
  const data = await axios.post("/api/user/checkToken", {});
  switch (data.data.status) {
    case 200:
      document.getElementById("id_input").value = document.getElementById(
        "pw_input"
      ).value = "";
      document.getElementById(
        "login_id_span"
      ).innerText = `${data.data.id}님 반갑습니다.`;
      document.getElementById("sign_box").classList.add("hide");
      document.getElementById("signout_box").classList.remove("hide");
      document.getElementById("addPost_box").classList.remove("hide");
      break;
  }
}
window.addEventListener("focus", checkToken(), false);

window.addEventListener("focus", getPost(), false);
