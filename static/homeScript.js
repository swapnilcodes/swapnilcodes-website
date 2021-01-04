let image= document.getElementById('main-logo');
const media= window.matchMedia('(max-width: 490px)');
let div= document.querySelector('.top');
let navHeading= document.getElementById('nav-heading');
let bold= document.querySelector('b');
let genXClubButton = document.getElementById('genxclub');
let genxclubUtube = document.getElementById('utube-genxclub');
let nav= document.querySelector('nav');
let myUtube= document.getElementById('my-utube');
if(media.matches){
       document.querySelector('#main').removeChild(navHeading);
       nav.removeChild(document.querySelector('#main'));
       div.removeChild(image);
       document.getElementById('heading').style.fontSize= '32px';
       document.getElementById('heading').innerText= 'Swapnil-Codes';
       document.getElementById('heading').style.textAlign= 'left';
       bold.style.display= 'block';
       bold.style.textAlign= 'right';
       bold.style.fontSize= '17px';
       bold.style.marginRight= '20px';
       bold.innerText= '-Its Swapnil Deshmane';
       genXClubButton.style.width= '100%';
       genxclubUtube.style.width= '100%';
       explore.style.width= '100%';

}

genXClubButton.addEventListener('click', function(){
       window.open('https://genxclub.github.io');
});

genxclubUtube.addEventListener('click', function(){
       window.open('https://www.youtube.com/channel/UCanU1LHS8jI4WxDhu_Me7Dw');
});

myUtube.addEventListener('click', function(){
       window.open('https://www.youtube.com/channel/UCE_wM_dLrKs5eT7PW3h-2jw');
});