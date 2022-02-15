let container=document.getElementById("container");
let sliderInner = container.querySelector('.main-section__slider__inner');
let sliderTrack = container.querySelector('#imgs_container')
let imgs_containers=document.getElementsByClassName("main-section__slider__image");
const dots = container.getElementsByClassName("main-section__slider__dots");
let imgs_count=imgs_containers.length;
let slideWidth = imgs_containers[0].offsetWidth,
current_img_index=0,
posInit = 0,
posX1 = 0,
posX2 = 0,
posY1 = 0,
posY2 = 0,
posFinal = 0,
transition = true,
nextTrf = 0,
prevTrf = 0,
lastTrf = --imgs_containers.length * slideWidth,
posThreshold = imgs_containers[0].offsetWidth * 0.35,
trfRegExp = /([-0-9.]+(?=px))/,
swipeStartTime =null,
swipeEndTime =null,
isSwipe = false,
isScroll = false,
allowSwipe = true,
getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${current_img_index * slideWidth}px, 0px, 0px)`;
  },
swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      swipeStartTime = Date.now();
      
      transition = true;

      nextTrf = (current_img_index + 1) * -slideWidth;
      prevTrf = (current_img_index - 1) * -slideWidth;


      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);
   
      sliderInner.classList.remove('grab');
      sliderInner.classList.add('grabbing');
    }
  },

  swipeAction = function() {

    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  },

  swipeEnd = function() {
     
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;
  
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    sliderInner.classList.add('grab');
    sliderInner.classList.remove('grabbing');

    if (allowSwipe) {
      swipeEndTime = Date.now();
      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
        if (posInit < posX1) {
            if(current_img_index === 0)
            {
                current_img_index = --imgs_containers.length;
               
            }else{
            current_img_index--;}
        } else if (posInit > posX1) {
            if(current_img_index === --imgs_containers.length)
            {
                current_img_index = 0;
               
            }else{
               
            current_img_index++;}
        }
       
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }
    var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
    dots[current_img_index].classList.add('active')
   
  },

  setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderInner.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
container.addEventListener('touchstart', swipeStart);
container.addEventListener('mousedown', swipeStart);

function setup(){
    let container_width=container.clientWidth;
   
    for(let i=0;i<imgs_count;i++){
        
        let element=imgs_containers[i];
        let new_left_pos=container_width*i;
        element.style.left=new_left_pos+"px";
        dots[i].addEventListener('click',onDotsClick,false)
    }
}


function onLeftButton(){

    current_img_index===0?current_img_index=imgs_count-1:--current_img_index;
    slide();
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    dots[current_img_index].classList.add('active')
}

function onRightButton(){
 
    current_img_index===imgs_count-1?current_img_index=0:current_img_index++;
    slide();
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    dots[current_img_index].classList.add('active')
}

function onDotsClick(e){

    current_img_index= e.target.id-1
    slide();
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            e.target.classList.add('active')
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





var video = document.getElementById("videoModal");

var btnVideo = document.getElementById("videoButton");

var exit = document.getElementsByClassName("close")[0];

btnVideo.onclick = function() {
  video.style.display = "block";
 
}
exit.onclick = function() {
  video.style.display = "none";
}

video.onclick = function(event) {
  if (event.target == video) {
    video.style.display = "none";
  }
  console.log("asdasd")
}