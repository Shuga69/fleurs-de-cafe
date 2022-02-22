

document.getElementById('to-home').addEventListener('click',()=>{ window.location.href = "../main/main.html"})


const getCartData=()=>{
    const cartList = JSON.parse(window.localStorage.getItem('cart-card'))
    const giftCard = document.getElementById('order-card-container')
    let subtotal;
    const totalNode = document.getElementsByClassName('total-price')[0]
    const subtotalNode = document.getElementById('subtotal-price')
    let str = ''
    for(let i=0;i<cartList.length;++i){
       str+= `<div class="order-product">
       <img width="135px" height="100px" src="${cartList[i].image}"/>
       <div class="order-product-text">
           <h3 class="order-product-title">${cartList[i].title}</h3>
           <p class="order-product-subtitle">${cartList[i].subtitle}</p>
           <p class="order-product-price">${cartList[i].price}</p>
       </div>
   </div>
   <hr class="thank-hr"/>`
   subtotal=parseFloat(cartList[i].price.split('$').join(''))*cartList.length
    }
    totalNode.innerText = `$${subtotal}`
    subtotalNode.innerText = `$${subtotal}`
    giftCard.innerHTML += str
}
getCartData()
window.localStorage.setItem('cart-card','[]')