navSlide = () => {
    
    const nav = document.querySelector('.nav__links');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => { 
        nav.classList.toggle('nav__links-active');

        const isSlideActive = nav.classList.contains('nav__links-active');

        if(isSlideActive) {
            burger.classList.add('burger__quit-nav');
        } else {
            burger.classList.remove('burger__quit-nav');
        }
    })
    
}
navSlide()
