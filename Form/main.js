let a = document.getElementById('hdn');
a.addEventListener('click', function () {
    a.innerHTML = "Welcome";
});
a.addEventListener('mouseleave', function () {
    a.innerHTML = "Signup for free";
});
let b = document.getElementById('ctnr');
b.addEventListener('mouseover', function () {
    a.style.color = 'black';
    b.style.backgroundColor = 'white';
    b.style.border = '2px solid white';
    b.style.boxShadow = '-10px -10px black';

});
b.addEventListener('mouseleave', function () {
    b.style.backgroundColor = 'black';
    a.style.color = 'white';
    b.style.boxShadow = '10px 10px white';
});
let c = document.getElementsByClassName('inp');
c[0].addEventListener('click', function () {
    c[0].style.backgroundColor = 'black';
    c[0].style.color = 'white';
});
c[1].addEventListener('click', function () {
    c[1].style.backgroundColor = 'black';
    c[1].style.color = 'white';
});
c[2].addEventListener('click', function () {
    c[2].style.backgroundColor = 'black';
    c[2].style.color = 'white';
});
c[3].addEventListener('click', function () {
    c[3].style.backgroundColor = 'black';
    c[3].style.color = 'white';
});
c[4].addEventListener('click', function () {
    c[4].style.backgroundColor = 'black';
    c[4].style.color = 'white';
});
c[0].addEventListener('mouseleave', function () {
    c[0].style.backgroundColor = 'white';
    c[0].style.color = 'black';
});
c[1].addEventListener('mouseleave', function () {
    c[1].style.backgroundColor = 'white';
    c[1].style.color = 'black';
});
c[2].addEventListener('mouseleave', function () {
    c[2].style.backgroundColor = 'white';
    c[2].style.color = 'black';
});
c[3].addEventListener('mouseleave', function () {
    c[3].style.backgroundColor = 'white';
    c[3].style.color = 'black';
});
c[4].addEventListener('mouseleave', function () {
    c[4].style.backgroundColor = 'white';
    c[4].style.color = 'black';
});
let d = document.getElementById('btn');
d.addEventListener('click', function () {
    d.innerHTML = "Submit";
    d.innerHTML = alert("Information Submitted Successfully");
    // d.style.backgroundColor = "white";

});
d.addEventListener('mouseleave',function(){
    d.innerHTML = 'Submit';
    d.style.color = 'white';
})