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
const saveScreenFrame = document.getElementById("saveScreenFrame");
const saveTitle = document.getElementById("saveTitle");
const loadScreenFrame = document.getElementById("loadScreenFrame");
const loadTaskList = document.getElementById("loadTaskList");
let nowDate = new Date();
let nowMonth = nowDate.getMonth() + 1;
let nowDay = nowDate.getDate();
let checkModify = 0;
let checkNewDetailTaskNum = 0;
let prevSelect = 0;
let progressMax = 0;
let progressValue = 0;
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
let autoSpeak;
let moving = [];
let startPos = 0;
let endPos = 0;
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
  "★이몸 등장★",
  "안녕",
  "안녕하세요.",
  "아~\n하기싫다~",
  "오늘 점심\n뭐 먹지?",
];
// class와 배열 이용
function addTask() {
  input_TaskTitleBox.value = "";
  taskArr.push(new Task());
  nowTaskIdx = taskArr.length - 1;
  const tempBundle = document.createElement("div");
  detailTaskList.append(tempBundle);
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
    detailTaskList.firstElementChild.remove();
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
    newSpan.append(input_TaskTitleBox.value);
    arr[idx].taskTitleBox = input_TaskTitleBox.value;
    for (
      let i = 0;
      i < detailTaskList.firstElementChild.childElementCount;
      i++
    ) {
      arr[idx].detailTask.push(
        detailTaskList.firstElementChild.children[i].children[1].value
      );
      if (detailTaskList.firstElementChild.children[i].children[0].checked) {
        progressValue++;
        arr[idx].check.push(1);
      } else {
        arr[idx].check.push(0);
      }
    }
    newProgress.max = detailTaskList.firstElementChild.childElementCount;
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
  detailTaskList.firstElementChild.remove();
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
  detailTaskList.append(tempDiv);
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
    detailTaskList.firstElementChild.append(newDiv);
    input_detailTask.value = "";
  }
}
function backToMainScreen() {
  let tempValue = 0;
  for (let i = 0; i < detailTaskList.firstElementChild.childElementCount; i++) {
    if (detailTaskList.firstElementChild.children[i].children[0].checked) {
      taskArr[nowTaskIdx].check[i] = 1;
      tempValue++;
    } else {
      taskArr[nowTaskIdx].check[i] = 0;
    }
  }
  document.getElementById(`taskProgress_${nowTaskIdx}`).value = tempValue;
  document.getElementById(`taskProgress_${nowTaskIdx}`).max =
    detailTaskList.firstElementChild.childElementCount;
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  detailTaskList.firstElementChild.remove();
}
function modifyTask() {
  for (let i = 0; i < taskArr[nowTaskIdx].detailTask.length; i++) {
    if (detailTaskList.firstElementChild.children[i].children[0].checked) {
      taskArr[nowTaskIdx].check[i] = 1;
    } else {
      taskArr[nowTaskIdx].check[i] = 0;
    }
  }
  detailTaskList.firstElementChild.remove();
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
  detailTaskList.append(tempDiv);
}
function clearTask() {
  clearTaskArr.push(taskArr[nowTaskIdx]);
  document.getElementById(`taskTitleID_${nowTaskIdx}`).remove();
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  detailTaskList.firstElementChild.remove();
  taskArr[nowTaskIdx] = "";
  taskArr = taskArr.filter((item) => {
    if (item != "") {
      return item;
    }
  });
  mycharacter[0].exp++;
  if (mycharacter[0].exp == mycharacter[0].maxExp) {
    mycharacter[0].exp = 0;
    mycharacter[0].level++;
  }
}
function giveupTask() {
  document.getElementById(`taskTitleID_${nowTaskIdx}`).remove();
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  taskModifyBtnArea.classList.add("hide");
  detailTaskList.firstElementChild.remove();
  taskArr[nowTaskIdx] = "";
  // taskArr = taskArr.filter((item) => {
  //   if (item != "") {
  //     return item;
  //   }
  // });
  checkModify = 0;
}
function cancleModify() {
  taskScreen.classList.add("hide");
  preventScreen.classList.add("hide");
  input_TaskTitleBox.classList.add("hide");
  taskTitleBox.classList.remove("hide");
  taskTitleBox.classList.add("textCenter");
  taskModifyBtnArea.classList.add("hide");
  addDetailTaskArea.classList.add("hide");
  addDetailTaskArea.classList.remove("alignItemsCenter");
  detailTaskList.firstElementChild.remove();
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
    preventScreen.classList.add("hide");
    input_TaskTitleBox.classList.add("hide");
    taskTitleBox.classList.remove("hide");
    taskTitleBox.classList.add("textCenter");
    taskModifyBtnArea.classList.add("hide");
    addDetailTaskArea.classList.add("hide");
    addDetailTaskArea.classList.remove("alignItemsCenter");
    let tempValue = 0;
    for (
      let i = 0;
      i < detailTaskList.firstElementChild.childElementCount;
      i++
    ) {
      tempDetailTask.push(
        detailTaskList.firstElementChild.children[i].children[1].value
      );
      if (detailTaskList.firstElementChild.children[i].children[0].checked) {
        taskArr[nowTaskIdx].check[i] = 1;
        tempValue++;
      } else {
        taskArr[nowTaskIdx].check[i] = 0;
      }
    }
    document.getElementById(`taskProgress_${nowTaskIdx}`).value = tempValue;
    document.getElementById(`taskProgress_${nowTaskIdx}`).max =
      detailTaskList.firstElementChild.childElementCount;
    taskArr[nowTaskIdx].detailTask = [...tempDetailTask];
    detailTaskList.firstElementChild.remove();
    input_detailTask.value = "";
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
  speechBubble.innerText = "";
  speechBubbleContainer.classList.toggle("hide");
}
autoMoving = setInterval(() => {
  moveLength = parseInt(Math.random() * 3 + 1);
  moveCharacter(moveLength);
}, moveTerm);
function speak(num) {
  speechBubbleContainer.classList.remove("hide");
  speechBubble.innerText = characterLine[num];
  setTimeout(() => {
    lineBoxHide();
  }, 3000);
}
function autoSpeakfunc() {
  let num = parseInt(Math.random() * (characterLine.length - 1) + 1);
  speak(num);
}
autoSpeak = setInterval(() => autoSpeakfunc(), 8000);
function speakNowDate() {
  clearInterval(autoSpeak);
  speechBubbleContainer.classList.remove("hide");
  speechBubble.innerText = characterLine[0];
  if (checkAutoSpeak == 0) {
    checkAutoSpeak++;
    setTimeout(() => {
      autoSpeak = setInterval(() => autoSpeakfunc(), 8000);
      checkAutoSpeak--;
    }, 3000);
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
    newButton.classList.add("taskTitleBtn");
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
  clearTaskList.append(newTempBundle);
}
function closeClearTaskScreen() {
  preventScreen.classList.add("hide");
  clearTaskScreen.classList.add("hide");
  clearTaskList.firstElementChild.remove();
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
};
const loadBtn = document.getElementById("loadBtn");
loadBtn.onclick = function test() {
  menuBarOnOff(-1);
  preventScreen.classList.remove("hide");
  loadScreenFrame.classList.remove("hide");
  const newDiv = document.createElement("div");
  newDiv.style.height = "100%";
  newDiv.style.width = "100%";
  let tempArr = localStorage.getItem("saveTaskList");
  saveTaskList = JSON.parse(tempArr);
  let checkNum = 0;
  saveTaskList.forEach((item) => {
    const newBtn = document.createElement("button");
    const newSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "제거";
    deleteBtn.id = `deleteBtnID_${checkNum}`;
    deleteBtn.onclick = () => {
      console.log(saveTaskList[deleteBtn.id.slice(12)]);
      saveTaskList = saveTaskList.filter((item) => {
        if (item != "") {
          return item;
        }
      });
      deleteBtn.parentElement.remove();
      localStorage.setItem("saveTaskList", JSON.stringify(saveTaskList));
    };
    newSpan.innerText = item;
    newBtn.classList.add("taskTitleBtn");
    newBtn.append(newSpan);
    newBtn.append(deleteBtn);
    newBtn.onclick = () => {
      newBtn.classList.toggle("select");
      seletctLoadTask = newSpan.innerText;
    };
    newDiv.append(newBtn);
    checkNum++;
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
  if (saveTitle.value == "") {
    alert("저장할 이름을 작성해주세요.");
  } else {
    preventScreen.classList.add("hide");
    saveScreenFrame.classList.add("hide");
    taskArr = taskArr.filter((item) => {
      if (item != "") {
        return item;
      }
    });
    saveTaskList.push(saveTitle.value);
    localStorage.setItem("saveTaskList", JSON.stringify(saveTaskList));
    localStorage.setItem(saveTitle.value, JSON.stringify(taskArr));
    saveTitle.value = "";
  }
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
