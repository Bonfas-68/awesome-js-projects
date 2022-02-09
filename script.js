/////////////////////////////////////////
///Variables

const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
});

/////////////////////////////////////////
///CountDown timer for @2022
const deadDate = "14 feb 2022";
setInterval(() => {
  countDown();
}, 1000);
function countDown() {
  const deadTIme = new Date(deadDate);
  const currentDate = new Date();
  const remainingSeconds = (deadTIme - currentDate) / 1000;
  const days = Math.floor(remainingSeconds / 3600 / 24);
  const hours = Math.floor((remainingSeconds / 3600) % 24);
  const minutes = Math.floor((remainingSeconds / 60) % 60);
  const seconds = Math.floor(remainingSeconds % 60);

  day.textContent = fixeDate(days);
  hour.textContent = fixeDate(hours);
  minute.textContent = fixeDate(minutes);
  second.textContent = fixeDate(seconds);
}
function fixeDate(time) {
  return time < 10 ? `0${time}` : time;
}
countDown();

/////////////////////////////////////////
//Color Flipper/changer/generator randomly
const colorflipper = document.querySelector("#colorflipper");
const color = document.querySelector(".color");
const hex = document.querySelector(".hex");
const hexOp = document.querySelector(".hexOp");
let bgColor = "";
function colorFlipper() {
  const color1 = Math.random().toString(16).substring(2, 8);
  bgColor = color1;

  color.innerHTML = "#" + bgColor;
  // document.body.style.backgroundColor = "#" + bgColor;
}

colorFlipper();
const copyBtn = document.querySelector(".copy__btn");
function colorHexFlipper() {
  const color2 = Math.random().toString(16).substring(2, 10);
  bgColor = color2;
  color.innerHTML = "#" + bgColor;
}
colorFlipper();
hex.addEventListener("click", function () {
  colorFlipper();
  colorflipper.style.backgroundColor = "#" + bgColor;
});
hexOp.addEventListener("click", function () {
  colorHexFlipper();
  document.body.style.backgroundColor = "#" + bgColor;
});
/////////////////////////////////////////////
//Design a copy btn
copyBtn.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const bgCopyColor = color.innerText;
  if (!bgCopyColor) {
    return;
  }
  textarea.value = bgCopyColor;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Color copied successfully!");
});

const articleQuiz = document.querySelectorAll(".question");
articleQuiz.forEach((question) => {
  const btn = question.querySelector(".question__btn");
  btn.addEventListener("click", function (e) {
    console.log(e);
    articleQuiz.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show__text");
      }
    });
    question.classList.toggle("show__text");
  });
});
// Tabs Layout section
const tabContainer = document.querySelector(".tab__container");
const tabBtns = document.querySelectorAll(".tab__btn");
const tabContent = document.querySelectorAll(".tab__content");
//event delegation
tabContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    tabContent.forEach((content) => {
      content.classList.remove("active__content");
    });
    const contentId = document.getElementById(id);
    contentId.classList.add("active__content");
  }
});
/////////////////////////////////////////
// Sticky navigation
const header = document.querySelector(".header");
const navBar = document.querySelector(".navbar");

const blurryNav = (e) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".nav__link");
    const logo = link.closest("header").querySelector(" .hlogo");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navBar.addEventListener("mouseover", blurryNav.bind(0.5));
navBar.addEventListener("mouseout", blurryNav.bind(1));
/////////////////////////////////////////
///Password generator
const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePassword() {
  const len = lenEl.value;

  let password = "";

  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }
  pwEl.innerHTML = password;
}
function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }
  if (lowerEl.checked) {
    xs.push(getLowercase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}
generateEl.addEventListener("click", generatePassword);
/////////////////////////////////////////
//Copy functionality
copyEl.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipBoard");
});
