window.onload = function () {
    var headerEl = document.querySelector('.header');
    var logoEl = Array.from(document.querySelectorAll('.logo'));
    document.addEventListener('scroll',function () {
        if (window.pageYOffset > 0) headerEl.classList.add('bg-black')
        else headerEl.classList.remove('bg-black')
    })
    function changeColor(element) {
        var speed = 100;
        element.forEach(function (item) {
            setInterval(function(){
                change(item)
            }, speed);
        })
    }
    var hex=new Array("00","14","28","3C","50","64","78","8C","A0" ,"B4","C8","DC","F0")
    var r=1,g=1,b=1,seq=1
    function change(element){   
        if (seq==6){
            b--
            if (b==0) seq=1
        }
        if (seq==5){
            r++
            if (r==12) seq=6
        }
        if (seq==4){
            g--
            if (g==0) seq=5
            }
        if (seq==3){
            b++
            if (b==12) seq=4
            }
        if (seq==2){
            r--
            if (r==0) seq=3
            }
        if (seq==1){
            g++
            if (g==12) seq=2
        }
        var rainbow ="#"+hex[r]+hex[g]+hex[b]
        element.style.color=rainbow   
    }
    changeColor(logoEl)
    var menuItem = Array.from(headerEl.querySelectorAll('.menu-item'));
    function addClass(element){
        for(var i = 0; i< element.length; i++){     
            element[i].onclick = function(item){
                if(headerEl.querySelector('.active')) {
                    headerEl.querySelector('.active').classList.remove('active')
                }
                item.target.parentElement.classList.add('active')
            }
        }
    }
    addClass(menuItem);

    $('.menu-item a').click(function (event){
        event.preventDefault();
        var part = $(this).attr('href')
        var position = $(part).offset().top
        $('html,body').animate({scrollTop: position - 100 },800, 'easeOutQuad')

    })
    $('.menu_mobile-item a').click(function (event){
        event.preventDefault();
        var part = $(this).attr('href')
        var position = $(part).offset().top
        $('html,body').animate({scrollTop: position - 100 },800, 'easeOutQuad')
    })
    //
    var mySlide = document.querySelectorAll('.myslide'),
        dot = document.querySelectorAll('.dot')
    var counter = 1;
    var timer = setInterval(autoSlide,3000);
    slideFun(counter)
    function autoSlide(){
        counter +=1;
        slideFun(counter)
    }
    function slideFun(n){
        var i;
        for(i = 0; i< mySlide.length; i++){
            mySlide[i].style.display = 'none';
        }
        for(i = 0; i< dot.length; i++){
            dot[i].classList.remove('active');
        }
        if (n > mySlide.length) counter = 1;
        if (n < 1) counter = mySlide.length;
        mySlide[counter - 1].style.display = 'block';
        dot[counter - 1].classList.add('active');
    }
    //
    var listFilter = Array.from(document.querySelectorAll('.list'));
    var listProduct = Array.from(document.querySelectorAll('.itemProduct'));
    function filterGalery (element){
        element.forEach(function(item){
            item.onclick = function () {
                if (element[item.value].parentElement.querySelector('.active'))
                    element[item.value].parentElement.querySelector('.active').classList.remove('active')
                item.classList.add('active')
                var dataFilter = item.getAttribute('data-filter')
                listProduct.forEach(function (product) {
                    product.classList.add('delete')
                    if ( dataFilter === 'All'){
                        product.classList.remove('delete')
                        product.removeAttribute('style')
                    }
                    if (product.getAttribute('data-item')=== dataFilter ){
                        product.classList.remove('delete')
                        product.style.transition = '1s'
                        product.style.gridRow = "auto";
                        product.style.gridColumn = "auto";
                        
                    }
                })
                 
            }
        })  
    }
    filterGalery(listFilter)


    $('.progress-bar').each(function () {
        var $this = $(this);
        var per = $this.attr('per')
        $this.css('width',per+ '%');
        $({animatedValue: 0}).animate({animatedValue: per},{
            duration: 3000,
            step: function () {
                $this.attr('per',Math.floor(this.animatedValue) + '%')
            },
            complete:   function () {
                $this.attr('per',Math.floor(this.animatedValue) + '%')
            },         
        })
    }) 

    function backToTop() { 
        btnBTT = document.querySelector('.back-to-top')
        window.onscroll = function () {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btnBTT.style.display = "block";
              } 
            else {
                btnBTT.style.display = "none";
            }
        }
        btnBTT.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
        }
    }
    backToTop();



    //mobile
    function menuMobile() {
        var iconPopUp = document.querySelector('.menu_Mobile-icon')
        iconPopUp.onclick = function () {
            var menuPopUp = document.querySelector('.menu-mobile');
            var menuOverlay = document.querySelector('.menu-overlay');
            var menuClose = document.querySelector('.menu-close')
            menuPopUp.style.transform = 'translateX(0)';
            menuOverlay.style.display = 'block';
            //close
            menuClose.onclick = function () {
                menuPopUp.style.transform = 'translateX(-100%)';
                menuOverlay.style.display = 'none';
            }
        }
        
    }
    menuMobile();
}  





