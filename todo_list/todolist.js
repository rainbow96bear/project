const mainScreen = document.getElementById("mainScreen");
const mainbtnAF = document.getElementById("mainbtnAF");
const taskListAreaFrame = document.getElementById("taskListAreaFrame");
const addTaskbtn = document.getElementById("addTaskbtn");
const addTaskScreen = document.getElementById("addTaskScreen");
const inputTitle = document.getElementById("inputTitle");
const taskListArea = document.getElementById("taskListArea");
const createTaskBtn = document.getElementById("createTaskBtn");
const createTaskCancleBtn = document.getElementById("createTaskCancleBtn");
const taskTitle = document.getElementById("taskTitle");
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
const character = document.getElementById("character");
const preventScreen = document.getElementById("preventScreen");
const menuBar = document.getElementById("menuBar");
const menuBtn = document.getElementById("menuBtn");

let nowTaskID = "";

let checkModify = 0;
let checkNewDetailTaskNum = 0;

let progressMax = 0;
let progressValue = 0;

let characterPositionX = mainScreen.offsetWidth / 2;
let characterPositionY = 0;
let moveDirection = 0;
let moveTerm = 3500;
let moveLength = 0;

let taskArr = [];
class Task {
  constructor() {
    this.taskTitle = "";
    this.detailTask = [];
    this.check = [];
  }
}
let nowTaskIdx = 0;
let tempDetailTask = [];
let autoMoving;
let moving = [];

