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

    str += `<div class="hover-release-card desktop"><div style="background-image: url(${mockData[i].image})" class="newest-release__card__first">
    <div class="hover-release-card-action">
        <img src="../assets/Heart_icon.svg"/>
        <div>
            <p>${mockData[i].price}</p>
            <p>ALLERGY HERBAL TEA BLEND BY VANA TISANES</p>    
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
            <p>${mockData[i].price}</p>
            <p>ALLERGY HERBAL TEA BLEND BY VANA TISANES</p>
            <p class="add-btn">ADD TO CART</p> 
        </div>
    </div>
    </div>`
}
    document.getElementById('card-container').innerHTML += str;
}
renderDesktop(mockData);
renderMobile(mockData);