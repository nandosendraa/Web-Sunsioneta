window.onload = main;

function main(){
    for (i=1;i<=9;i++){
        document.getElementById(i).addEventListener('click',compra)
    }
}

function compra(){
    document.getElementById('audio').setAttribute('autoplay',true)
    document.getElementById('audio').removeAttribute('autoplay')
}