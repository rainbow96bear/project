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

let taskNum = 0;
let nowTaskID = "";
let roadDetail = "";
let checkModify = 0;
let checkNewDetailTaskNum = 0;

let progressMax = 0;
let progressValue = 0;

let characterPositionX = mainScreen.offsetWidth / 2;
let characterPositionY = 0;
let moveDirection = 0;
let moveTerm = 3500;
let moveLength = 0;

let autoMoving;
let moving = [];
function addTask() {
  inputTitle.value = "";
  const newDTBundle = document.createElement("div");
  newDTBundle.id = `detailTaskBundle_${taskNum}`;
  newDTBundle.style.overflow = "auto";
  newDTBundle.style.maxWidth = "100%";
  newDTBundle.style.maxHeight = "90%";
  detailTaskA.appendChild(newDTBundle);
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
    const newText = document.createTextNode(inputTitle.value);
    const newProgress = document.createElement("progress");
    newProgress.id = `taskProgress_${taskNum}`;
    newProgress.value = progressValue;
    newProgress.max = progressMax;
    const newSpan = document.createElement("span");
    document
      .getElementById(`detailTaskBundle_${taskNum}`)
      .classList.add("hide");
    document.getElementById(`detailTaskBundle_${taskNum}`).style.maxHeight =
      "100%";
    newBtn.id = `taskTitleID_${taskNum++}`;
    newSpan.append(newText);
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

      taskTitle.innerText = document.getElementById(this.id).innerText;
      roadDetail = this.id.slice(12);
      document
        .getElementById(`detailTaskBundle_${roadDetail}`)
        .classList.remove("hide");
      for (
        let i = 0;
        i <
        document.getElementById(`detailTaskBundle_${roadDetail}`)
          .childElementCount;
        i++
      ) {
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].querySelector("button")
          .classList.add("hide");
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].children[1].classList.add("hide");
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].children[2].classList.remove("hide");
      }
    });
    newBtn.appendChild(newProgress);
    taskListArea.append(newBtn);
    addTaskScreen.classList.add("hide");
    preventScreen.classList.add("hide");
    inputTitle.value = "";
    detailTask.value = "";
    progressMax = 0;
    progressValue = 0;
  }
}
function createTaskCancle() {
  inputTitle.value = "";
  detailTask.value = "";
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  document.getElementById(`detailTaskBundle_${taskNum}`).remove();
}
function clearTask() {
  document.getElementById(nowTaskID).remove();
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  backBtn.classList.add("hide");
  document.getElementById(`detailTaskBundle_${roadDetail}`).remove();
}

function modifyTask() {
  checkNewDetailTaskNum = 0;
  checkModify++;
  inputTitle.value = document.getElementById(nowTaskID).innerText;
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

  document.getElementById(`detailTaskBundle_${roadDetail}`).style.maxHeight =
    "90%";
  for (
    let i = 0;
    i <
    document.getElementById(`detailTaskBundle_${roadDetail}`).childElementCount;
    i++
  ) {
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].querySelector("button")
      .classList.remove("hide");
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].children[1].classList.remove("hide");
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].children[1].classList.add("detailTaskInput");
    document.getElementById(`detailTaskBundle_${roadDetail}`).children[
      i
    ].children[1].value = document.getElementById(
      `detailTaskBundle_${roadDetail}`
    ).children[i].children[2].innerText;
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].children[2].classList.add("hide");
  }
}

