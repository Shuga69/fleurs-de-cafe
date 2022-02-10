let mockData=[
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {price:"$15.50",image:`../assets/releaseImage3.jpg`}
]



function renderDesktop(price,image) {
    let str = '';
    str = `<div class="hover-release-card desktop"><div style="background-image: url(../assets/releaseImage3.jpg)" class="newest-release__card__first">
    <div class="hover-release-card-action">
        <img src="../assets/Heart_icon.svg"/>
        <div>
            <p>${price}</p>
            <p>Dark city</p>    
        </div>
       
        <p>ADD TO CART</p>
    </div>
</div></div>`
console.log(str)
    document.getElementById('card-container').innerHTML += str;
}
function renderMobile() {
    let str = '';
    str = `<div class="hover-release-card mobile">
    <img width="165px" src="../assets/releaseImage2.jpg"/>
    <div class="hover-release-card">
       
        <div>
            <p>$15.50</p>
            
            <p>Dark city</p>   
            <p class="add-btn">ADD TO CART</p> 
        </div>
       
      
    </div>
    </div>`
console.log(str)
    document.getElementById('card-container').innerHTML += str;
}
for(let i = 0 ;i<15;++i){
renderDesktop();
renderMobile();
}