const mainScreen = document.getElementById("mainScreen");
const mainbtnAF = document.getElementById("mainbtnAF");
const taskListAreaFrame = document.getElementById("taskListAreaFrame");
const addTaskbtn = document.getElementById("addTaskbtn");
const addTaskScreen = document.getElementById("addTaskScreen");
const inputTitleBox = document.getElementById("inputTitleBox");
const taskListArea = document.getElementById("taskListArea");
const createTaskBtn = document.getElementById("createTaskBtn");
const createTaskCancleBtn = document.getElementById("createTaskCancleBtn");
const taskTitleBox = document.getElementById("taskTitleBox");
const taskModifyScreen = document.getElementById("taskModifyScreen");
const modifyTitle = document.getElementById("modifyTitle");
const giveupTaskBtn = document.getElementById("giveupTaskBtn");
const modifyTaskBtn = document.getElementById("modifyTaskBtn");
const clearTaskBtn = document.getElementById("clearTaskBtn");
const modifyEndBtn = document.getElementById("modifyEndBtn");
const notModifyBtn = document.getElementById("notModifyBtn");
const contentAddBtn = document.getElementById("contentAddBtn");
const detailTask = document.getElementById("detailTask");
const detailTaskA = document.getElementById("detailTaskA");
const backBtn = document.getElementById("backBtn");
const addDetailTaskA = document.getElementById("addDetailTaskA");
const characterContainer = document.getElementById("characterContainer");
const preventScreen = document.getElementById("preventScreen");
const menuBar = document.getElementById("menuBar");
const menuBtn = document.getElementById("menuBtn");
const characterScreen = document.getElementById("characterScreen");
const characterExpBar = document.getElementById("characterExpBar");
const level = document.getElementById("level");
const characterExpFrame = document.getElementById("characterExpFrame");
const characterArea = document.getElementById("characterArea");
const characterImg = document.getElementById("characterImg");
const imgContainer = document.getElementById("imgContainer");
const lineBox = document.getElementById("lineBox");
const mainCharaterImg = document.getElementById("mainCharaterImg");
const lineBoxContainer = document.getElementById("lineBoxContainer");
const clearTaskScreen = document.getElementById("clearTaskScreen");
const clearTaskFrame = document.getElementById("clearTaskFrame");
const selectClearTaskScreen = document.getElementById("selectClearTaskScreen");
const selectClearTaskTitle = document.getElementById("selectClearTaskTitle");
const selectClearTaskDetailTasks = document.getElementById(
  "selectClearTaskDetailTasks"
);
const closeClearTaskScreenBtn = document.getElementById(
  "closeClearTaskScreenBtn"
);
const saveScreenFrame = document.getElementById("saveScreenFrame");
const saveTitle = document.getElementById("saveTitle");
const loadScreenFrame = document.getElementById("loadScreenFrame");
const loadTaskList = document.getElementById("loadTaskList");

let nowDate = new Date();
let nowMonth = nowDate.getMonth() + 1;
let nowDay = nowDate.getDate();

let checkModify = 0;
let checkNewDetailTaskNum = 0;

let progressMax = 0;
let progressValue = 0;

let characterPositionX = mainScreen.offsetWidth / 2;
let characterPositionY = 0;
let moveDirection = 0;
let moveTerm = 3500;
let moveLength = 0;

let saveTaskList = [];
let taskArr = [];
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
let autoMoving;
let autoImgMoving;
let autoSpeak;
let moving = [];
let startPos = 0;
let endPos = 0;
let imgStartPos = 0;
let imgEndPos = 0;
let checkAutoSpeak = 0;
let mycharacter = [];
class characterState {
  constructor() {
    this.name = "무지개곰";
    this.level = 1;
    this.exp = 0;
    this.maxExp = 3;
  }
}
mycharacter.push(new characterState());
let characterLine = [
  `오늘은\n${nowMonth}월${nowDay}일입니다.`,
  // "★이몸 등장★",
  // "안녕",
  // "안녕하세요.",
  "아~\n하기싫다~",
  "아~\n정말 하기싫다~",
  "아~\n진짜 하기싫다~",
  "아~\n엄청 하기싫다~",
  // "오늘 점심\n뭐 먹지?",
];

// class와 배열 이용
function addTask() {
  inputTitleBox.value = "";
  taskArr.push(new Task());
  nowTaskIdx = taskArr.length - 1;
  const tempBundle = document.createElement("div");
  detailTaskA.append(tempBundle);
  addTaskScreen.classList.remove("hide");
  inputTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("hide");
  taskTitleBox.classList.remove("textCenter");
  createTaskCancleBtn.classList.remove("hide");
  createTaskBtn.classList.remove("hide");
  giveupTaskBtn.classList.add("hide");
  modifyTaskBtn.classList.add("hide");
  clearTaskBtn.classList.add("hide");
  notModifyBtn.classList.add("hide");
  modifyEndBtn.classList.add("hide");
  backBtn.classList.add("hide");
  addDetailTaskA.classList.remove("hide");
  addDetailTaskA.classList.add("btnCenter");
  preventScreen.classList.remove("hide");
}

