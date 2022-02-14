let mockData=[
    {id:0, price:"$15.50",image:"../assets/mockImage.png"},
    {id:1, price:"$15.50",image:"../assets/mockImage.png"},
    {id:2,price:"$15.50",image:"../assets/mockImage.png"},
    {id:3,price:"$15.50",image:"../assets/mockImage.png"},
   
 
]


function renderDesktop(mockData) {
    let str = '';
    
    document.getElementById('card-container').innerHTML = str;
    for(let i=0;i<mockData.length;i++){

    str += `<div class="hover-release-card desktop"><div style="background-image: url(${mockData[i].image})" class="newest-release__card__first">
    <div class="hover-release-card-action">
        <img src="../assets/Heart_icon.svg"/>
        <div>
            <p>${mockData[i].price}</p>
            <p>thermo mug</p>    
        </div>
        <p>ADD TO CART</p>
    </div>
</div></div>`
    }

    document.getElementById('card-container').innerHTML += str;
}
function renderMobile(mockData) {
    let str = '';

    for(let i=0;i<mockData.length;i++){
    str += `<div class="hover-release-card mobile">
    <img width="165px" src="${mockData[i].image}"/>
    <div class="hover-release-card">
        <div>
            <p>${mockData[i].price}</p>
            <p>thermo mug</p>
            <p class="add-btn">ADD TO CART</p> 
        </div>
    </div>
    </div>`
}
    document.getElementById('card-container').innerHTML += str;
}
renderDesktop(mockData);
renderMobile(mockData);
