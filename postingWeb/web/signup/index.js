document.getElementById("signUpCancleBtn").onclick = async function (e) {
  e.preventDefault();

  document.getElementById("nameInput").value =
    document.getElementById("birthInput").value =
    document.getElementById("newIdInput").value =
    document.getElementById("newPasswordInput").value =
      "";
  history.back();
};
document.getElementById("signUpFinishBtn").onclick = async function (e) {
  e.preventDefault();

  if (document.getElementById("nameInput").value == "") {
    document.getElementById("nameInput").focus();
    alert("이름을 입력하세요.");
    return;
  }
  if (document.getElementById("birthInput").value == "") {
    document.getElementById("birthInput").focus();
    alert("생일을 입력하세요.");
    return;
  }
  if (document.getElementById("newIdInput").value == "") {
    document.getElementById("newIdInput").focus();
    alert("아이디를 입력하세요.");
    return;
  }
  if (document.getElementById("newPasswordInput").value == "") {
    document.getElementById("newPasswordInput").focus();
    alert("비밀번호를 입력하세요.");
    return;
  }
  const data = await axios.post("/signup/signup", {
    name: document.getElementById("nameInput").value,
    birth: document.getElementById("birthInput").value,
    id: document.getElementById("newIdInput").value,
    pw: document.getElementById("newPasswordInput").value,
  });
  switch (data.data.status) {
    case 200:
      document.getElementById("nameInput").value =
        document.getElementById("birthInput").value =
        document.getElementById("newIdInput").value =
        document.getElementById("newPasswordInput").value =
          "";
      alert("가입 완료");
      history.back();

      break;
    case 400:
      alert("이미 사용중인 아이디 입니다.");
      break;
  }
};