function giveupTask() {
  document.getElementById(nowTaskID).remove();
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  backBtn.classList.add("hide");
  document.getElementById(`detailTaskBundle_${roadDetail}`).remove();
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
  document
    .getElementById(`detailTaskBundle_${roadDetail}`)
    .classList.add("hide");
  let tempValue = 0;
  for (let i = 0; i < checkNewDetailTaskNum; i++) {
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .lastChild.remove();
  }
  for (
    let i = 0;
    i <
    document.getElementById(`detailTaskBundle_${roadDetail}`).childElementCount;
    i++
  ) {
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].querySelector("button")
      .classList.add("hide");
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].children[1].classList.add("hide");
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].children[1].classList.remove("detailTaskInput");
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].children[2].classList.remove("hide");
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .children[i].classList.remove("hide");
    if (
      document.getElementById(`detailTaskBundle_${roadDetail}`).children[i]
        .children[0].checked
    ) {
      tempValue++;
    }
  }
  document.getElementById(`taskTitleID_${roadDetail}`).children[1].max =
    document.getElementById(`detailTaskBundle_${roadDetail}`).childElementCount;
  document.getElementById(`taskTitleID_${roadDetail}`).children[1].value =
    tempValue;
  checkModify = 0;
  detailTask.value = "";
}
function finishModify() {
  if (inputTitle.value == "") {
    alert("할 일의 제목을 입력하세요.");
  } else {
    document.getElementById(nowTaskID).firstElementChild.innerText =
      inputTitle.value;
    taskTitle.innerText = inputTitle.value;
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
    document
      .getElementById(`detailTaskBundle_${roadDetail}`)
      .classList.add("hide");
    let tempValue = 0;
    for (
      let i = 0;
      i <
      document.getElementById(`detailTaskBundle_${roadDetail}`)
        .childElementCount;
      i++
    ) {
      if (
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].classList.contains("hide")
      ) {
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].remove();
        i--;
        continue;
      } else {
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].querySelector("button")
          .classList.add("hide");
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].children[1].classList.add("hide");
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].children[1].classList.remove("detailTaskInput");
        document.getElementById(`detailTaskBundle_${roadDetail}`).children[
          i
        ].children[2].innerText = document.getElementById(
          `detailTaskBundle_${roadDetail}`
        ).children[i].children[1].value;
        document
          .getElementById(`detailTaskBundle_${roadDetail}`)
          .children[i].children[2].classList.remove("hide");
        if (
          document.getElementById(`detailTaskBundle_${roadDetail}`).children[i]
            .children[0].checked
        ) {
          tempValue++;
        }
      }
    }
    document.getElementById(`taskTitleID_${roadDetail}`).children[1].value =
      tempValue;
  }
  document.getElementById(`taskProgress_${roadDetail}`).max =
    document.getElementById(`detailTaskBundle_${roadDetail}`).childElementCount;
  detailTask.value = "";
  checkModify = 0;
}

function addDetailTask() {
  if (detailTask.value == "") {
    alert("세부 항목을 입력하세요.");
  } else {
    const newDiv = document.createElement("div");
    const newText = document.createTextNode(detailTask.value);
    const newSpan = document.createElement("span");
    const newInput = document.createElement("input");
    const newCheckBox = document.createElement("input");
    const newButton = document.createElement("button");
    const newBtnText = document.createTextNode("-");
    let tempNum = 0;
    checkNewDetailTaskNum++;
    newButton.addEventListener("click", function () {
      if (checkModify > 0) {
        tempNum = roadDetail;
        document.getElementById(`taskProgress_${tempNum}`).max--;
        if (document.getElementById(`taskProgress_${tempNum}`).value < 0) {
          document.getElementById(`taskProgress_${tempNum}`).value = 0;
        }
      } else {
        tempNum = taskNum;
        progressMax--;
        if (progressValue < 0) {
          progressValue = 0;
        }
      }
      this.parentElement.classList.add("hide");
    });
    newButton.appendChild(newBtnText);
    newCheckBox.type = "checkbox";
    newCheckBox.classList.add("checkBox");
    newCheckBox.addEventListener("click", function () {
      newSpan.classList.toggle("textDeco");
      if (document.getElementById(`taskProgress_${tempNum}`)) {
        if (newCheckBox.checked) {
          document.getElementById(`taskProgress_${tempNum}`).value++;
        } else {
          document.getElementById(`taskProgress_${tempNum}`).value--;
        }
      } else {
        if (newCheckBox.checked) {
          progressValue++;
        } else {
          progressValue--;
        }
      }
    });
    newInput.type = "text";
    newInput.value = detailTask.value;
    if (checkModify > 0) {
      tempNum = roadDetail;
      document.getElementById(`taskProgress_${tempNum}`).max++;
    } else {
      tempNum = taskNum;
      progressMax++;
    }
    newSpan.classList.add("hide");
    newInput.classList.add("detailTaskInput");
    // newDiv.classList.add("detailTaskAlignCenter");
    newDiv.appendChild(newCheckBox);
    newSpan.appendChild(newText);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newButton);
    document.getElementById(`detailTaskBundle_${tempNum}`).appendChild(newDiv);
    detailTask.value = "";
  }
}
function backToMainScreen() {
  addTaskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  backBtn.classList.add("hide");
  document
    .getElementById(`detailTaskBundle_${roadDetail}`)
    .classList.add("hide");
}

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
