// let fname;
// let lname;
// let email;
// let password;
// let a = document.getElementsByClassName('inp');
// function btn() {
//     if (a[0] == fname) {
//         document.write(fname);
//     } else if (a[1] == lname) {
//         document.write(lname);
//     } else if (a[2] == email) {
//         document.write(email);
//     } else if (a[3] == password) {
//         document.write(password);
//     } else if (a[4] == password) {
//         document.write(password);
//     } else {
//         document.write('Work in progress sorry for inconvenience :)');
//     }
// }
// btn();

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
    b.style.animation = "all 2s";

})
b.addEventListener('mouseleave', function () {
    b.style.backgroundColor = 'transparent';
    // b.style.border = 'none';
});
let c = document.getElementsByClassName('inp');
let d = document.getElementById('btn');