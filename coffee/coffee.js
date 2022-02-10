function renderDesktop() {
    let str = '';
    str = `<div class="hover-release-card desktop"><div style="background-image: url(../assets/releaseImage3.jpg)" class="newest-release__card__first">
    <div class="hover-release-card-action">
        <img src="../assets/Heart_icon.svg"/>
        <div>
            <p>$15.50</p>
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
        <img  src="../assets/Heart_icon.svg"/>
        <div>
            <p>$15.50</p>
            <p>Dark city</p>    
        </div>
       
        <p>ADD TO CART</p>
    </div>
    </div>`
console.log(str)
    document.getElementById('card-container').innerHTML += str;
}
for(let i = 0 ;i<15;++i){
renderDesktop();
renderMobile();
}