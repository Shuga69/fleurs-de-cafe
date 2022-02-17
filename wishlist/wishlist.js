const mockData = [
    {id:1,title:"ROMA ESPRESSO BLEND",subtitle:"Southern Italian Roast, 2lb, whole beans",price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:2,title:"ROMA ESPRESSO BLEND",subtitle:"Southern Italian Roast, 2lb, whole beans",price:"$15.50",image:"../assets/releaseImage3.jpg"},
    {id:3,title:"ROMA ESPRESSO BLEND",subtitle:"Southern Italian Roast, 2lb, whole beans",price:"$15.50",image:"../assets/releaseImage3.jpg"},
]

{/* <div class="wish-card">
                    <div class="wish-card-image"><div class="product-remove-button desktop"><img src="../assets/delete_icon.svg"/><p>Remove</p></div></div>
                    <h3 class="wish-card-title">ROMA ESPRESSO BLEND</h3>
                    <p class="wish-card-subtitle">Southern Italian Roast, 2lb, whole beans</p>
                    <p class="wish-card-price">$15.50</p>
                    <button class="wish-card-add">ADD TO CART</button>
                </div> */}

for(let i = 0;i<mockData.length;++i){             
let str = `<div id="wish-card${i}" class="wish-card">
<div class="wish-card-image"><div class="product-remove-button"><img src="../assets/delete_icon.svg"/><p>Remove</p></div></div>
<h3 class="wish-card-title">${mockData[i].title}</h3>
<p class="wish-card-subtitle">${mockData[i].subtitle}</p>
<p class="wish-card-price">${mockData[i].price}</p>
<button class="wish-card-add">ADD TO CART</button>
</div>` 

document.getElementById('wish-container').innerHTML += str
document.getElementById(`wish-card${i}`).style.backgroundImage =`url('${mockData[i].image}'); background-repeat:no-repeat`
}