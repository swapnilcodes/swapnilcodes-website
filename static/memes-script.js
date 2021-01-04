const media = window.matchMedia('(max-width: 490px)');
const img= document.querySelector('img');
const navHeaing= document.getElementById('nav-heading');
const main= document.getElementById('main');
const nav= document.querySelector('nav');
if(media.matches){
    main.removeChild(navHeaing);
    nav.removeChild(main);
    img.style.width= '95%';
    img.style.height= '400px';
    
}