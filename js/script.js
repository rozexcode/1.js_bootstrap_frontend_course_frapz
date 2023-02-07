'use strict';

const goToTop = document.querySelector('#goToTop')
const aboutUs = document.querySelector('#aboutus')
const contact = document.querySelector('#contact')
// const contact = document.querySelector('#contact')
// const contact = document.querySelector('#contact')
const navMenu = document.querySelector('.nav__menu__ul')
const navMenuLi = navMenu.children;

const goToSection = function(section) {
  section.scrollIntoView({behavior: 'smooth'})
}

navMenu.addEventListener('click', function(e) {
  console.log(typeof e.target.dataset.value)
  console.log(`document.querySelector('#${e.target.dataset.value}'`)
  goToSection(`document.querySelector('#${e.target.dataset.value}')`)
})


let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  
  let callback = (entries, observer) => {
      entries.forEach((entry) => {
          console.log(entry)
          if(entry.isIntersecting) {
            goToTop.classList.add('go__to__top--hidden')
            goToTop.children[0].classList.add('arrow-img--hidden')
            goToTop.addEventListener('click', function(e) {
              e.preventDefault()
              goToSection(contact)
            })
          }
          else {
            goToTop.classList.remove('go__to__top--hidden')
            goToTop.children[0].classList.remove('arrow-img--hidden')
            goToTop.addEventListener('click', function(e) {
              e.preventDefault()
              goToSection(aboutUs)
            })
          }
        }
        )}
        
        let observer = new IntersectionObserver(callback, options);
        observer.observe(aboutUs)
