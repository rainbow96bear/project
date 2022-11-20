const mainScreen = document.getElementById("mainScreen");
const taskScreen = document.getElementById("taskScreen");
const input_TaskTitleBox = document.getElementById("input_TaskTitleBox");
const taskListArea = document.getElementById("taskListArea");
const createTaskBtnArea = document.getElementById("createTaskBtnArea");
const taskFunctionBtnArea = document.getElementById("taskFunctionBtnArea");
const taskModifyBtnArea = document.getElementById("taskModifyBtnArea");
const taskTitleBox = document.getElementById("taskTitleBox");
const input_detailTask = document.getElementById("input_detailTask");
const detailTaskList = document.getElementById("detailTaskList");
const addDetailTaskArea = document.getElementById("addDetailTaskArea");
const characterContainer = document.getElementById("characterContainer");
const preventScreen = document.getElementById("preventScreen");
const menuBar = document.getElementById("menuBar");
const characterScreen = document.getElementById("characterScreen");
const characterExpBar = document.getElementById("characterExpBar");
const level = document.getElementById("level");
const characterImg = document.getElementById("characterImg");
const speechBubble = document.getElementById("speechBubble");
const mainCharaterImg = document.getElementById("mainCharaterImg");
const speechBubbleContainer = document.getElementById("speechBubbleContainer");
const clearTaskScreen = document.getElementById("clearTaskScreen");
const clearTaskList = document.getElementById("clearTaskList");
const selectClearTaskScreen = document.getElementById("selectClearTaskScreen");
const selectClearTaskTitle = document.getElementById("selectClearTaskTitle");
const selectClearTaskDetailTasks = document.getElementById(
  "selectClearTaskDetailTasks"
);
let nowDate = new Date();
let nowMonth = nowDate.getMonth() + 1;
let nowDay = nowDate.getDate();
let checkModify = 0;
let checkNewDetailTaskNum = 0;
let progressValue = 0;
let saveTaskList = [];
let taskArr = [];
function todolistStart() {
  if (JSON.parse(localStorage.getItem("clearTasks")) == null) {
    localStorage.setItem("clearTasks", JSON.stringify([]));
  }
  if (JSON.parse(localStorage.getItem("saveTaskList")) == null) {
    localStorage.setItem("saveTaskList", JSON.stringify([]));
  }
  if (JSON.parse(localStorage.getItem("lastTasks")) != null) {
    let tempTasksArr = JSON.parse(localStorage.getItem("lastTasks"));
    tempTasksArr.forEach((item) => {
      taskArr.push(item);
      nowTaskIdx = taskArr.length - 1;
      makeTaskList(taskArr, nowTaskIdx, "loadTask");
    });
  }
  if (JSON.parse(localStorage.getItem("characterState")) == null) {
    let createCharacter = [1, 0, 3];
    localStorage.setItem("characterState", JSON.stringify(createCharacter));
  } else {
    let tempState = JSON.parse(localStorage.getItem("characterState"));
    mycharacter.level = tempState[0];
    mycharacter.exp = tempState[1];
    mycharacter.maxExp = tempState[2];
  }
}
class Task {
  constructor() {
    this.taskTitleBox = "";
    this.detailTask = [];
    this.check = [];
  }
}
let clearTaskArr = [];
let seletctLoadTask = "";
let nowTaskIdx = 0;
let tempDetailTask = [];
class characterClass {
  constructor() {
    this.name = "무지개곰";
    this.level = 1;
    this.exp = 0;
    this.maxExp = 3;
    this.script = [
      `오늘은\n${nowMonth}월${nowDay}일입니다.`,
      "★이몸 등장★",
      "안녕",
      "안녕하세요.",
      "아~\n하기싫다~",
      "오늘 점심\n뭐 먹지?",
    ];
    this.checkAutoSpeak = 0;
    this.moveingTerm = 2;
    this.startPos = 0;
    this.endPos = 0;
  }
  speak() {
    setInterval(() => {
      this.checkAutoSpeak = 0;
      speechBubbleContainer.classList.remove("hide");
      let num = parseInt(Math.random() * this.script.length - 1) + 1;
      speechBubble.innerText = this.script[num];
      this.speechBubbleHide();
    }, 10000);
  }
  dateSpeak() {
    speechBubbleContainer.classList.remove("hide");
    speechBubble.innerText = this.script[0];
    this.speechBubbleHide();
  }
  speechBubbleHide() {
    setTimeout(() => {
      speechBubbleContainer.classList.add("hide");
    }, 3000);
  }
  autoMoving() {
    setInterval(() => {
      this.endPos = this.startPos + parseInt(Math.random() * 501) - 250;
      if (this.endPos < -20) {
        this.endPos *= -1;
      } else if (this.endPos > mainScreen.offsetWidth - 150) {
        this.endPos = mainScreen.offsetWidth - 150;
      }
      if (this.startPos < this.endPos) {
        mainCharaterImg.src = "./img/characterImgRight.png";
      } else if (this.startPos > this.endPos) {
        mainCharaterImg.src = "./img/characterImg.png";
      }
      characterContainer.animate(
        {
          transform: [
            `translateX(${this.startPos}px)`,
            `translateX(${this.endPos}px)`,
          ],
        },
        {
          duration: 1000,
          fill: "forwards",
          easing: "ease",
        }
      );
      this.startPos = this.endPos;
    }, this.moveingTerm * 1000);
  }
}
let mycharacter = new characterClass();
mycharacter.autoMoving();
const character = document.getElementById("character");
let speakStart = mycharacter.speak();
character.onclick = () => {
  if (mycharacter.checkAutoSpeak == 0) {
    mycharacter.checkAutoSpeak = 1;
    clearInterval(speakStart);
    mycharacter.dateSpeak();
    speakStart;
  }
};
function addTask() {
  input_TaskTitleBox.value = "";
  taskArr.push(new Task());
  nowTaskIdx = taskArr.length - 1;
  taskScreen.classList.remove("hide");
  input_TaskTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("hide");
  taskTitleBox.classList.remove("textCenter");
  createTaskBtnArea.classList.remove("hide");
  taskFunctionBtnArea.classList.add("hide");
  taskModifyBtnArea.classList.add("hide");
  addDetailTaskArea.classList.remove("hide");
  addDetailTaskArea.classList.add("alignItemsCenter");
  preventScreen.classList.remove("hide");
}
function createTask() {
  if (input_TaskTitleBox.value == "") {
    alert("할 일의 제목을 입력하세요.");
  } else {
    makeTaskList(taskArr, nowTaskIdx, "newTask");
    taskScreen.classList.add("hide");
    preventScreen.classList.add("hide");
    detailTaskList.innerHTML = "";
    input_TaskTitleBox.value = "";
    input_detailTask.value = "";
    progressValue = 0;
  }
}
function makeTaskList(arr, idx, what) {
  const newBtn = document.createElement("button");
  const newProgress = document.createElement("progress");
  const newSpan = document.createElement("span");
  newProgress.id = `taskProgress_${idx}`;
  newBtn.id = `taskTitleID_${idx}`;
  newBtn.style.boxShadow = "2px 2px 2px 2px gray";
  newBtn.appendChild(newSpan);
  newBtn.onclick = () => {
    nowTaskIdx = idx;
    modifyScreenOn(arr, idx);
  };
  if (what == "newTask") {
    newSpan.innerText = input_TaskTitleBox.value;
    arr[idx].taskTitleBox = input_TaskTitleBox.value;
    for (let i = 0; i < detailTaskList.childElementCount; i++) {
      arr[idx].detailTask.push(detailTaskList.children[i].children[1].value);
      if (detailTaskList.children[i].children[0].checked) {
        progressValue++;
        arr[idx].check.push(1);
      } else {
        arr[idx].check.push(0);
      }
    }
    newProgress.max = detailTaskList.childElementCount;
  } else if (what == "loadTask") {
    newSpan.innerText = arr[idx].taskTitleBox;
    for (let i = 0; i < arr[idx].check.length; i++) {
      if (arr[idx].check[i]) {
        progressValue++;
      }
    }
    newProgress.max = arr[idx].check.length;
  }
  newProgress.value = progressValue;
  progressValue = 0;
  newBtn.classList.add("taskTitleBtn");
  newBtn.appendChild(newProgress);
  taskListArea.append(newBtn);
}
function createTaskCancle() {
  input_TaskTitleBox.value = "";
  input_detailTask.value = "";
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  detailTaskList.innerHTML = "";
}
function modifyScreenOn(arr, idx) {
  taskScreen.classList.remove("hide");
  taskTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("textCenter");
  createTaskBtnArea.classList.add("hide");
  taskModifyBtnArea.classList.add("hide");
  taskFunctionBtnArea.classList.remove("hide");
  input_TaskTitleBox.classList.add("hide");
  addDetailTaskArea.classList.add("hide");
  addDetailTaskArea.classList.remove("alignItemsCenter");
  preventScreen.classList.remove("hide");
  taskTitleBox.innerText = arr[idx].taskTitleBox;

  for (let i = 0; i < arr[idx].detailTask.length; i++) {
    const newDiv = document.createElement("div");
    const newCheckBox = document.createElement("input");
    const newSpan = document.createElement("span");
    newCheckBox.type = "checkbox";
    if (arr[idx].check[i]) {
      newCheckBox.setAttribute("checked", "checked");
      newSpan.classList.add("textDeco");
    }
    newSpan.innerText = arr[idx].detailTask[i];
    newCheckBox.addEventListener("click", function () {
      if (arr[idx].check[i]) {
        arr[idx].check[i] = 0;
      } else {
        arr[idx].check[i] = 1;
      }
      newCheckBox.nextElementSibling.classList.toggle("textDeco");
    });
    newDiv.append(newCheckBox);
    newDiv.append(newSpan);
    detailTaskList.append(newDiv);
  }
}
function addDetailTask() {
  if (input_detailTask.value == "") {
    alert("세부 항목을 입력하세요.");
  } else {
    const newDiv = document.createElement("div");
    const newCheckBox = document.createElement("input");
    const newInput = document.createElement("input");
    const newButton = document.createElement("button");
    checkNewDetailTaskNum++;
    newButton.addEventListener("click", function () {
      taskArr[nowTaskIdx].detailTask = taskArr[nowTaskIdx].detailTask.filter(
        (item) => {
          return item != this.previousElementSibling.value;
        }
      );
      this.parentElement.remove();
    });
    newButton.innerText = "-";
    newCheckBox.type = "checkbox";
    newCheckBox.classList.add("checkBox");
    newInput.type = "text";
    newInput.value = input_detailTask.value;
    newInput.classList.add("detailTask_InputBox");
    newDiv.appendChild(newCheckBox);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newButton);
    newDiv.classList.add("alignItemsCenter");
    detailTaskList.append(newDiv);
    input_detailTask.value = "";
  }
}
function checkProcess(check) {
  let tempValue = 0;
  for (let i = 0; i < detailTaskList.childElementCount; i++) {
    if (check == "modify") {
      tempDetailTask.push(detailTaskList.children[i].children[1].value);
    }
    if (detailTaskList.children[i].children[0].checked) {
      taskArr[nowTaskIdx].check[i] = 1;
      tempValue++;
    } else {
      taskArr[nowTaskIdx].check[i] = 0;
    }
  }
  document.getElementById(`taskProgress_${nowTaskIdx}`).value = tempValue;
  document.getElementById(`taskProgress_${nowTaskIdx}`).max =
    detailTaskList.childElementCount;
}
function backToMainScreen() {
  checkProcess();
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  detailTaskList.innerHTML = "";
}
function modifyTask() {
  for (let i = 0; i < taskArr[nowTaskIdx].detailTask.length; i++) {
    if (detailTaskList.children[i].children[0].checked) {
      taskArr[nowTaskIdx].check[i] = 1;
    } else {
      taskArr[nowTaskIdx].check[i] = 0;
    }
  }
  detailTaskList.innerHTML = "";
  checkNewDetailTaskNum = 0;
  tempDetailTask = [];
  checkModify++;
  input_TaskTitleBox.value = taskArr[nowTaskIdx].taskTitleBox;
  input_TaskTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("hide");
  taskTitleBox.classList.remove("textCenter");
  taskFunctionBtnArea.classList.add("hide");
  taskModifyBtnArea.classList.remove("hide");
  addDetailTaskArea.classList.remove("hide");
  addDetailTaskArea.classList.add("alignItemsCenter");
  for (let i = 0; i < taskArr[nowTaskIdx].detailTask.length; i++) {
    const newDiv = document.createElement("div");
    const newCheckBox = document.createElement("input");
    const newInput = document.createElement("Input");
    const newButton = document.createElement("button");
    newCheckBox.type = "checkbox";
    if (taskArr[nowTaskIdx].check[i]) {
      newCheckBox.setAttribute("checked", "checked");
    }
    newInput.value = taskArr[nowTaskIdx].detailTask[i];
    newInput.classList.add("detailTaskInput");
    newButton.addEventListener("click", function () {
      this.parentElement.remove();
    });
    newButton.innerText = "-";
    newDiv.append(newCheckBox);
    newDiv.append(newInput);
    newDiv.append(newButton);
    detailTaskList.append(newDiv);
  }
}
function clearTask() {
  clearTaskArr = JSON.parse(localStorage.getItem("clearTasks"));
  clearTaskArr.push(taskArr[nowTaskIdx]);
  localStorage.setItem("clearTasks", JSON.stringify(clearTaskArr));
  document.getElementById(`taskTitleID_${nowTaskIdx}`).remove();
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  detailTaskList.innerHTML = "";
  taskArr[nowTaskIdx] = "";
  mycharacter.exp++;
  if (mycharacter.exp == mycharacter.maxExp) {
    mycharacter.exp = 0;
    mycharacter.level++;
  }
  localStorage.setItem(
    "characterState",
    JSON.stringify([mycharacter.level, mycharacter.exp, mycharacter.maxExp])
  );
}
function giveupTask() {
  document.getElementById(`taskTitleID_${nowTaskIdx}`).remove();
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  taskModifyBtnArea.classList.add("hide");
  detailTaskList.innerHTML = "";
  taskArr[nowTaskIdx] = "";
  checkModify = 0;
}
function cancleModify() {
  checkProcess();
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  input_TaskTitleBox.classList.add("hide");
  taskTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("textCenter");
  taskModifyBtnArea.classList.add("hide");
  addDetailTaskArea.classList.add("hide");
  addDetailTaskArea.classList.remove("alignItemsCenter");
  detailTaskList.innerHTML = "";
  checkModify = 0;
  input_detailTask.value = "";
}
function finishModify() {
  if (input_TaskTitleBox.value == "") {
    alert("할 일의 제목을 입력하세요.");
  } else {
    document.getElementById(
      `taskTitleID_${nowTaskIdx}`
    ).firstElementChild.innerText = input_TaskTitleBox.value;
    taskArr[nowTaskIdx].taskTitleBox = input_TaskTitleBox.value;
    taskScreen.classList.add("hide");
    checkProcess("modify");
    preventScreen.classList.add("hide");
    input_TaskTitleBox.classList.add("hide");
    taskTitleBox.classList.remove("hide");
    taskTitleBox.classList.add("textCenter");
    taskModifyBtnArea.classList.add("hide");
    addDetailTaskArea.classList.add("hide");
    addDetailTaskArea.classList.remove("alignItemsCenter");
    taskArr[nowTaskIdx].detailTask = [...tempDetailTask];
    detailTaskList.innerHTML = "";
    input_detailTask.value = "";
    checkModify = 0;
  }
}
function menuBarOnOff(n) {
  preventScreen.classList.toggle("hide");
  menuBar.animate(
    {
      transform: [`translateX(${100 * n}%)`],
    },
    {
      duration: 1000,
      fill: "forwards",
      easing: "ease",
    }
  );
}
function showCharacterState() {
  menuBarOnOff(-1);
  preventScreen.classList.remove("hide");
  characterScreen.classList.remove("hide");
  characterContainer.style.opacity = 0;
  characterExpBar.value = mycharacter.exp;
  characterExpBar.max = mycharacter.maxExp;
  level.innerText = mycharacter.level;
}
function closeCharacterScreen() {
  preventScreen.classList.add("hide");
  characterScreen.classList.add("hide");
  characterContainer.classList.remove("hide");
  characterContainer.style.opacity = 1;
}
function showClearTasks() {
  menuBarOnOff(-1);
  preventScreen.classList.remove("hide");
  clearTaskScreen.classList.remove("hide");
  clearTaskArr = JSON.parse(localStorage.getItem("clearTasks"));
  for (let i = 0; i < clearTaskArr.length; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = clearTaskArr[i].taskTitleBox;
    newButton.classList.add("taskTitleBtn");
    newButton.addEventListener("click", () => {
      selectClearTaskScreen.classList.remove("hide");
      selectClearTaskTitle.innerText = clearTaskArr[i].taskTitleBox;
      for (let j = 0; j < clearTaskArr[i].detailTask.length; j++) {
        const newDiv = document.createElement("div");
        newDiv.innerText = j + 1 + ". " + clearTaskArr[i].detailTask[j];
        selectClearTaskDetailTasks.append(newDiv);
      }
    });
    clearTaskList.append(newButton);
  }
}
function closeClearTaskScreen() {
  preventScreen.classList.add("hide");
  clearTaskScreen.classList.add("hide");
  clearTaskList.innerHTML = "";
}
function closeSelectClearTaskScreen() {
  selectClearTaskDetailTasks.innerHTML = "";
  selectClearTaskScreen.classList.add("hide");
}
todolistStart();
setInterval(() => {
  let tempArr = taskArr.filter((item) => {
    if (item != "") {
      return item;
    }
  });
  localStorage.setItem("lastTasks", JSON.stringify(tempArr));
}, 100);

document.getElementById("testBtn").onclick = async function () {
  const data = await axios.post("/api/user/test", {});
  console.log(data.data);
};
