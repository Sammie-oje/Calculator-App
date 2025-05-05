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

const numbers = document.querySelectorAll(".num");
const result = document.querySelector("#result");

const placeholder = "0";
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (result.textContent === placeholder) {
      result.textContent += num.textContent;
    }
  });
});

// Add function
const sum = () => {
  const sumRegex = /[\d]+\+[\d]+/;
  const sumBtn = document.getElementById("plus");
};
