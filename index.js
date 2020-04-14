const wheel = document.getElementById("roulette--wheel");
const button = document.getElementById("roulette--button");
const modal = document.getElementById("modal");
const container = document.getElementById("container");
const modalButton = document.getElementById("modal--button");
const dropBox = document.getElementById("drop--flexbox");
const modalImage = document.getElementById("modal--image");
const modalText = document.getElementById("modal--text");

const drops = [
  { src: "./images/drop_1.png", text: "Случаный нож в профиль" },
  { src: "./images/drop_2.png", text: "1000 рублей на баланс сайта" },
  { src: "./images/drop_3.png", text: "Бонус 100% к пополнению баланса" },
  { src: "./images/drop_4.png", text: "Случайный скин в профиль" },
  { src: "./images/drop_5.png", text: "100 рублей на баланс сайта" },
  { src: "./images/drop_6.png", text: "Бонус 75% к пополнению баланса" },
  { src: "./images/drop_7.png", text: "Бонус 50% к пополнению баланса" },
  { src: "./images/drop_8.png", text: "Бонус 25% к пополнению баланса" },
  {
    src: "./images/drop_9.png",
    text: "Случайный скин от 250 рублей при пополнении баланса от 500 рублей",
  },
  {
    src: "./images/drop_10.png",
    text: "Три случаных скина в профиль при пополнении от 300 рублей",
  },
  {
    src: "./images/drop_11.png",
    text: "Два случаных скина в профиль при пополнении от 200 рублей",
  },
  {
    src: "./images/drop_12.png",
    text: "Один случаный скин в профиль при пополнении от 100 рублей",
  },
];

for (let i = 0; i <= 50; i++) {
  let item = document.createElement("div");
  let img = document.createElement("img");
  item.classList.add("wheel--item");
  img.classList.add("wheel--item--image");
  let randomNumber = Math.floor(Math.random() * drops.length);
  img.alt = drops[randomNumber].text;
  img.src = drops[randomNumber].src;
  item.appendChild(img);
  wheel.appendChild(item);
}

for (drop of drops) {
  let item = document.createElement("div");
  let img = document.createElement("img");
  let text = document.createElement("div");
  img.classList.add("drop--item--image");
  text.classList.add("drop--item--title");
  item.classList.add("drop--item");
  img.src = drop.src;
  text.innerHTML = drop.text;
  item.appendChild(img);
  item.appendChild(text);
  dropBox.appendChild(item);
}

modalText.innerHTML = wheel.childNodes[47].firstChild.alt;
modalImage.src = wheel.childNodes[47].firstChild.src;

button.addEventListener("click", () => {
  wheel.classList.add("animateSpin");
  setTimeout(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    modal.style.display = "block";
    container.style.pointerEvents = "none";
    container.style.opacity = 0.2;
    document.body.style.overflow = "hidden";
  }, 5500);
});

modalButton.addEventListener("click", () => {
  window.location.href = "https://standoffdrop.ru/invite/1077125";
});
