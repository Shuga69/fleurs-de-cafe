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




