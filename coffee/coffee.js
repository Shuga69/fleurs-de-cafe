let mockData=[
    {id:0, price:"$15.50",image:"../assets/releaseImage3.jpg"},
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

let elements_per_page = 6;
let pages_count = Math.ceil(mockData.length/elements_per_page);

function renderButton(pages_count, mockData ){
   let str='';
   let current_page = 0
  
    for (let i =1; i<=pages_count;++i){
        str+=`<button id="pagination-group-button" class="pagination-group-button">${i}</button>`   
    }
    
    let nextButton = `<button id="next-button" class="pagination-group-button-arrow"><img src="../assets/right-button-arrow.svg"/></button>`
    document.getElementById('pagination-group').innerHTML += str
    document.getElementById('pagination-group').innerHTML += nextButton
    let buttons = document.getElementsByClassName('pagination-group-button')
    let meta = pagination(mockData.length-1,1,elements_per_page,pages_count);
    renderDesktop(meta, mockData)
    renderMobile(meta,mockData)
    document.getElementById('next-button').addEventListener('click', ()=>{
        console.log(meta.currentPage!==meta.totalPages)
        if(meta.currentPage!==meta.totalPages){

        meta = pagination(mockData.length,meta.nextPage,elements_per_page,pages_count)
        renderDesktop(meta,mockData,true)
        console.log("next "+meta.currentPage)
        }
        else meta=pagination(mockData.length,meta.currentPage,elements_per_page,pages_count); renderDesktop(meta,mockData,true);
        }
        ,false)
  
    for(let i =1;i<=pages_count;++i)
    {
        let meta = pagination(mockData.length,i,elements_per_page,pages_count)
        buttons[current_page].addEventListener("click",()=>{renderDesktop(meta,mockData); console.log("num "+meta.currentPage); renderMobile(meta,mockData)} , false)
        current_page++;
        
    }
}
function renderDesktop(meta,mockData,next) {
    let str = '';
    let buttons = document.getElementsByClassName('pagination-group-button')
    
    let current = document.getElementsByClassName("active");
  
    current[1].className = current[1].className.replace("active", "");
    buttons[meta.currentPage-1].classList.add('active')
    
    document.getElementById('card-container').innerHTML = str;
    for(let i=meta.startIndex;i<meta.endIndex;i++){

    str += `<div class="hover-release-card desktop"><div style="background-image: url(${mockData[i].image})" class="newest-release__card__first">
    <div class="hover-release-card-action">
        <img src="../assets/Heart_icon.svg"/>
        <div>
            <p>${mockData[i].price}</p>
            <p>Dark city</p>    
        </div>
        <p>ADD TO CART</p>
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
    <img width="165px" src="${mockData[i].image}"/>
    <div class="hover-release-card">
        <div>
            <p>${mockData[i].price}</p>
            <p>Dark city</p>
            <p class="add-btn">ADD TO CART</p> 
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