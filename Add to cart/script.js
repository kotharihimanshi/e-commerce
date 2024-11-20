const product = [
    {
        id: 0,
        image: "images/mobile.jpg",
        title: 'Z -Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: "images/airpods.jpg",
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: "images/dslr.jpg",
        title: 'DSLR Camera',
        price: 230  , 
    },
    {
        id: 3,
        image: "images/headphones.jpg",
        title: 'HeadPhones',
        price: 100,
    }
];

const categories = [...new Set(product.map((item) => 
{return item}))]

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => 
{
    var {image, title, price} = item;
    return(
        `<div class = "box">
            <div class = "image-box">
            <img class = "images" src = ${image}> </img>
        </div>
        <div class = "bottom">
        <p>${title}</p>
        <h2>$${price}.00 </h2>` + 
        "<button onclick = 'addtocart(" +(i++)+")'> Add To Cart</button>" +
        `</div>
        </div>`
    )
}).join('')


var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total = 0;

    document.getElementById("count").innerHTML = cart.length;
    if(cart.length == 0){
        document.getElementById('cart-item').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$"+0+".00";
    }
    else{
        document.getElementById('cart-item').innerHTML = cart.map((item) => {
            var {image, title, price} = item;
            total = total + price;
            document.getElementById('total').innerHTML = "$"+total+ ".00";
            return(
                `<div class = "cart-item">
                      <div class = "row-img">
                      <img class = "rowimg" src = ${image}>
                </div>
                <p style = 'font-size: 15px;'>${title} </p>
                <h2 style = 'font-size: 15px';>$${price}.00</h2>` +
                "<i class = 'fa-solid fa-trash' onclick = 'delElement("+(j++)+")'></i></div>"
            );
        }) .join('');        
      }
}

