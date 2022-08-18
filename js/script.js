let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#menu-cart').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchBox.classList.remove('active');
}

let searchBox = document.querySelector('.search-form');
document.querySelector('#menu-search').onclick = () => {
    searchBox.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');
}