function createTask() {
  if (inputTitleBox.value == "") {
    alert("할 일의 제목을 입력하세요.");
  } else {
    makeTaskList(taskArr, nowTaskIdx, "newTask");
    addTaskScreen.classList.add("hide");
    preventScreen.classList.add("hide");
    detailTaskA.firstElementChild.remove();
    inputTitleBox.value = "";
    detailTask.value = "";
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
    newSpan.append(inputTitleBox.value);
    arr[idx].taskTitleBox = inputTitleBox.value;
    for (let i = 0; i < detailTaskA.firstElementChild.childElementCount; i++) {
      arr[idx].detailTask.push(
        detailTaskA.firstElementChild.children[i].children[1].value
      );
      if (detailTaskA.firstElementChild.children[i].children[0].checked) {
        progressValue++;
        arr[idx].check.push(1);
      } else {
        arr[idx].check.push(0);
      }
    }
    newProgress.max = detailTaskA.firstElementChild.childElementCount;
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
  newBtn.appendChild(newProgress);
  taskListArea.append(newBtn);
}
function createTaskCancle() {
  inputTitleBox.value = "";
  detailTask.value = "";
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  detailTaskA.firstElementChild.remove();
}

function modifyScreenOn(arr, idx) {
  addTaskScreen.classList.remove("hide");
  taskTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("textCenter");
  createTaskCancleBtn.classList.add("hide");
  createTaskBtn.classList.add("hide");
  giveupTaskBtn.classList.add("hide");
  modifyTaskBtn.classList.remove("hide");
  clearTaskBtn.classList.remove("hide");
  inputTitleBox.classList.add("hide");
  backBtn.classList.remove("hide");
  addDetailTaskA.classList.add("hide");
  addDetailTaskA.classList.remove("btnCenter");
  preventScreen.classList.remove("hide");

  taskTitleBox.innerText = arr[idx].taskTitleBox;
  const tempDiv = document.createElement("div");
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
      newCheckBox.nextElementSibling.classList.toggle("textDeco");
    });
    newDiv.append(newCheckBox);
    newDiv.append(newSpan);
    tempDiv.append(newDiv);
  }
  detailTaskA.append(tempDiv);
}

