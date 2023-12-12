let btncart = document.querySelectorAll('.portfolio .add-cart');
let imgpath = '';
let producttitle = '';
let productprice = 0;
let products = [];

let product = {
'imgpath' : '',
'title' : '',
'price' : ''
};

function addToCart(){
    btncart.forEach((element) => {
        element.addEventListener('click', function(e){
        imgpath = e.target.parentElement.parentElement.nextElementSibling.src.slice
        (e.target.parentElement.parentElement.nextElementSibling.src.indexOf('assets'));

        const products = JSON.parse(localStorage.getItem('products'));
        producttitle = e.target.parentElement.parentElement.parentElement.nextElementSibling.childNodes[1].textContent;
        productprice = e.target.parentElement.parentElement.parentElement.nextElementSibling.childNodes[3].textContent;
        console.log(imgpath, producttitle, productprice);
        product['imgpath']= imgpath;
        product['title']= producttitle;
        product['price']= productprice;
        console.log(product);
        products.push(product);
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products));
        })
    })  
}
addToCart()
