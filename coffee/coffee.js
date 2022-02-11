let mockData=[
    {id:1, price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:2,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:3,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:4,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:5,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:6,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:7,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:8,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:9,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:10,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:11,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:12,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:13,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:14,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:15,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:16,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:17,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:18,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:19,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:20,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:21,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:22,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:23,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:24,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:25,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:26,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:27,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:28,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:29,price:"$15.50",image:`../assets/releaseImage3.jpg`},
    {id:30,price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:31,price:"$15.50",image:`../assets/releaseImage3.jpg`},
]

let elements_per_page = 5;
let pages_count = Math.ceil(mockData.length/elements_per_page);

function renderButton(pages_count){
    let str='';
    for (let i =1; i<=pages_count;++i)
    str+=`<button class="pagination-group-button">${i}</button>`
    
    document.getElementById('pagination-group').innerHTML += str
}
function renderDesktop(price,image) {
    let str = '';
    str = `<div class="hover-release-card desktop"><div style="background-image: url(${image})" class="newest-release__card__first">
    <div class="hover-release-card-action">
        <img src="../assets/Heart_icon.svg"/>
        <div>
            <p>${price}</p>
            <p>Dark city</p>    
        </div>
       
        <p>ADD TO CART</p>
    </div>
</div></div>`

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

    document.getElementById('card-container').innerHTML += str;
}
renderButton(pages_count);
for(let i = 0 ;i<15;++i){
renderDesktop(mockData[i].price,mockData[i].image);
renderMobile();
}