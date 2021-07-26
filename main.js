// char - caracteres
// string - conjunto de caracteres / conjunto de caracteressempre entre aspas simples
// number - numeros
//boolean: true ou false
//estruturar dados coloca dentro de um par de chaves
// { 
//     name: 'carro'
//     cor: 'vermelho' //este objeto tem um atributo de cor vermelha
//     correr: function() {
//         //aqui vem uma sequencia de codigos
//     } //funcionalidades, função
// }
// funtion - função, da pra colocar uma sequencia de pares de codigos
// function liquidificador(frutas) {
//     alert(frutas)
// }
// liquidificador('maca banana')

//DOM Document Object Model
//document.body.style.background = 'red'
//const não altera o valor
//let e var altera o valor

/*Abre e fecha o menu quando clica no icone: hamburger e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/*quando clicar em algum intem do menu, esconder o menu*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/*mudar o header da pagina quando der scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
})

/*Testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper-container', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
  });


/*ScrollReveal: mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `, { interval: 100 })