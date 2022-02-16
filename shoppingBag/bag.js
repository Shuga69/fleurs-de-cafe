let quontity = 1;
let quontityInput = document.getElementById('quontity-input')

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