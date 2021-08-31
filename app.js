const parent =document.querySelector('.parent');
let inner = parent.innerHTML;
const div1 = document.querySelector('.sibling2').innerHTML;
const div2 = document.querySelector('.sibling3').innerHTML;
const divs = [div1, div2]
const next = document.querySelector('#next-button');
const prev = document.querySelector('#prev-button');
const url = ["'/images/desktop-image-hero-2.jpg'", "'/images/desktop-image-hero-3.jpg'"]
let i =0;

next.addEventListener('click', ()=>{
    
    if(i<divs.length){
        parent.innerHTML = divs[i];
        let result = url[i];
        document.querySelector('.homesection').style.backgroundImage= `url(${result})`;
        console.log()
        i++;
        return;
    }
})


prev.addEventListener('click', ()=>{
    i--;
    if(i<divs.length){
        parent.innerHTML = divs[i];
        let result = url[i];
        document.querySelector('.homesection').style.backgroundImage= `url(${result})`;

    }
    if(i<0){
        parent.innerHTML = inner;
        document.querySelector('.homesection').style.backgroundImage= `url(/images/desktop-image-hero-1.jpg)`;
        i++;
    }
})



//mob nav

const hmenu = document.querySelector('.hmenu');
const submenu = document.querySelector('.submenu');

hmenu.addEventListener('click', ()=>{
submenu.classList.toggle('d-none')
})

const clos = document.querySelector('.cross');

clos.addEventListener('click', ()=>{
    submenu.classList.add('d-none')
})