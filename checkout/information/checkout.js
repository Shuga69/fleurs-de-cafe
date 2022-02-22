function openDrop(){
    document.getElementById('drop-down').classList.toggle('open')
    document.getElementById('drop-down').classList.contains('open')?
    document.getElementById('arrow-drop').style.content = "url(../../assets/upIcon.svg)":
    document.getElementById('arrow-drop').style.content = "url(../../assets/drop-down-icon.svg)"
}



let continueButtons = document.getElementsByClassName('continue-shipping')
for(let button of continueButtons){
    button.addEventListener('click',(event)=>{
        event.preventDefault();
       
        if(button.id==="shipping"){
           
            window.location.href="../shipping/shipping.html"
        }else if(button.id==="payment"){
            
            window.location.href="../payment/payment.html"
        }else if(button.id="pay-now"){
         
            window.location.href="../../thankYou/thankYou.html"
        }
    },false)
}




let returnButtons = document.getElementsByClassName('return-to-card')
for(let button of returnButtons){
    button.addEventListener('click',(event)=>{
       event.preventDefault()
        
        if(button.id==="back-cart"){
  
            window.location.href="../../shoppingBag/bag.html"
        }else if(button.id==="back-information"){
         
            window.location.href="../information/information.html"
        }else if(button.id="back-shipping"){
            window.location.href="../shipping/shipping.html"
        }
    },false)
}


const getCartData=()=>{
    const cartList = JSON.parse(window.localStorage.getItem('cart-card'))
    const giftCard = document.getElementById('gift-card')
    let subtotal;
    const totalNode = document.getElementsByClassName('gift-total-price')[0]
    const subtotalNode = document.getElementById('subtotal-price')
    let str = ''
    for(let i=0;i<cartList.length;++i){
       str+= `<div class="gift-container-title">
       <img id="gift-image" width="64px" height="64px" src="${cartList[i].image}"/>
       <h2 class="gift-title">${cartList[i].title}</h2>
       <p class="gift-price">${cartList[i].price}</p>
   </div>
   <hr class="gift-hr"/>`

        subtotal=parseFloat(cartList[i].price.split('$').join(''))*cartList.length
    }

    totalNode.innerText = `$${subtotal}`
    subtotalNode.innerText = `$${subtotal}`
    giftCard.innerHTML += str
}
getCartData()