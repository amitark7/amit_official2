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


const slides=document.querySelectorAll('.slide');
let counter=0;
slides.forEach(
    (slide,index) =>{
    slide.style.left =`${index * 100}%`
}
)

const goPrev=()=>{
    counter--;
    slideImage();
}

const goNext=()=>{
    counter++;
    if(counter>4){
        counter=0;
    }
    slideImage();
    console.log(counter)
}

const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}

setInterval(()=>{
    counter++;
    if(counter>4){
        counter=0;
    }
    slideImage();
},1500)