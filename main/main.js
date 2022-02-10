let container=document.getElementById("container");
let imgs_containers=document.getElementsByClassName("main-section__slider__image");
const dots = container.getElementsByClassName("main-section__slider__dots");
let imgs_count=imgs_containers.length;
let current_img_index=0;

console.log(dots)
function setup(){
    let container_width=container.clientWidth;

    for(let i=0;i<imgs_count;i++){
        dots[i].addEventListener('click',onDotsClick,false)
        let element=imgs_containers[i];
        let new_left_pos=container_width*i;
        element.style.left=new_left_pos+"px";
    }
}


function onLeftButton(){
    let container_width=container.clientWidth;
    current_img_index===0?current_img_index=imgs_count-1:current_img_index--;
        for(let i=0;i<imgs_count;i++){
            let element=imgs_containers[i];
            let new_left_pos=container_width*(i-current_img_index);
            element.style.left=new_left_pos+"px";
        }
        
}

function onRightButton(){
    let container_width=container.clientWidth;
    current_img_index===imgs_count-1?current_img_index=0:current_img_index++;
        for(let i=0;i<imgs_count;i++){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            dots[current_img_index].classList.add('active')

            let element=imgs_containers[i];
            
            let new_left_pos=-container_width*(current_img_index-i);
            element.style.left=new_left_pos+"px";
        }    
       
}

function onDotsClick(e){
    let container_width=container.clientWidth;
    current_img_index=e.target.id-1

  

        for(let i=0;i<imgs_count;i++){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            e.target.classList.add('active')
            let element=imgs_containers[i];
            let new_left_pos=-container_width*(current_img_index-i);
            element.style.left=new_left_pos+"px";
        }

}

setup();

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






const slider = document.querySelector('.main-section__slider__images'),
  slides = Array.from(document.querySelectorAll('.main-section__slider__image'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0


slides.forEach((slide, index) => {
  const slideImage = slide

  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mousemove', touchMove)
  slide.addEventListener('mouseleave', touchEnd)
})

window.addEventListener('resize', setPositionByIndex)

window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}