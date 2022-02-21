const mockData=[
    {id:0, price:"$9.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:1, price:"$12.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:2, price:"$16.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:3, price:"$14.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:4, price:"$13.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:5, price:"$11.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:6, price:"$10.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:7, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:8, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:9, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:10, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:11, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:12, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:13, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:14, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:15, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:16, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:17, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:18, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:19, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:20, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:21, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:22, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:23, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:24, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:25, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:26, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:27, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:28, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:29, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:30, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:31, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:32, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:33, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:34, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
    {id:35, price:"$15.50",image:"../assets/mockImage3.png", title:"DARK CITY"},
]

let elements_per_page = 15;
let pages_count = Math.ceil(mockData.length/elements_per_page);
let current_page = 0;
let more_button_counter = 0;
let button_per_page = 4;
if (window.screen.width <= 768 ) {
    button_per_page = 3;
  }
 if (window.screen.width <= 320 ) {
    button_per_page = 2;
  }
function renderButton(pages_count, mockData ){
   let str='';
   let prevButton = `<button id="prev-button" class="pagination-group-button-arrow left disabled"><img src="../assets/right-button-arrow.svg"/></button>`
   
    for (let i =1; i<=pages_count;++i){
        if(i<=button_per_page)
        str+=`<button id="pagination-group-button " class="pagination-group-button">${i}</button>`  
        else
        str+=`<button id="pagination-group-button" class="pagination-group-button disabled">${i}</button>`  
    }
    let prevMorePageButton = `<button id="prev-more-button" class="pagination-group-button-dots left disabled">...</button>`;
    
    let morePageButton = `<button id="more-button" class="pagination-group-button-dots">...</button>`;
    let nextButton = `<button id="next-button" class="pagination-group-button-arrow"><img src="../assets/right-button-arrow.svg"/></button>`
    document.getElementById('pagination-group').innerHTML += prevButton
    document.getElementById('pagination-group').innerHTML += prevMorePageButton
    document.getElementById('pagination-group').innerHTML += str
    document.getElementById('pagination-group').innerHTML += morePageButton
    document.getElementById('pagination-group').innerHTML += nextButton
  
    let buttons = document.getElementsByClassName('pagination-group-button')
    let meta = pagination(mockData.length-1,1,elements_per_page,pages_count);
    renderDesktop(meta, mockData)
    renderMobile(meta,mockData)

    document.getElementById('prev-more-button').addEventListener('click', ()=>{
        prevMoreButtonClick(buttons)
        current_page=more_button_counter;
        meta = pagination(mockData.length,current_page+1,elements_per_page,pages_count)
        renderDesktop(meta,mockData)
        let current = document.getElementsByClassName("active");
        current[1].className = current[1].className.replace("active", "");
        buttons[current_page].classList.add('active')
    }
         ,false)
    document.getElementById('more-button').addEventListener('click', ()=>{
        moreButtonClick(buttons);
        current_page=more_button_counter;
        meta = pagination(mockData.length,current_page+1,elements_per_page,pages_count)
        renderDesktop(meta,mockData)
        renderMobile(meta,mockData)
        let current = document.getElementsByClassName("active");
        current[1].className = current[1].className.replace("active", "");
        buttons[current_page].classList.add('active')
    }
         ,false)

  document.getElementById('prev-button').addEventListener('click', ()=>{
       if(current_page<=more_button_counter)
       prevMoreButtonClick(buttons)
        if(current_page!==meta.totalPages){
        meta = pagination(mockData.length,current_page,elements_per_page,pages_count)
        renderDesktop(meta,mockData,true)
        renderMobile(meta,mockData)
        }   
    }
        ,false)
    document.getElementById('next-button').addEventListener('click', ()=>{
      
       if(current_page+1>=more_button_counter+button_per_page)
       moreButtonClick(buttons);
        if(current_page!==meta.totalPages){
        meta = pagination(mockData.length,current_page+2,elements_per_page,pages_count)
        renderDesktop(meta,mockData,true)
        renderMobile(meta,mockData)
        }   
    }
        ,false)
  
    for(let i =1;i<=pages_count;++i)
    {
        let meta = pagination(mockData.length,i,elements_per_page,pages_count)
        buttons[current_page].addEventListener("click",()=>{renderDesktop(meta,mockData); renderMobile(meta,mockData)} , false)
        current_page++;
        
    }
    current_page=0;
}
function moreButtonClick(buttons){

    if(more_button_counter+button_per_page<pages_count){
        for (let i = more_button_counter+button_per_page*2; i<pages_count;++i){
            buttons[i]?.classList.add('disabled')
        }
        for (let i = more_button_counter+button_per_page; i<more_button_counter+button_per_page*2;++i){
            buttons[i]?.classList.remove('disabled')
        }
        for (let i = more_button_counter; i<more_button_counter+button_per_page;++i){
            buttons[i]?.classList.add('disabled')
        }
        more_button_counter+=button_per_page;
        
       
        if(more_button_counter+button_per_page>=pages_count){
            document.getElementById('more-button').classList.add('disabled')
        }
       
        if(more_button_counter>0)
        {
            document.getElementById('prev-button').classList.remove('disabled')
        }
        if(more_button_counter+button_per_page>button_per_page){
            document.getElementById('prev-more-button').classList.remove('disabled')
        }
}
}
function prevMoreButtonClick(buttons){
    
    if(more_button_counter-button_per_page>=0){
       
        for (let i = more_button_counter; i<pages_count;++i){
            buttons[i]?.classList.add('disabled')
        }
        for (let i = more_button_counter-button_per_page; i<more_button_counter;++i){
            buttons[i]?.classList.remove('disabled')
        }
        for (let i = more_button_counter; i<more_button_counter-button_per_page;++i){
            buttons[i]?.classList.add('disabled')
        }
        more_button_counter-=button_per_page;
       
        if(more_button_counter===0){
            document.getElementById('prev-more-button').classList.add('disabled')
        }
        if(more_button_counter===0)
        {
            document.getElementById('prev-button').classList.add('disabled')
        }
        if(more_button_counter>0){
            document.getElementById('prev-more-button').classList.remove('disabled')
        }
        if(more_button_counter+button_per_page<pages_count){
            document.getElementById('more-button').classList.remove('disabled')
        }
}
}
function renderDesktop(meta,mockData) {
    let str = '';
    let buttons = document.getElementsByClassName('pagination-group-button')
    current_page = meta.currentPage-1; 
    let current = document.getElementsByClassName("active");
   
    current[1]?current[1].className = current[1].className.replace("active", ""):null;
   
    buttons[current_page].classList.add('active')
    
    document.getElementById('card-container').innerHTML = str;
    for(let i=meta.startIndex;i<meta.endIndex;i++){

    str += `<div class="hover-release-card desktop"><div id="card-image" style="background-image: url(${mockData[i].image})" class="newest-release__card__first">
    <div class="hover-release-card-action">
        <button id="add-to-wishlist" class="add-to-wishlist"><img src="../assets/Heart_icon.svg"/></button>
        <div>
            <p id="card-price">${mockData[i].price}</p>
            <p id="card-title">${mockData[i].title}</p>    
        </div>
        <button id="add-cart-button" class="add-btn">ADD TO CART</p>
    </div>
</div></div>`
        
    }
   
   
    document.getElementById('card-container').innerHTML += str;
}

function renderMobile(meta,mockData) {
    let str = '';
    let buttons = document.getElementsByClassName('pagination-group-button')
   
    let current = document.getElementsByClassName("active");
  
    current[1].className = current[1].className.replace("active", "");
    buttons[meta.currentPage-1].classList.add('active')

    for(let i=meta.startIndex;i<meta.endIndex;i++){
    str += `<div class="hover-release-card mobile">
    <button class="add-to-wishlist" id="add-to-wishlist"> <img id="card-image" width="165px" src="${mockData[i].image}"/></button>
    <div class="hover-release-card">
        <div>
            <p>${mockData[i].price}</p>
            <p>${mockData[i].title}</p>    
            <button id="add-cart-button" class="add-btn">ADD TO CART</p> 
        </div>
    </div>
    </div>`
}
    document.getElementById('card-container').innerHTML += str;
}
renderButton(pages_count,mockData);

function pagination(
    totalItems,
    currentPage,
    pageSize,
    maxPages
    ){
        let totalPages = Math.ceil(totalItems / pageSize);
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage, endPage;
        if (totalPages <= maxPages) {
           
            startPage = 1;
            endPage = totalPages;
        } else {
            
            let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
            let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
              
                startPage = 1;
                endPage = maxPages;
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
               
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            } else {
               
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize, totalItems);
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        let nextPage = currentPage+1
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages,
            nextPage: nextPage
        };
    }


    
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
    addToCart()
    addToWishList()