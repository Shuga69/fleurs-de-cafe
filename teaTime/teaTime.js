let mockData=[
    {id:0, price:"$15.50",image:"../assets/releaseImage3.jpg",title:"Dark city"},
    {id:1, price:"$15.50",image:"../assets/releaseImage3.jpg",title:"Dark city"},
    {id:2,price:"$15.50",image:"../assets/releaseImage3.jpg",title:"Dark city"},
    {id:3,price:"$15.50",image:"../assets/releaseImage3.jpg",title:"Dark city"},
    {id:4,price:"$15.50",image:"../assets/releaseImage3.jpg",title:"Dark city"},
    {id:5,price:"$15.50",image:"../assets/releaseImage3.jpg",title:"Dark city"},

]


function renderDesktop(mockData) {
    let str = '';
    
    document.getElementById('card-container').innerHTML = str;
    for(let i=0;i<6;i++){

    str += `<div class="hover-release-card desktop"><div id="card-image" style="background-image: url(${mockData[i].image})" class="newest-release__card__first">
    <div class="hover-release-card-action">
    <button id="add-to-wishlist" class="add-to-wishlist"><img src="../assets/Heart_icon.svg"/></button>
        <div>
            <p id="card-price">${mockData[i].price}</p>
            <p id="card-title">ALLERGY HERBAL TEA BLEND BY VANA TISANES</p>    
        </div>
        <button id="add-cart-button" class="add-btn">ADD TO CART</button>
    </div>
</div></div>`
    }

    document.getElementById('card-container').innerHTML += str;
}
function renderMobile(mockData) {
    let str = '';

    for(let i=0;i<mockData.length;i++){
  
    str+=`<div class="hover-release-card mobile">
    <div> <img id="card-image" width="165px" src="${mockData[i].image}"/></div>
    
    <div class="hover-release-card__inner">
   
        <div class="hover-release-card-text">
            <p id="card-price">${mockData[i].price}</p>
            <p id="card-title">${mockData[i].title}</p>    
            <button id="add-cart-button" class="add-btn">ADD TO CART</p> 
        </div>
        <button id="add-to-wishlist" class="add-to-wishlist-mobile"><img src="../assets/Heart_icon.svg"/></button>
    </div>
    </div>`
}
    document.getElementById('card-container').innerHTML += str;
}

renderDesktop(mockData);
renderMobile(mockData);

function addToWishList(){

    let addWishButtons = document.getElementsByClassName('add-to-wishlist')
    JSON.parse(window.localStorage.getItem('wish-card'))? wishList = JSON.parse(window.localStorage.getItem('wish-card')):wishList=[];
    console.log("123")
    document.getElementById('wish-counter').innerText = wishList.length
 
    for(let item of addWishButtons){
       
        item.addEventListener("click",function(event){
            let wishElemnet = event.target.parentElement.parentElement.parentElement.parentElement;
            let price = wishElemnet.querySelector('#card-price').innerText
            let title = wishElemnet.querySelector('#card-title').innerText
          
            let img = wishElemnet.querySelector('#card-image')
            style = img.currentStyle || window.getComputedStyle(img, false),
            image = style.backgroundImage.slice(4, -1).replace(/"/g, "");
         
            const wishCard = {
                title:title,
                price:price,
                image:image
            }
           
            wishList.push(wishCard)
       
            wishList.length?document.getElementById('wish-counter').style.display = 'flex':document.getElementById('wish-counter').style.display = 'none'
         
            window.localStorage.setItem('wish-card',JSON.stringify(wishList))
            document.getElementById('wish-counter').innerText = JSON.parse(window.localStorage.getItem('wish-card')).length
            console.log(window.localStorage.getItem('wish-card'))
    })
}

}
function addToCart(){

       
    let addCartButtons = document.getElementsByClassName('add-btn')
    JSON.parse(window.localStorage.getItem('cart-card'))? cartList = JSON.parse(window.localStorage.getItem('cart-card')):cartList=[];
   
    document.getElementById('cart-counter').innerText = cartList.length

    for(let item of addCartButtons){
      
        item.addEventListener("click",function(event){
            let cartElement = event.target.parentElement.parentElement.parentElement;
            let price = cartElement.querySelector('#card-price').innerText
            let title = cartElement.querySelector('#card-title').innerText
           console.log(cartElement)
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
            console.log(window.localStorage.getItem('cart-card'))
    })
}

}
addToWishList()
addToCart()