function addDetailTask() {
  if (detailTask.value == "") {
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
    newInput.value = detailTask.value;
    newInput.classList.add("detailTaskInput");
    newDiv.appendChild(newCheckBox);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newButton);
    detailTaskA.firstElementChild.append(newDiv);
    detailTask.value = "";
  }
}
function backToMainScreen() {
  let tempValue = 0;
  for (let i = 0; i < detailTaskA.firstElementChild.childElementCount; i++) {
    if (detailTaskA.firstElementChild.children[i].children[0].checked) {
      taskArr[nowTaskIdx].check[i] = 1;
      tempValue++;
    } else {
      taskArr[nowTaskIdx].check[i] = 0;
    }
  }
  document.getElementById(`taskProgress_${nowTaskIdx}`).value = tempValue;
  document.getElementById(`taskProgress_${nowTaskIdx}`).max =
    detailTaskA.firstElementChild.childElementCount;
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  backBtn.classList.add("hide");
  detailTaskA.firstElementChild.remove();
}
function modifyTask() {
  for (let i = 0; i < taskArr[nowTaskIdx].detailTask.length; i++) {
    if (detailTaskA.firstElementChild.children[i].children[0].checked) {
      taskArr[nowTaskIdx].check[i] = 1;
    } else {
      taskArr[nowTaskIdx].check[i] = 0;
    }
  }
  detailTaskA.firstElementChild.remove();
  checkNewDetailTaskNum = 0;
  tempDetailTask = [];
  checkModify++;
  inputTitleBox.value = taskArr[nowTaskIdx].taskTitleBox;
  inputTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("hide");
  taskTitleBox.classList.remove("textCenter");
  giveupTaskBtn.classList.remove("hide");
  modifyTaskBtn.classList.add("hide");
  clearTaskBtn.classList.add("hide");
  modifyEndBtn.classList.remove("hide");
  notModifyBtn.classList.remove("hide");
  backBtn.classList.add("hide");
  addDetailTaskA.classList.remove("hide");
  addDetailTaskA.classList.add("btnCenter");
  const tempDiv = document.createElement("div");
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
    tempDiv.append(newDiv);
  }
  detailTaskA.append(tempDiv);
}
function clearTask() {
  clearTaskArr.push(taskArr[nowTaskIdx]);
  document.getElementById(`taskTitleID_${nowTaskIdx}`).remove();
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  backBtn.classList.add("hide");
  detailTaskA.firstElementChild.remove();
  mycharacter[0].exp++;
  if (mycharacter[0].exp == mycharacter[0].maxExp) {
    mycharacter[0].exp = 0;
    mycharacter[0].level++;
  }
}
function giveupTask() {
  document.getElementById(`taskTitleID_${nowTaskIdx}`).remove();
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  backBtn.classList.add("hide");
  notModifyBtn.classList.add("hide");
  modifyEndBtn.classList.add("hide");
  detailTaskA.firstElementChild.remove();
  checkModify = 0;
}
function cancleModify() {
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  inputTitleBox.classList.add("hide");
  taskTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("textCenter");
  giveupTaskBtn.classList.remove("hide");
  modifyTaskBtn.classList.remove("hide");
  clearTaskBtn.classList.remove("hide");
  notModifyBtn.classList.add("hide");
  modifyEndBtn.classList.add("hide");
  addDetailTaskA.classList.add("hide");
  addDetailTaskA.classList.remove("btnCenter");
  detailTaskA.firstElementChild.remove();
  checkModify = 0;
  detailTask.value = "";
}
function finishModify() {
  if (inputTitleBox.value == "") {
    alert("할 일의 제목을 입력하세요.");
  } else {
    document.getElementById(
      `taskTitleID_${nowTaskIdx}`
    ).firstElementChild.innerText = inputTitleBox.value;
    taskArr[nowTaskIdx].taskTitleBox = inputTitleBox.value;
    addTaskScreen.classList.add("hide");
    preventScreen.classList.add("hide");
    inputTitleBox.classList.add("hide");
    taskTitleBox.classList.remove("hide");
    taskTitleBox.classList.add("textCenter");
    giveupTaskBtn.classList.remove("hide");
    modifyTaskBtn.classList.remove("hide");
    clearTaskBtn.classList.remove("hide");
    notModifyBtn.classList.add("hide");
    modifyEndBtn.classList.add("hide");
    addDetailTaskA.classList.add("hide");
    addDetailTaskA.classList.remove("btnCenter");
    let tempValue = 0;
    for (let i = 0; i < detailTaskA.firstElementChild.childElementCount; i++) {
      tempDetailTask.push(
        detailTaskA.firstElementChild.children[i].children[1].value
      );
      if (detailTaskA.firstElementChild.children[i].children[0].checked) {
        taskArr[nowTaskIdx].check[i] = 1;
        tempValue++;
      } else {
        taskArr[nowTaskIdx].check[i] = 0;
      }
    }
    document.getElementById(`taskProgress_${nowTaskIdx}`).value = tempValue;
    document.getElementById(`taskProgress_${nowTaskIdx}`).max =
      detailTaskA.firstElementChild.childElementCount;
    taskArr[nowTaskIdx].detailTask = [...tempDetailTask];
    detailTaskA.firstElementChild.remove();
    detailTask.value = "";
    checkModify = 0;
  }
}
function moveCharacter(moveLength) {
  moveDirection = parseInt(Math.random() * 2) - 1;
  endPos = startPos + moveDirection * moveLength * 20;
  if (endPos < -20) {
    endPos *= -1;
  } else if (endPos > mainScreen.offsetWidth - 100) {
    endPos = mainScreen.offsetWidth - 100;
  }
  if (startPos < endPos) {
    mainCharaterImg.src = "./img/characterImgRight.png";
  } else if (startPos > endPos) {
    mainCharaterImg.src = "./img/characterImg.png";
  }
  characterContainer.animate(
    {
      transform: [`translateX(${startPos}px)`, `translateX(${endPos}px)`],
    },
    {
      duration: 1000,
      fill: "forwards",
      easing: "ease",
    }
  );
  startPos = endPos;
}
function lineBoxHide() {
  lineBox.innerText = "";
  lineBoxContainer.classList.toggle("hide");
  lineBoxContainer.classList.toggle("lineBoxContainer");
}
autoMoving = setInterval(() => {
  moveLength = parseInt(Math.random() * 3 + 1);
  moveCharacter(moveLength);
}, moveTerm);
function speak(num) {
  lineBoxContainer.classList.remove("hide");
  lineBoxContainer.classList.add("lineBoxContainer");
  lineBox.innerText = characterLine[num];
  setTimeout(() => {
    lineBoxHide();
  }, 7000);
}
function autoSpeakfunc() {
  let num = parseInt(Math.random() * (characterLine.length - 1) + 1);
  speak(num);
}
autoSpeak = setInterval(() => autoSpeakfunc(), 10000);
function speakNowDate() {
  clearInterval(autoSpeak);
  lineBoxContainer.classList.remove("hide");
  lineBoxContainer.classList.add("lineBoxContainer");
  lineBox.innerText = characterLine[0];
  if (checkAutoSpeak == 0) {
    checkAutoSpeak++;
    setTimeout(() => {
      autoSpeak = setInterval(() => autoSpeakfunc(), 10000);
      checkAutoSpeak--;
    }, 7000);
  }
}
// 캐릭터 좌우
function characterDirection() {
  characterContainer.animate({
    transform: [`rotateX(180deg)`],
  });
}
// 메뉴 버튼 기능
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
  characterExpBar.value = mycharacter[0].exp;
  characterExpBar.max = mycharacter[0].maxExp;
  level.innerText = mycharacter[0].level;
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
  const newTempBundle = document.createElement("div");
  newTempBundle.id = "tempBundle";
  for (let i = 0; i < clearTaskArr.length; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = clearTaskArr[i].taskTitleBox;
    newButton.addEventListener("click", () => {
      selectClearTaskScreen.classList.remove("hide");
      selectClearTaskTitle.innerText = clearTaskArr[i].taskTitleBox;
      const newSelectTempBundle = document.createElement("div");
      for (let j = 0; j < clearTaskArr[i].detailTask.length; j++) {
        const newDiv = document.createElement("div");
        newDiv.innerText = j + 1 + ". " + clearTaskArr[i].detailTask[j];
        newSelectTempBundle.append(newDiv);
      }
      selectClearTaskDetailTasks.append(newSelectTempBundle);
    });
    newTempBundle.append(newButton);
  }
  clearTaskFrame.append(newTempBundle);
}
function closeClearTaskScreen() {
  preventScreen.classList.add("hide");
  clearTaskScreen.classList.add("hide");
  clearTaskFrame.firstElementChild.remove();
}
function closeSelectClearTaskScreen() {
  selectClearTaskDetailTasks.firstElementChild.remove();
  selectClearTaskScreen.classList.add("hide");
}
const saveBtn = document.getElementById("saveBtn");
saveBtn.onclick = () => {
  menuBarOnOff(-1);
  preventScreen.classList.remove("hide");
  saveScreenFrame.classList.remove("hide");
  // localStorage.setItem("할 일 목록", JSON.stringify(taskArr));
};
const loadBtn = document.getElementById("loadBtn");
loadBtn.onclick = function test() {
  menuBarOnOff(-1);
  preventScreen.classList.remove("hide");
  loadScreenFrame.classList.remove("hide");
  const newDiv = document.createElement("div");
  let tempArr = localStorage.getItem("saveTaskList");
  saveTaskList = JSON.parse(tempArr);
  saveTaskList.forEach((item) => {
    const newBtn = document.createElement("button");
    newBtn.innerText = item;
    newBtn.onclick = () => {
      seletctLoadTask = newBtn.innerText;
    };
    newDiv.append(newBtn);
  });
  loadTaskList.append(newDiv);
};
const saveCancleBtn = document.getElementById("saveCancleBtn");
saveCancleBtn.onclick = () => {
  saveScreenFrame.classList.add("hide");
  preventScreen.classList.add("hide");
  saveTitle.value = "";
};
const saveCompleteBtn = document.getElementById("saveCompleteBtn");
saveCompleteBtn.onclick = () => {
  preventScreen.classList.add("hide");
  saveScreenFrame.classList.add("hide");
  saveTaskList.push(saveTitle.value);
  localStorage.setItem("saveTaskList", JSON.stringify(saveTaskList));
  localStorage.setItem(saveTitle.value, JSON.stringify(taskArr));
  saveTitle.value = "";
};
const loadCancleBtn = document.getElementById("loadCancleBtn");
loadCancleBtn.onclick = () => {
  preventScreen.classList.add("hide");
  loadScreenFrame.classList.add("hide");
  loadTaskList.firstElementChild.remove();
};
const loadCompleteBtn = document.getElementById("loadCompleteBtn");
loadCompleteBtn.onclick = () => {
  preventScreen.classList.add("hide");
  loadScreenFrame.classList.add("hide");
  loadTaskList.firstElementChild.remove();
  let tempArr = localStorage.getItem(seletctLoadTask);
  tempArr = JSON.parse(tempArr);
  tempArr.forEach((item) => {
    taskArr.push(item);
    nowTaskIdx = taskArr.length - 1;
    makeTaskList(taskArr, nowTaskIdx, "loadTask");
  });
};
