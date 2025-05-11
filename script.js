"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const radioBtn = document.querySelectorAll("input[type='radio']");
  const styleLink = document.querySelector("#stylelink");
  radioBtn.forEach((btn) => {
    const setTheme = (themeName) => {
      styleLink.href = `styles/theme/${themeName}.css`;
      localStorage.setItem("currentTheme", themeName);
    };

    btn.addEventListener("change", () => {
      if (btn.checked) {
        setTheme(btn.id);
      }
    });

    const savedTheme = localStorage.getItem("currentTheme");
    if (savedTheme) {
      setTheme(savedTheme);
      btn.checked = btn.id === savedTheme;
    }
  });
});

const screen = document.getElementById("screen");
const numbers = document.querySelectorAll(".num");

const operators = document.querySelectorAll(".operator");
const deleteBtn = document.querySelector("#delete");

const resetBtn = document.querySelector("#reset");

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (screen.textContent === "0") {
      screen.textContent = num.textContent;
      operators.forEach((operator) => {
        operator.disabled = false;
      });
    } else {
      screen.textContent += num.textContent;
      operators.forEach((operator) => {
        operator.disabled = false;
      });
    }
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (operator.textContent === "x") {
      operator.textContent = "*";
    }
    screen.textContent += operator.textContent;
    operators.forEach((op) => (op.disabled = true)); //To prevent double clicking
  });
});

deleteBtn.addEventListener("click", () => {
  screen.textContent = screen.textContent.slice(0, -1);
  if (screen.textContent === "") {
    screen.textContent = "0";
  }
});
resetBtn.addEventListener("click", () => {
  if (screen.textContent !== "0") {
    screen.textContent = "";
    screen.textContent = "0";
  }
});

const equalsTo = document.getElementById("equals-to");
equalsTo.addEventListener("click", () => {
  screen.textContent = eval(screen.textContent);
});
