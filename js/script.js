'use strict';


const logo = document.querySelector('.logo')
const goToTop = document.querySelector('#goToTop')
const aboutUs = document.querySelector('#aboutus')
const offer = document.querySelector('#offer')
const services = document.querySelector('#services')
const contact = document.querySelector('#contact')
const navMenu = document.querySelector('.nav__menu__ul')
const onePages = document.querySelectorAll('.onepage')
const navMenuLi = navMenu.children;

const goToSection = function(section) {
  section.scrollIntoView({behavior: 'smooth'})
}

// navMenu.addEventListener('click', function(e) {
//   console.log(e.target.dataset.value)
//test

//   goToSection()
// })

navMenuLi[0].addEventListener('click', function() {
  goToSection(logo)
})

for(let i=1; i<navMenuLi.length;i++) {
  navMenuLi[i].addEventListener('click', function() {
    goToSection(onePages[i-1])
  })
}




let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  }

let options2 = {
    root: null,
    rootMargin: '0px',
    // threshold: (logo.clientHeight - navMenu.clientHeight),
    threshold: 0,
  }
  
  let callback = (entries, observer) => {
      entries.forEach((entry) => {
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
            navMenu.classList.add('sticky')

            goToTop.addEventListener('click', function(e) {
              e.preventDefault()
              goToSection(logo)
            })
          }
        }
        )}
        
  let callback2 = function(entries) {
    entries.forEach((entry) => {
      console.log(entry)
      console.log(entry.intersectionRatio)

      if(entry.isIntersecting) {
        navMenu.classList.remove('sticky')
      }
      else {
        navMenu.classList.add('sticky')

      }

    })

  }


        let observer = new IntersectionObserver(callback, options);
        observer.observe(aboutUs)

        let observer2 = new IntersectionObserver(callback2, options2)
        observer2.observe(logo)


