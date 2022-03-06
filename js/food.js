let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

window.onclick = function() {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

window.onscroll= () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active')
    }else{
        document.querySelector('#scroll-top').classList.remove('active')
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut (){
    setInterval(loader,3000);
}
window.onload = fadeOut;


let myIcons = document.querySelectorAll('.bx-star');

myIcons.forEach(e => e.onclick = function (){
    if (this.classList.contains("bx-star")) {
        this.classList.toggle("bx-star");
        this.classList.toggle("bxs-star");
      
      }
})

