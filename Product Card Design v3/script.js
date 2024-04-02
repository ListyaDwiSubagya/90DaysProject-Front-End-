const blueBtn = document.getElementById('red');
const pinkBtn = document.getElementById('white');
const yellowBtn = document.getElementById('green');
const cartBtn = document.getElementById('cart-btn');
const cartItems = document.getElementById('items');
const myCart = document.querySelector('.cart');
let itemImages = document.getElementsByTagName('img');

let num = 0;
cartItems.innerText = num;

blueBtn.addEventListener('click', () => {
    itemImages[0].classList.add('active');
    itemImages[1].classList.remove('active');
    itemImages[2].classList.remove('active');
});
pinkBtn.addEventListener('click', () => {
    itemImages[1].classList.add('active');
    itemImages[0].classList.remove('active');
    itemImages[2].classList.remove('active');
});
yellowBtn.addEventListener('click', () => {
    itemImages[0].classList.remove('active');
    itemImages[1].classList.remove('active');
    itemImages[2].classList.add('active');
});
cartBtn.addEventListener('click', () => {
    num = num + 1;
    cartItems.innerText = num;
});