function onToggle(){
    let element = document.getElementById('toggle-menu')
    let toggleButton = document.getElementsByClassName('toggle-line')
    let toggleButtonMobile = document.getElementsByClassName('toggle-line-mobile')

    for(let i = 0;i<toggleButton.length;++i )
    toggleButton[i].classList.toggle("active")
    
    for(let i = 0;i<toggleButtonMobile.length;++i )
    toggleButtonMobile[i].classList.toggle("active")
  
   
    element.classList.toggle('active')
}

function closeCoupon(){
    document.getElementsByClassName('upper-header__coupon')[0].classList.add('disabled')
    document.getElementsByClassName('upper-header__coupon')[1].classList.add('disabled')
}
function searchClick(){
    let search = document.getElementById('search-input');
    search.style.width = "200px";
    search.style.backgroundColor = "transparent";
    search.style.borderBottom = "1px solid #E3E3E3";
    search.style.transition = "all 500ms cubic-bezier(0, 0.110, 0.35, 2)";
}




var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}