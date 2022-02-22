

let cartList = JSON.parse(window.localStorage.getItem('cart-card'))

function renderItem(){
    let str = '';
    for(let i = 0;i<cartList.length;++i){   
    str = `<div class="product-card-container">
    <img class="desktop" width="255px" height="267px" src="${cartList[i].image}"/>
    <div class="product-card mobile">
        <img width="100px" height="100px" src="${cartList[i].image}"/>
        <div class="product-remove-button"><img src="../assets/delete_icon.svg"/><p>Remove</p></div>
    </div>
    <div class="product-card__text">
        <div class="product-card-top-container">
            <h3 class="product-card-title">${cartList[i].title}</h3>
            <div class="product-remove-button desktop"><img src="../assets/delete_icon.svg"/><p>Remove</p></div>
        </div>
        <div class="product-card-description">
            <p class="product-card-order-description">Southern Italian Roast, 2lb, whole beans</p>
            <p class="product-card-price">${cartList[i].price}</p>
            <div class="coffee-quontity-container">
                <p class="size-title">
                    Quontity
                </p>
                <div class="coffee-button-container">
                    <div class="coffee-quontity-buttons">
                        <button  id="minusButton" class="coffee-quontity-button minus"><img class="minus subtract" src="../assets/Minus_icon.svg"/></button>
                        <input id="quontity-input" class="coffee-quontity-input" value="1"/>
                        <button  id="addButton" class="coffee-quontity-button add"><img class="plus" src="../assets/Plus_icon.svg"/></button>
                    </div>
                </div>
            </div>
            <p class="product-card-total">Total</p>
            <p class="product-card-total-price">${cartList[i].price}</p>
        </div>
    </div>
</div>
<hr class="product-card-hr"/>`
document.getElementById('bag-container').innerHTML += str

    }
}
renderItem()
let removeButtons = document.getElementsByClassName('product-remove-button desktop')
let removeButtonsMobile = document.getElementsByClassName('product-remove-button')
let startPrice = parseFloat(cartList.map((item)=>item.price.split('$').join('')).reduce((prev,current)=>parseFloat(prev)+parseFloat(current)));
let subtotal = startPrice;
document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`

for(let i = 0;i<cartList.length;++i){   
    removeButtons[i].addEventListener('click',()=>{
        cartList.splice(i,1)
        window.localStorage.setItem('cart-card',JSON.stringify(cartList))
        document.location.reload() 
    })
    removeButtonsMobile[i].addEventListener('click',()=>{
        cartList.splice(i,1)
        window.localStorage.setItem('cart-card',JSON.stringify(cartList))
        document.location.reload() 
    })
    document.getElementsByClassName('coffee-quontity-button minus')[i].addEventListener("click",(event)=>{
        quontity = event.target.parentElement.querySelector('#quontity-input').value;
        total = event.target.parentElement.parentElement.parentElement.parentElement
        productPrice = total.querySelector('.product-card-price').innerText.split('$').join('');
        quontity>1?quontity--:1;
        totalPrice = productPrice*quontity;

        total.querySelector('.product-card-total-price').innerText = `$${totalPrice.toFixed(2)}`
        console.log(parseFloat(productPrice))
        subtotal>startPrice?subtotal-=parseFloat(productPrice):subtotal=startPrice
       
        document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`
        event.target.parentElement.querySelector('#quontity-input').value = quontity
    })
    
    document.getElementsByClassName('coffee-quontity-button add')[i].addEventListener("click",(event)=>{
        quontity = event.target.parentElement.querySelector('#quontity-input').value
        total = event.target.parentElement.parentElement.parentElement.parentElement
        productPrice = total.querySelector('.product-card-price').innerText.split('$').join('');
        quontity++;
        totalPrice = productPrice*quontity;
        total.querySelector('.product-card-total-price').innerText = `$${totalPrice.toFixed(2)}`
        event.target.parentElement.querySelector('#quontity-input').value = quontity
        subtotal+=parseFloat(productPrice)
        document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`
      
    })
    document.getElementsByClassName('coffee-quontity-input')[i].addEventListener("change",(event)=>{
        quontity = event.target.parentElement.querySelector('#quontity-input').value
        total = event.target.parentElement.parentElement.parentElement.parentElement
        productPrice = total.querySelector('.product-card-price').innerText.split('$').join('');
        totalPrice = productPrice*quontity;
        total.querySelector('.product-card-total-price').innerText = `$${totalPrice.toFixed(2)}`
        event.target.parentElement.querySelector('#quontity-input').value = quontity
       
    })
}

let quontity = 1;
let quontityInput = document.querySelectorAll('#quontity-input')

let toCheckout=()=>window.location.href = '../checkout/information/information.html'