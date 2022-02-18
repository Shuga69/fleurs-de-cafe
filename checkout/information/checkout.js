function openDrop(){
    document.getElementById('drop-down').classList.toggle('open')
    document.getElementById('drop-down').classList.contains('open')?
    document.getElementById('arrow-drop').style.content = "url(../../assets/upIcon.svg)":
    document.getElementById('arrow-drop').style.content = "url(../../assets/drop-down-icon.svg)"
}