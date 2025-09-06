let menuIcons=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let sections=querySelectorAll("section");
let navLinks=querySelectorAll("header nav a")
menuIcons.onClick=()=>{
    menuIcons.classList.toggle('bx-x')
    menubar.classList.toggle('active')
}

window.onscroll=()=>{
sections.forEach(sec => {
    let top=window.scrollY;
    let offset=sec.offsetTop-100;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if (top=>offset && top<offset+height) {
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
        })
    }

    
});
}
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);