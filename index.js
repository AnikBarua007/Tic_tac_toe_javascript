let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset-button");
let turn = true;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn === true) {
      turn = false;
      box.innerText = "0";
    } else {
      turn = true;
      box.innerText = "X";
    }
    checkwinner();
  });
});
let checkwinner = () => {
  console.log("going");
  let arrayfor_0 = [];
  let arrayfor_x = [];
  currentindex = 0;
  boxes.forEach((box) => {
    if (box.innerText === "0") {
      arrayfor_0.push(currentindex);
    } else if (box.innerText === "X") {
      arrayfor_x.push(currentindex);
    }
    currentindex++;
  });
  console.log(arrayfor_0);
  function isSubset(parentArray, subsetArray) {
    return subsetArray.every((element) => parentArray.includes(element));
  }
  for (patterns of winpatterns) {
    if (isSubset(arrayfor_0, patterns) === true) {
      console.log("0");
      alert("0 wins");
      reset();
    } else if (isSubset(arrayfor_x, patterns) === true) {
      console.log("0");
      alert("x wins");
      reset();
    }
  }
};
reset_button.addEventListener("click", () => {
  console.log("reset was clicked");
  reset();
});
reset = () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
};
