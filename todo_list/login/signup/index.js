let checkEmail = 0;
let checkId = 0;
document.getElementById("checkEmail").onclick = async function (e) {
  e.preventDefault();
  if (document.getElementById("emailInput").value == "") {
    alert("이메일을 입력하세요.");
  } else {
    const data = await axios.post("/signup/user/checkEmail", {
      email: document.getElementById("emailInput").value,
    });
    if (data.data.status == 200) {
      alert("가입 가능한 이메일입니다.");
      // 확인을 해서 가입시 확인 눌렀는지 체크
    }
    if (data.data.status == 400) {
      // 확인을 해서 가입시 확인 눌렀는지 체크
      alert("이미 가입한 이메일입니다.");
    }
  }
};

document.getElementById("checkId").onclick = async function (e) {
  e.preventDefault();
  if (document.getElementById("idInput").value == "") {
    alert("아이디를 입력하세요.");
  } else {
    const data = await axios.post("/signup/user/checkId", {
      id: document.getElementById("idInput").value,
    });
    if (data.data.status == 200) {
      // 확인을 해서 가입시 확인 눌렀는지 체크
      alert("가입 가능한 아이디입니다.");
    }
    if (data.data.status == 400) {
      // 확인을 해서 가입시 확인 눌렀는지 체크
      alert("이미 사용중인 아이디입니다.");
    }
  }
};

document.getElementById("cancleBtn").onclick = function (e) {
  e.preventDefault();
  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("idInput").value = "";
  document.getElementById("pwInput").value = "";
  history.back();
};

document.getElementById("completeBtn").onclick = async function (e) {
  e.preventDefault();
  if (document.getElementById("nameInput").value == "") {
    document.getElementById("nameInput").focus();
    alert("이름을 입력하세요.");
    return;
  }
  if (document.getElementById("emailInput").value == "") {
    document.getElementById("emailInput").focus();
    alert("이메일을 입력하세요.");
    return;
  }
  if (document.getElementById("idInput").value == "") {
    document.getElementById("idInput").focus();
    alert("아이디를 입력하세요.");
    return;
  }
  if (document.getElementById("pwInput").value == "") {
    document.getElementById("pwInput").focus();
    alert("비밀번호를 입력하세요.");
    return;
  }
  //   중복 확인을 했는지 확인하기
  const data = await axios.post("/signup/user/signUp", {
    name: document.getElementById("nameInput").value,
    email: document.getElementById("emailInput").value,
    id: document.getElementById("idInput").value,
    pw: document.getElementById("pwInput").value,
  });
  if (data.data.status == 200) {
    alert("가입 완료");
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("idInput").value = "";
    document.getElementById("pwInput").value = "";
    history.back();
  }
};