// class와 배열 이용
function addTask() {
  inputTitle.value = "";
  taskArr.push(new Task());
  nowTaskIdx = taskArr.length - 1;
  const tempBundle = document.createElement("div");
  tempBundle.id = tempBundle;
  detailTaskA.append(tempBundle);
  addTaskScreen.classList.remove("hide");
  inputTitle.classList.remove("hide");
  taskTitle.classList.add("hide");
  taskTitle.classList.remove("textCenter");
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
  if (inputTitle.value == "") {
    alert("할 일의 제목을 입력하세요.");
  } else {
    const newBtn = document.createElement("button");
    const newProgress = document.createElement("progress");
    const newSpan = document.createElement("span");
    newProgress.id = `taskProgress_${nowTaskIdx}`;

    newSpan.append(inputTitle.value);
    taskArr[nowTaskIdx].taskTitle = inputTitle.value;
    newBtn.id = `taskTitleID_${nowTaskIdx}`;
    newBtn.appendChild(newSpan);
    newBtn.addEventListener("click", function modifyScreenOn() {
      nowTaskID = this.id;
      addTaskScreen.classList.remove("hide");
      taskTitle.classList.remove("hide");
      taskTitle.classList.add("textCenter");
      createTaskCancleBtn.classList.add("hide");
      createTaskBtn.classList.add("hide");
      giveupTaskBtn.classList.add("hide");
      modifyTaskBtn.classList.remove("hide");
      clearTaskBtn.classList.remove("hide");
      inputTitle.classList.add("hide");
      backBtn.classList.remove("hide");
      addDetailTaskA.classList.add("hide");
      addDetailTaskA.classList.remove("btnCenter");
      preventScreen.classList.remove("hide");

      nowTaskIdx = this.id.slice(12);
      taskTitle.innerText = taskArr[nowTaskIdx].taskTitle;
      const tempDiv = document.createElement("div");
      for (let i = 0; i < taskArr[nowTaskIdx].detailTask.length; i++) {
        const newDiv = document.createElement("div");
        const newCheckBox = document.createElement("input");
        const newSpan = document.createElement("span");
        newCheckBox.type = "checkbox";
        if (taskArr[nowTaskIdx].check[i]) {
          newCheckBox.setAttribute("checked", "checked");
          newSpan.classList.add("textDeco");
        }
        newSpan.innerText = taskArr[nowTaskIdx].detailTask[i];
        newCheckBox.addEventListener("click", function () {
          newCheckBox.nextElementSibling.classList.toggle("textDeco");
        });
        newDiv.append(newCheckBox);
        newDiv.append(newSpan);
        tempDiv.append(newDiv);
      }
      detailTaskA.append(tempDiv);
    });
    for (let i = 0; i < detailTaskA.firstElementChild.childElementCount; i++) {
      taskArr[nowTaskIdx].detailTask.push(
        detailTaskA.firstElementChild.children[i].children[1].value
      );
      if (detailTaskA.firstElementChild.children[i].children[0].checked) {
        progressValue++;
        taskArr[nowTaskIdx].check.push(1);
      } else {
        taskArr[nowTaskIdx].check.push(0);
      }
    }
    newProgress.value = progressValue;
    newProgress.max = detailTaskA.firstElementChild.childElementCount;
    newBtn.appendChild(newProgress);
    taskListArea.append(newBtn);
    addTaskScreen.classList.add("hide");
    preventScreen.classList.add("hide");
    detailTaskA.firstElementChild.remove();
    inputTitle.value = "";
    detailTask.value = "";
    progressValue = 0;
  }
}
function createTaskCancle() {
  inputTitle.value = "";
  detailTask.value = "";
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
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
  for (let i = 0; i < taskArr[nowTaskIdx].check.length; i++) {
    if (detailTaskA.firstElementChild.children[i].children[0].checked) {
      taskArr[nowTaskIdx].check[i] = 1;
    } else {
      taskArr[nowTaskIdx].check[i] = 0;
    }
  }
  let tempValue = 0;
  for (let i = 0; i < detailTaskA.firstElementChild.childElementCount; i++) {
    if (detailTaskA.firstElementChild.children[i].children[0].checked) {
      tempValue++;
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
  inputTitle.value = taskArr[nowTaskIdx].taskTitle;
  inputTitle.classList.remove("hide");
  taskTitle.classList.add("hide");
  taskTitle.classList.remove("textCenter");
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
  document.getElementById(nowTaskID).remove();
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  backBtn.classList.add("hide");
  detailTaskA.firstElementChild.remove();
}
function giveupTask() {
  document.getElementById(nowTaskID).remove();
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  backBtn.classList.add("hide");
  detailTaskA.firstElementChild.remove();
  checkModify = 0;
}
function cancleModify() {
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  inputTitle.classList.add("hide");
  taskTitle.classList.remove("hide");
  taskTitle.classList.add("textCenter");
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
  if (inputTitle.value == "") {
    alert("할 일의 제목을 입력하세요.");
  } else {
    document.getElementById(nowTaskID).firstElementChild.innerText =
      inputTitle.value;
    taskArr[nowTaskIdx].taskTitle = inputTitle.value;
    addTaskScreen.classList.add("hide");
    preventScreen.classList.add("hide");
    inputTitle.classList.add("hide");
    taskTitle.classList.remove("hide");
    taskTitle.classList.add("textCenter");
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
        tempValue++;
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

// transfrom translateX
// transition transform만

// 캐릭터 움직임 구현
function moveCharacter(moveLength) {
  moveDirection = parseInt(Math.random() * 2);
  if (moveDirection) {
    for (let i = 0; i < 20 * moveLength; i++) {
      moving[i] = setTimeout(() => {
        if (
          characterPositionX >=
          mainScreen.offsetWidth - character.offsetWidth
        ) {
          character.style.left = `${
            mainScreen.offsetWidth - character.offsetWidth
          }px`;
        } else {
          character.style.left = `${characterPositionX++}px`;
        }
      }, 50 * i);
    }
  } else {
    for (let i = 0; i < 20 * moveLength; i++) {
      moving[i] = setTimeout(() => {
        if (characterPositionX <= 0) {
          character.style.left = `${0}px`;
        } else {
          character.style.left = `${--characterPositionX}px`;
        }
      }, 50 * i);
    }
  }
}

autoMoving = setInterval(() => {
  moveLength = parseInt(Math.random() * 3 + 1);
  moveCharacter(moveLength);
}, moveTerm);

// 메뉴 버튼 기능
function menuBarOn() {
  preventScreen.classList.remove("hide");
  for (let i = 1; i < 250; i++) {
    setTimeout(() => {
      menuBar.style.left = `${-250 + i}px`;
    }, 1.5 * i);
  }
}

function menuBarOff() {
  preventScreen.classList.add("hide");
  for (let i = 0; i < 250; i++) {
    setTimeout(() => {
      menuBar.style.left = `${-i}px`;
    }, 1.5 * i);
  }
}

function showCharacterState() {
  menuBarOff();
}
