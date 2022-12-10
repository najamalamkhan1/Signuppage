let fname;
let lname;
let email;
let password;
let a = document.getElementsByClassName('inp');
function btn() {
    if (a[0] == fname) {
        document.write(fname);
    } else if (a[1] == lname) {
        document.write(lname);
    } else if (a[2] == email) {
        document.write(email);
    } else if (a[3] == password) {
        document.write(password);
    } else if (a[4] == password) {
        document.write(password);
    } else {
        document.write('Work in progress sorry for inconvenience :)');
    }
}
// btn();