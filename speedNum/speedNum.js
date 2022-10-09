let random = [];
let squareLength = 4;
let firstArea = document.getElementById("firstArea");
let secondArea = document.getElementById("secondArea");
let thirdArea = document.getElementById("thirdArea");
let fourthArea = document.getElementById("fourthArea");
let selectLength = document.getElementById("selectLength");
let inputBtn = document.getElementById("inputBtn");
function test() {
  for (let i = 0; i < squareLength; i++) {
    let temp = [];
    while (temp.length < squareLength) {
      temp.push(squareLength * i + parseInt(Math.random() * squareLength) + 1);
      temp = [...new Set(temp)];
    }
    random.push(temp);
  }
  return random;
}
console.log(test());
firstArea.innerHTML = random[0][0];
let check = 0;
function changTest() {
  firstArea.innerHTML = random[++check][0];
}
function test2() {
  console.log(selectLength.value);
}
