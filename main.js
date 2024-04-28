window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
    //criar função
    showNavOnScrow()
    showBackToTopButton()

    activaMenuCurrentSection(home)
    activaMenuCurrentSection(services)
    activaMenuCurrentSection(about)
    activaMenuCurrentSection(contact)
}

function activaMenuCurrentSection(section) {
    //linha alvo
    const targetline = scrollY + innerHeight / 2

    //verificar se a seção passou da linha
    
    //o topo da seção
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScrow() {
    const navigation = document.querySelector('#navigation')
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButton() {
    if (scrollY > 400) {
        showBackToTopButton.classList.add('show')
    } else {
        showBackToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about content`)