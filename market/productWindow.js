const popUp = document.getElementsByClassName('product-popup')[0]
const products = document.querySelectorAll('.product');
const prices = document.getElementsByClassName('price');
const imgs = document.getElementsByClassName('items');
products.forEach((product, index) => {
  product.addEventListener('click', (event) => {
    const popupImg = document.getElementById('popupImg');
    const popupTitle = document.getElementById('popupTitle');
    const popupPrice = document.getElementById('popupPrice');
    
    event.preventDefault();
    popUp.style.visibility = 'visible';
    
    popupImg.src = imgs[index].src;
    popupTitle.textContent = product.querySelector('.description').textContent;
    popupPrice.textContent = prices[index+1].textContent;
  })
})

document.getElementById('close').addEventListener('click', () => {
  popUp.style.visibility = 'hidden';
}
);


