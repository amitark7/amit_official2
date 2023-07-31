const hamburger=document.querySelector('.hamburger');
const Nav =document.querySelector('ul');

hamburger.addEventListener('click',()=>{
    Nav.classList.toggle('active');

    let hamChild=hamburger.firstElementChild;
    if(Nav.classList.contains('active'))
    {
        hamChild.classList.replace('fa-bars','fa-xmark');
    }
    else{
        hamChild.classList.replace('fa-xmark','fa-bars');
    }
})