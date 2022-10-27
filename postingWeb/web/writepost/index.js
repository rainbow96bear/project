document.getElementById("cancleBtn").onclick = async function () {
  document.getElementById("title_input").value = document.getElementById(
    "content_input"
  ).value = "";
  history.back();
};

document.getElementById("completeBtn").onclick = async function () {
  if (document.getElementById("title_input").value == "") {
    document.getElementById("title_input").focus;
    alert("제목을 입력하세요.");
    return;
  }
  if (document.getElementById("content_input").value == "") {
    document.getElementById("content_input").focus();
    alert("내용을 입력하세요.");
    return;
  }
  const data = await axios.post("/writepost/addPost", {
    title: document.getElementById("title_input").value,
    content: document.getElementById("content_input").value,
  });
  switch (data.data.status) {
    case 200:
      alert("글 등록 완료");
      break;
    case 400:
      alert("로그인 시간이 만료되셨습니다.\n다시 로그인 해주세요.");
  }
  history.back();
};
