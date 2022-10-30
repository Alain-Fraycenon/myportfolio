//JS :

// ajoute d'une classe navbarDark au moment du scroll de la navbar
const header = document.querySelector('.nav-bar');
/*
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
        document.querySelector('.nav-list ul').classList.add('active')
    }
    else {
        header.classList.remove('navbarDark');
        document.querySelector('.nav-list ul').classList.remove('active')
    }
}
*/
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-list ul').classList.toggle('active')
})

document.querySelectorAll('.nav-list ul li').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.nav-list ul').classList.remove('active')
    })
})



