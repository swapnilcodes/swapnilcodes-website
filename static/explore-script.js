// Media Queries
let navHeading = document.getElementById('nav-heading');
const media = window.matchMedia('(max-width: 490px)');

if (media.matches) {
    document.querySelector('#main').removeChild(navHeading);
    nav.removeChild(document.querySelector('#main'));
    document.querySelector('.recent-container').style.width = '90%';
    document.querySelector('.recent-container').style.marginLeft = 'auto';
    document.querySelector('.recent-container').style.marginRight = 'auto';

}


// Recently Visited Logic
    const recent_container = document.querySelector('.recent');
    if (localStorage.length == 1) {
        let recent1 = document.createElement('h4');
        recent1.className = 'recent-item';
        recent1.innerText = localStorage.getItem('recent1');
        recent_container.appendChild(recent1);
    }
    if (localStorage.length == 2) {
        let recent1 = document.createElement('h4');
        recent1.className = 'recent-item';
        recent1.innerText = localStorage.getItem('recent2');
        recent_container.appendChild(recent1);
        let recent2 = document.createElement('h4');
        recent2.className = 'recent-item';
        recent2.innerText = localStorage.getItem('recent1');
        recent_container.appendChild(recent2);
    }
    if (localStorage.length == 3) {
        let recent1 = document.createElement('h4');
        recent1.className = 'recent-item';
        recent1.innerText = localStorage.getItem('recent3');
        recent_container.appendChild(recent1);
        let recent2 = document.createElement('h4');
        recent2.className = 'recent-item';
        recent2.innerText = localStorage.getItem('recent2');
        recent_container.appendChild(recent2);
        let recent3 = document.createElement('h4');
        recent3.className = 'recent-item';
        recent3.innerText = localStorage.getItem('recent1');
    }
    if (localStorage.length == 4) {
        let recent1 = document.createElement('h4');
        recent1.className = 'recent-item';
        recent1.innerText = localStorage.getItem('recent4');
        recent_container.appendChild(recent1);
        let recent2 = document.createElement('h4');
        recent2.className = 'recent-item';
        recent2.innerText = localStorage.getItem('recent3');
        recent_container.appendChild(recent2);
        let recent3 = document.createElement('h4');
        recent3.className = 'recent-item';
        recent3.innerText = localStorage.getItem('recent2');
        recent_container.appendChild(recent3);
        let recent4 = document.createElement('h4');
        recent4.className = 'recent-item';
        recent4.innerText = localStorage.getItem('recent1');
    }
    if (localStorage.length == 5) {
        let recent1 = document.createElement('h4');
        recent1.className = 'recent-item';
        recent1.innerText = localStorage.getItem('recent5');
        recent_container.appendChild(recent1);
        let recent2 = document.createElement('h4');
        recent2.className = 'recent-item';
        recent2.innerText = localStorage.getItem('recent4');
        recent_container.appendChild(recent2);
        let recent3 = document.createElement('h4');
        recent3.className = 'recent-item';
        recent3.innerText = localStorage.getItem('recent3');
        recent_container.appendChild(recent3);
        let recent4 = document.createElement('h4');
        recent4.className = 'recent-item';
        recent4.innerText = localStorage.getItem('recent2');
        recent_container.appendChild(recent4);
        let recent5 = document.createElement('h4');
        recent5.innerText = localStorage.getItem('recent1');
        recent5.className = 'recent-item';
        recent_container.appendChild(recent5);
    }

    // Button Logics
    let myUtube = document.getElementById('my-youtube');
    myUtube.addEventListener('click', function () {
        window.open('https://www.youtube.com/channel/UCE_wM_dLrKs5eT7PW3h-2jw');

        if (localStorage.getItem('recent1') == null) {
            localStorage.setItem('recent1', 'My Youtube Channel');
        } else if (localStorage.getItem('recent2') == null) {
            localStorage.setItem('recent2', 'My Youtube Channel');
        } else if (localStorage.getItem('recent3') == null) {
            localStorage.setItem('recent3', 'My Youtube Channel');
        } else if (localStorage.getItem('recent4') == null) {
            localStorage.setItem('recent4', 'My Youtube Channel');
        } else if (localStorage.getItem('recent5') == null) {
            localStorage.setItem('recent5', 'My Youtube Channel');
        } else {
            localStorage.setItem('recent1', localStorage.getItem('recent2'));
            localStorage.setItem('recent2', localStorage.getItem('recent3'));
            localStorage.setItem('recent3', localStorage.getItem('recent4'));
            localStorage.setItem('recent4', localStorage.getItem('recent5'));
            localStorage.setItem('recent5', "My Youtube Channel");
        }





        const recent_container = document.querySelector('.recent');
        if (localStorage.length == 1) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent1);
        }
        if (localStorage.length == 2) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent2);
        }
        if (localStorage.length == 3) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent2');
            recent2.id = 'recent-2';
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.id = 'recent-1';
            recent3.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent3);
        }
        if (localStorage.length == 4) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent4);
        }
        if (localStorage.length == 5) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent5');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent4);
            let recent5 = document.createElement('h4');
            recent5.innerText = localStorage.getItem('recent1');
            recent5.className = 'recent-item';
            recent_container.appendChild(recent5);
        }
    });
    let myInsta = document.getElementById('my-insta');
    myInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/while_true_coder4782/');


        if (localStorage.getItem('recent1') == null) {
            localStorage.setItem('recent1', 'My Instagram Page');
        } else if (localStorage.getItem('recent2') == null) {
            localStorage.setItem('recent2', 'My Instagram Page');
        } else if (localStorage.getItem('recent3') == null) {
            localStorage.setItem('recent3', 'My Instagram Page');
        } else if (localStorage.getItem('recent4') == null) {
            localStorage.setItem('recent4', 'My Instagram Page');
        } else if (localStorage.getItem('recent5') == null) {
            localStorage.setItem('recent5', 'My Instagram Page');
        } else {
            localStorage.setItem('recent1', localStorage.getItem('recent2'));
            localStorage.setItem('recent2', localStorage.getItem('recent3'));
            localStorage.setItem('recent3', localStorage.getItem('recent4'));
            localStorage.setItem('recent4', localStorage.getItem('recent5'));
            localStorage.setItem('recent5', "My Instagram Page");
        }





        const recent_container = document.querySelector('.recent');
        if (localStorage.length == 1) {
            recent_container.inerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent1');
            recent_container.appendChild('recent1');
        }
        if (localStorage.length == 2) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent2);
        }
        if (localStorage.length == 3) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent3);
        }
        if (localStorage.length == 4) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent4);
        }
        if (localStorage.length == 5) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent5');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent4);
            let recent5 = document.createElement('h4');
            recent5.innerText = localStorage.getItem('recent1');
            recent5.className = 'recent-item';
            recent_container.appendChild(recent5);
        }
    });
    let genxUtube = document.getElementById('genx-utube');
    genxUtube.addEventListener('click', function () {

        window.open('https://www.youtube.com/channel/UCanU1LHS8jI4WxDhu_Me7Dw')

        if (localStorage.getItem('recent1') == null) {
            localStorage.setItem('recent1', "Genxclub's Youtube Channel");
        } else if (localStorage.getItem('recent2') == null) {
            localStorage.setItem('recent2', "Genxclub's Youtube Channel");
        } else if (localStorage.getItem('recent3') == null) {
            localStorage.setItem('recent3', "Genxclub's Youtube Channel");
        } else if (localStorage.getItem('recent4') == null) {
            localStorage.setItem('recent4', "Genxclub's Youtube Channel");
        } else if (localStorage.getItem('recent5') == null) {
            localStorage.setItem('recent5', "Genxclub's Youtube Chanel");
        } else {
            localStorage.setItem('recent1', localStorage.getItem('recent2'));
            localStorage.setItem('recent2', localStorage.getItem('recent3'));
            localStorage.setItem('recent3', localStorage.getItem('recent4'));
            localStorage.setItem('recent4', localStorage.getItem('recent5'));
            localStorage.setItem('recent5', "Genxclub's Youtube Channel");
        }





        const recent_container = document.querySelector('.recent');
        if (localStorage.length == 1) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent1);
        }
        if (localStorage.length == 2) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent2);
        }
        if (localStorage.length == 3) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent3);
        }
        if (localStorage.length == 4) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent4);
        }
        if (localStorage.length == 5) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent5');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent4);
            let recent5 = document.createElement('h4');
            recent5.innerText = localStorage.getItem('recent1');
            recent5.className = 'recent-item';
            recent_container.appendChild(recent5);
        }
    });

    let genxInsta = document.getElementById('genx-insta');
    genxInsta.addEventListener('click', function () {
        window.open('https://www.instagram.com/genxclub/');

        if (localStorage.getItem('recent1') == null) {
            localStorage.setItem('recent1', "Genxclub's Instagram Page ");
        } else if (localStorage.getItem('recent2') == null) {
            localStorage.setItem('recent2', "Genxclub's Instagram Page");
        } else if (localStorage.getItem('recent3') == null) {
            localStorage.setItem('recent3', "Genxclub's Instagram Page");
        } else if (localStorage.getItem('recent4') == null) {
            localStorage.setItem('recent4', "Genxclub's Instagram Page");
        } else if (localStorage.getItem('recent5') == null) {
            localStorage.setItem('recent5', "Genxclub's Instagram Page");
        } else {
            localStorage.setItem('recent1', localStorage.getItem('recent2'));
            localStorage.setItem('recent2', localStorage.getItem('recent3'));
            localStorage.setItem('recent3', localStorage.getItem('recent4'));
            localStorage.setItem('recent4', localStorage.getItem('recent5'));
            localStorage.setItem('recent5', "Genxclub's Instagram Page");
        }



        const recent_container = document.querySelector('.recent');
        if (localStorage.length == 1) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent1');
            recent_container.appendChild('recent1');
        }
        if (localStorage.length == 2) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent2);
        }
        if (localStorage.length == 3) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent3);
        }
        if (localStorage.length == 4) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent4);
        }
        if (localStorage.length == 5) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent5');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent4);
            let recent5 = document.createElement('h4');
            recent5.innerText = localStorage.getItem('recent1');
            recent5.className = 'recent-item';
            recent_container.appendChild(recent5);
        }
    });

    let genxTele = document.getElementById('genx-tele');
    genxTele.addEventListener('click', function () {
        window.open('https://t.me/genXclub');

        if (localStorage.getItem('recent1') == null) {
            localStorage.setItem('recent1', "Genxclub's Telegram Channel");
        } else if (localStorage.getItem('recent2') == null) {
            localStorage.setItem('recent2', "Genxclub's Telegram Channel");
        } else if (localStorage.getItem('recent3') == null) {
            localStorage.setItem('recent3', "Genxclub's Telegram Channel");
        } else if (localStorage.getItem('recent4') == null) {
            localStorage.setItem('recent4', "Genxclub's Telegram Channel");
        } else if (localStorage.getItem('recent5') == null) {
            localStorage.setItem('recent5', "Genxclub's Telegram Channel");
        } else {
            localStorage.setItem('recent1', localStorage.getItem('recent2'));
            localStorage.setItem('recent2', localStorage.getItem('recent3'));
            localStorage.setItem('recent3', localStorage.getItem('recent4'));
            localStorage.setItem('recent4', localStorage.getItem('recent5'));
            localStorage.setItem('recent5', "Genxclub's Telegram Channel");
        }




        const recent_container = document.querySelector('.recent');
        if (localStorage.length == 1) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent1');
            recent_container.appendChild('recent1');
        }
        if (localStorage.length == 2) {
            recent_container.innerHTML = '';
            recent_container.remove();
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent1);

            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent2);
        }
        if (localStorage.length == 3) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent3);
        }
        if (localStorage.length == 4) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent4);
        }
        if (localStorage.length == 5) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent5');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent4);
            let recent5 = document.createElement('h4');
            recent5.innerText = localStorage.getItem('recent1');
            recent5.className = 'recent-item';
            recent_container.appendChild(recent5);
        }
    });

    let genxweb = document.getElementById('genx-web');
    genxweb.addEventListener('click', function () {
        window.open('https://genxclub.github.io');

        if (localStorage.getItem('recent1') == null) {
            localStorage.setItem('recent1', "Genxclub's Website");
        } else if (localStorage.getItem('recent2') == null) {
            localStorage.setItem('recent2', "Genxclub's Website");
        } else if (localStorage.getItem('recent3') == null) {
            localStorage.setItem('recent3', "Genxclub's Website");
        } else if (localStorage.getItem('recent4') == null) {
            localStorage.setItem('recent4', "Genxclub's Website");
        } else if (localStorage.getItem('recent5') == null) {
            localStorage.setItem('recent5', "Genxclub's Website");
        } else {
            localStorage.setItem('recent1', localStorage.getItem('recent2'));
            localStorage.setItem('recent2', localStorage.getItem('recent3'));
            localStorage.setItem('recent3', localStorage.getItem('recent4'));
            localStorage.setItem('recent4', localStorage.getItem('recent5'));
            localStorage.setItem('recent5', "Genxclub's Website");
        }




        const recent_container = document.querySelector('.recent');
        if (localStorage.length == 1) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent1');
            recent_container.appendChild('recent1');
        }
        if (localStorage.length == 2) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent2);
        }
        if (localStorage.length == 3) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent3);
        }
        if (localStorage.length == 4) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent1');
            recent_container.appendChild(recent4);
        }
        if (localStorage.length == 5) {
            recent_container.innerHTML = '';
            let recent1 = document.createElement('h4');
            recent1.className = 'recent-item';
            recent1.innerText = localStorage.getItem('recent5');
            recent_container.appendChild(recent1);
            let recent2 = document.createElement('h4');
            recent2.className = 'recent-item';
            recent2.innerText = localStorage.getItem('recent4');
            recent_container.appendChild(recent2);
            let recent3 = document.createElement('h4');
            recent3.className = 'recent-item';
            recent3.innerText = localStorage.getItem('recent3');
            recent_container.appendChild(recent3);
            let recent4 = document.createElement('h4');
            recent4.className = 'recent-item';
            recent4.innerText = localStorage.getItem('recent2');
            recent_container.appendChild(recent4);
            let recent5 = document.createElement('h4');
            recent5.innerText = localStorage.getItem('recent1');
            recent5.className = 'recent-item';
            recent_container.appendChild(recent5);
        }
    });

    
