
let wishList = JSON.parse(window.localStorage.getItem('wish-card'))
wishList.length?document.getElementById('wish-counter').style.display = 'flex':document.getElementById('wish-counter').style.display = 'none'
document.getElementById('wish-counter').innerText = wishList.length

function renderWishList(){
   
for(let i = 0;i<wishList.length;++i){   
      
let str = `<div id="wish-card${i}" class="wish-card">
<div class="wish-card-image"><div id="remove-button" class="product-remove-button"><img src="../assets/delete_icon.svg"/><p>Remove</p></div></div>
<h3 class="wish-card-title">${wishList[i].title}</h3>

<p class="wish-card-price">${wishList[i].price}</p>
<button class="wish-card-add">ADD TO CART</button>
</div>` 

document.getElementById('wish-container').innerHTML += str
document.getElementById(`wish-card${i}`).style.backgroundImage =`url('${wishList[i].image}'); background-repeat:no-repeat`
}
}
renderWishList()
let removeButtons = document.getElementsByClassName('product-remove-button')
for(let i = 0;i<wishList.length;++i){   
    removeButtons[i].addEventListener('click',()=>{
        wishList.splice(i,1)

        window.localStorage.setItem('wish-card',JSON.stringify(wishList))
        document.location.reload() 
       
    })
}