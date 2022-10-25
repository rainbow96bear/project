document.getElementById("loginBtn").onclick = async function (e) {
  e.preventDefault();
  const data = await axios.post("/api/user/login", {
    id: document.getElementById("idInput").value,
    pw: document.getElementById("pwInput").value,
  });
  switch (data.data.status) {
    case 200:
      alert("로그인 성공");
      location.href = "/main";
      break;
    case 400:
      alert("비밀번호가 틀렸습니다.");
      break;
    case 401:
      alert("아이디가 틀렸습니다.");
      break;
  }
};
document.getElementById("signupBtn").onclick = function () {
  location.href = "/signup";
};
