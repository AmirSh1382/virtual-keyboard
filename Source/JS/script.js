let $ = document;

////////////////////////////

// variables //////////////
const body = $.body;
const textInput = $.querySelector(".textInput");

// fucntions //////////////////
//setting animation
function setKeyAnimation(event) {
  appendValueToDom(event);

  let userEventKey = event.key;
  let mainKeyElem = document.getElementById(userEventKey);

  mainKeyElem.classList.add("keyAnimation");

  mainKeyElem.addEventListener("animationend", function () {
    mainKeyElem.classList.remove("keyAnimation");
  });
}

// the type action
function appendValueToDom(event) {
  if (event.key === "Backspace") {
    textInput.innerHTML = textInput.innerHTML.slice(0, -1);
  } else if (
    event.key === "Shift" ||
    event.key === "Tab" ||
    event.key === "CapsLock" ||
    event.key === "Enter"
  ) {
    return;
  } else {
    textInput.innerHTML += event.key;
  }
}

// event liseteners //////////////
window.addEventListener("keydown", setKeyAnimation);
