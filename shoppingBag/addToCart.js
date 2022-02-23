function addToCart(){
    let addCartButtons = document.getElementsByClassName('add-btn')
    JSON.parse(window.localStorage.getItem('cart-card'))? cartList = JSON.parse(window.localStorage.getItem('cart-card')):cartList=[];
   
    document.getElementById('cart-counter').innerText = cartList.length
   
    for(let item of addCartButtons){
   
       
        item.addEventListener("click",function(event){
            let cartElement = event.target.parentElement.parentElement.parentElement;
            let price = cartElement.querySelector('#card-price').innerText
            let title = cartElement.querySelector('#card-title').innerText
            let img = cartElement.querySelector('#card-image')

            style = img.currentStyle || window.getComputedStyle(img, false),
            image = style.backgroundImage.slice(4, -1).replace(/"/g, "");
            !!image?image=style.backgroundImage.slice(4, -1).replace(/"/g, ""):image = img.src
            const cartCard = {
                title:title,
                price:price,
                image:image
            }
           
            cartList.push(cartCard)
            
            cartList.length?document.getElementById('cart-counter').style.display = 'flex':document.getElementById('cart-counter').style.display = 'none'
   
            window.localStorage.setItem('cart-card',JSON.stringify(cartList))
            document.getElementById('cart-counter').innerText = JSON.parse(window.localStorage.getItem('cart-card')).length
         
    })
}

}
addToCart()