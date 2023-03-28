window.onload = main;
var amagat = false;

function main(){
    document.getElementById('menu').addEventListener('click',burger)
}

function burger(){
    if (!amagat)
        document.getElementById('nav').setAttribute('class','d-none')
    else
        document.getElementById('nav').setAttribute('class','')
}