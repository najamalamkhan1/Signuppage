let a =document.getElementById('hdn');
a.addEventListener('click', function(){
    a.innerHTML = "Welcome";
});
a.addEventListener('mouseleave', function(){
    a.innerHTML = "Signup for free";
});
let b = document.getElementById('ctnr');
b.addEventListener('click', function () {
    b.style.backgroundColor = 'white';
    b.style.border = '2px solid white';
    // b.style.animation = "all 2s";

});
b.addEventListener('mouseleave', function () {
    b.style.backgroundColor = 'transparent';
    // b.style.border = 'none';
});
let c = document.getElementsByClassName('inp');
c[0].addEventListener('click',function(){
    c[0].style.backgroundColor = 'black';
    c[1].style.backgroundColor = 'black';
    c[2].style.backgroundColor = 'black';
    c[3].style.backgroundColor = 'black';
    c[4].style.backgroundColor = 'black';

    c[0].style.color = 'white';
    c[1].style.color = 'white';
    c[2].style.color = 'white';
    c[3].style.color = 'white';
    c[4].style.color = 'white';
});
c[0].addEventListener('mouseleave',function(){
    c[0].style.backgroundColor = 'white';
    c[1].style.backgroundColor = 'white';
    c[2].style.backgroundColor = 'white';
    c[3].style.backgroundColor = 'white';
    c[4].style.backgroundColor = 'white';

    c[0].style.color = 'black';
    c[1].style.color = 'black';
    c[2].style.color = 'black';
    c[3].style.color = 'black';
    c[4].style.color = 'black';
});
let d = document.getElementById('btn');