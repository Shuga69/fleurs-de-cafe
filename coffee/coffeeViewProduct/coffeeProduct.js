let slideIndex = 1;
let quontity = 1;
let quontityInput = document.getElementById('quontity-input')
let slides = document.getElementById('slides')
var startX
var startY
var endX
var endY
var treshold = 10000;
showSlides(slideIndex);

function handleTouch(start,end, cbL, cbR){
 
  var xDist = endX - startX;
  var yDist = endY - startY;

   if(endX - startX <= 0){
   
    plusSlides(1)
    }else{
      plusSlides(-1)
    }
}

slides.addEventListener('touchstart', function(event){

  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
 
  
})
 
slides.addEventListener('touchend', function(event){

  endX = event.changedTouches[0].clientX;
  endY = event.changedTouches[0].clientY;
   
  handleTouch(startX, endX)
  
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function minusQuontity(){
    quontity>1?quontity--:1;
    quontityInput.value = quontity
}
function addQuontity(){
    quontity++;
    quontityInput.value = quontity
}
function changeQuolity(){
    quontity = quontityInput.value
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function onCheckGrind(){
  var current = document.getElementsByClassName("grind ");
  current[0].className = current[0].className.replace(" active", "");
  document.getElementById('grind').classList.add("active")
}