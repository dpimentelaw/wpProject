function changeBG(){
    var navbar = document.getElementById('navbar');
    var scrollValue= window.scrollY;
    if(scrollValue >700){
        navbar.classList.remove('my-nav')
        navbar.classList.add('my-navbg')
    } else {
        navbar.classList.add('my-nav');
        navbar.classList.remove('my-navbg')
    }
}
window.addEventListener('scroll', changeBG)
