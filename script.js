function swipe_left (){
    document.querySelector('.cont1').style = 'transform: translateX(-100%);transition:1s;'
    document.querySelector('.cont2').style = 'transform: translateX(-100%);transition:1s;'
    document.querySelector('.cont3').style = 'transform: translateX(-100%);transition:1s;'
    document.querySelector('.cont4').style = 'position:absolute;right:0%;transition:1s;'
}
function swipe_right(){
    document.querySelector('.cont1').style = 'transform: translateX(0%);transition:1s;'
    document.querySelector('.cont2').style = 'transform: translateX(0%);transition:1s;'
    document.querySelector('.cont3').style = 'transform: translateX(0%);transition:1s;'
    document.querySelector('.cont4').style = 'position:absolute;right:-33.33%;transition:1s;'
}