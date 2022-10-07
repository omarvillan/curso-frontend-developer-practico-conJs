const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuTouch = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.products-detail');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetaiContainer = document.querySelector('.product-detail');
const productDetailContainerClose = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuTouch.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleaside);
productDetailContainerClose.addEventListener('click', closeProductDetaiAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    const isasideClosed = aside.classList.contains('inactive');
    productDetaiContainer.classList.add('inactive');

    if (!isasideClosed) {
        aside.classList.toggle('inactive');
    }
}
function toggleaside(){
    aside.classList.toggle('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    productDetaiContainer.classList.add('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
        
    }
}
function openProductDetailAside(){
    productDetaiContainer.classList.remove('inactive')

    mobileMenu.classList.add('inactive')
    aside.classList.add('inactive');
   

   
}

function closeProductDetaiAside(){
    productDetaiContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'laptop',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'iphone',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('products-card');
    
        // product={name, price, image} -> product.image
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('products-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImgCard = document.createElement('img');
        productInfoImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    } 
}

renderProducts(productList);