// Массив КАТАЛОГА товаров
let catalogArr = [
  {
    title: "iPhone 14 Pro",
    price: 110000,
    desc: "Смартфон Apple iPhone 14 Pro 128GB",
    img: 'img/1.jpg'
  },
  {
    title: "AirPods Pro",
    price: 2100,
    desc: "Наушники Apple AirPods Pro (2-го поколения, 2022)",
    img: 'img/2.jpg'
  },
  {
    title: "Чехол iPhone 14 Pro",
    price: 1200,
    desc: "Чехол для Apple iPhone 14 Pro - желтый",
    img: 'img/3.jpg'
  }
]
//Массив КОРЗИНЫ
let basketArr = []

function getNewBtn(text) {
  let addBtn = document.createElement("button");
  addBtn.textContent = text;
  return addBtn
}

function getCard(card, index) {
  let cardItem = document.createElement("li");
  let cardImg = document.createElement("img");
  let cardTitle = document.createElement("h2");
  let cardDesc = document.createElement("p");
  let cardPrice = document.createElement("span");
  let cardAddToBusket = getNewBtn("+ В корзину")

  cardItem.classList.add("product-item");
  cardImg.classList.add("product-image");
  cardTitle.classList.add("product-title");
  cardDesc.classList.add("product-description");
  cardPrice.classList.add("product-price");
  cardAddToBusket.classList.add("product-btn");

  cardImg.src = card.img;
  cardTitle.textContent = card.title;
  cardDesc.textContent = card.desc;
  cardPrice.textContent = `${card.price} руб`;

  cardAddToBusket.onclick = function () {
    basketArr.push(card)
    renderBasket(basketArr)
  }

  cardItem.append(cardImg, cardTitle, cardDesc, cardPrice, cardAddToBusket)

  return cardItem
}

//Загаловок
let mainHeader = document.createElement("h1");
mainHeader.textContent = "Каталог"

//Список продуктов в каталоге
let productList = document.createElement("ul")
productList.classList.add("product-list")

for (i = 0; i < catalogArr.length; i++) {
  let newCard = getCard(catalogArr[i], i)
  productList.append(newCard)
}

//Блок корзины
let busketBtnWrapper = document.createElement("div")

//Кнопка карзины fg
let openBasketBtn = getNewBtn("")
openBasketBtn.classList.add("basket-btn")

openBasketBtn.onclick = function () {
  if (openBasketBtn.classList.contains("open-basket-btn_show") === false) {
    openBasketBtn.classList.add("open-basket-btn_show")
    basket.classList.add("basket_show")
  } else {
    openBasketBtn.classList.remove("open-basket-btn_show")
    basket.classList.remove("basket_show")
  }
}

//Корзина
let basket = document.createElement("div")
basket.classList.add("basket")

let basketList = document.createElement("ul")
basketList.classList.add("basket-list")

function renderBasket(basketArr, index) {
  basketList.innerHTML = "";

  for (i = 0; i < basketArr.length; i++) {
    let newItem = document.createElement("li")
    let basketImg = document.createElement("img");
    let itemTitle = document.createElement("h2")
    let itemPrice = document.createElement("span")
    let removeItemBtn = getNewBtn("Удалить")

    newItem.classList.add("basket-item")
    basketImg.classList.add("basket-img")
    itemTitle.classList.add("basket-title")
    itemPrice.classList.add("basket-price")
    removeItemBtn.classList.add("basket-remove")

    basketImg.src = basketArr[i].img
    itemTitle.textContent = basketArr[i].title
    itemPrice.textContent = `${basketArr[i].price} руб`;

    let currentIndex = i;

    removeItemBtn.onclick = function () {
      basketArr.splice(currentIndex, 1)
      renderBasket(basketArr)
    }
    newItem.append(basketImg, itemTitle, itemPrice, removeItemBtn)
    basketList.append(newItem)
  }

  let total = basketArr.reduce((sum, item) => sum + item.price, 0)
  orderBtn.textContent = `Заказать на сумму ${total} руб`
}

let orderBtn = getNewBtn("Заказать на сумму")
orderBtn.classList.add("order-btn")

basket.append(basketList, orderBtn)

busketBtnWrapper.append(openBasketBtn)
document.body.append(mainHeader, productList, busketBtnWrapper, basket)

const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "img/discount.svg"
  },
  {
    title: "Скидка 10% на всё!",
    icon: "img/discount_2.svg"
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "img/gift.svg"
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "img/delivery.svg"
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "img/discount_3.svg"
  }
]

const popupCardEl = document.querySelector(".popup");

function showPopup() {
  popupCardEl.classList.add("visible");
  fillPopup()
}

setTimeout(function () {
  showPopup();
}, 3000);

const getTitle = document.querySelector(".popup-description");
const getIcon = document.querySelector(".popup-image");

function fillPopup() {
  const index = Math.floor(Math.random() * giftArr.length);
  const randomGift = giftArr[index];

  getTitle.textContent = randomGift.title;
  getIcon.src = randomGift.icon;
}


const buttonEl = document.querySelector(".popup-btn");

buttonEl.addEventListener('click', function (e) {
  popupCardEl.classList.remove("visible");
});
