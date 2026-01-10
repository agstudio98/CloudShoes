class navigation{

    check1(){
     let carrousel = document.getElementById("carrousel");
     const check1 = document.getElementById("check1");

     check1.addEventListener('click', function(){
        carrousel.style.backgroundImage = 'url(img/carrouselt2.png)';
        carrousel.style.transition = "1s";
     });
    }

    check2(){
        let carrousel = document.getElementById("carrousel");
        const check2 = document.getElementById("check2");
        check2.addEventListener('click', function(){
           carrousel.style.backgroundImage = 'url(img/carrouselt3.png)';
           carrousel.style.transition = "1s";
        });
    }

    check3(){
        let carrousel = document.getElementById("carrousel");
        const check3 = document.getElementById("check3");
        check3.addEventListener('click', function(){
           carrousel.style.backgroundImage = 'url(img/carrouselt1.png)';
           carrousel.style.transition = "1s";
        });
    }

}

nav = new navigation();
nav.check1();
nav.check2();
nav.check3();
