const text_input = document.getElementById("text_input");
const sendBtn = document.getElementById("sendBtn");
const cheat_container = document.getElementById("cheat_container");
const idBox = document.getElementById("idBox");
async function getUserId() {
  const data = await axios.post("/cheating", {});

  return data.data.info.id;
}
getUserId();
function socket() {
  const socket = io();
  console.log(userId);
  socket.emit("join", { id: userId });
  socket.on("join", (data) => {
    const tempSpan = document.createElement("span");
    tempSpan.innerText = data.id + "님이 참가하였습니다.";
    cheat_container.append(tempSpan);
  });
  socket.on("message", (data) => {
    const tempDiv = document.createElement("div");
    const tempIdSpan = document.createElement("span");
    const tempTextSpan = document.createElement("span");
    tempIdSpan.innerText = data.id + " : ";
    tempDiv.append(tempIdSpan);
    tempTextSpan.innerText = data.text;
    tempDiv.append(tempTextSpan);
    cheat_container.append(tempDiv);
  });
  sendBtn.onclick = () => {
    if (text_input.value == "") {
      alert("채팅을 입력해주세요.");
    } else {
      // 유저 아이디 받아오기 cookie의 정보를 사용하자
      socket.emit("message", { id: userId, text: text_input.value });
      text_input.value = "";
    }
  };
}
socket();
