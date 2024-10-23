const mobileMenuBtn = document.getElementById('mobileMenuBtn')
const MobileMenu = document.getElementById('MobileMenu')

mobileMenuBtn.addEventListener('click', () => {
    MobileMenu.classList.toggle('hidden')
})