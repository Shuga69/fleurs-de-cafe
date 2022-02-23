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

