let mockData=[
    {id:0, price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:1, price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:2,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:3,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:4,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:5,price:"$15.50",image:"../assets/releaseImage3.jpg"},

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
        <p>ADD TO CART</p>
    </div>
</div></div>`
    }

    document.getElementById('card-container').innerHTML += str;
}
function renderMobile(mockData) {
    let str = '';

    for(let i=0;i<6;i++){
    str += `<div class="hover-release-card mobile">
    <img width="165px" src="${mockData[i].image}"/>
    <div class="hover-release-card">
        <div>
            <p id="card-price">${mockData[i].price}</p>
            <p id="card-title">ALLERGY HERBAL TEA BLEND BY VANA TISANES</p>
            <p class="add-btn">ADD TO CART</p> 
        </div>
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

addToWishList()