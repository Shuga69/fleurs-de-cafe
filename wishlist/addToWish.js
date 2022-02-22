function addToWishList(){

    let addWishButtons = document.getElementsByClassName('add-to-wishlist')
    JSON.parse(window.localStorage.getItem('wish-card'))? wishList = JSON.parse(window.localStorage.getItem('wish-card')):wishList=[];
    
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
            console.log(wishList.length)
            wishList.length?document.getElementById('wish-counter').style.display = 'flex':document.getElementById('wish-counter').style.display = 'none'
         
            window.localStorage.setItem('wish-card',JSON.stringify(wishList))
            document.getElementById('wish-counter').innerText = JSON.parse(window.localStorage.getItem('wish-card')).length
          
    })
}

}
addToWishList()