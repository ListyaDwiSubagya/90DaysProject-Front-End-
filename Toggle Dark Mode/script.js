const btn = document.querySelector('.toggleBtn')
const move = document.querySelector('.bgMove')
const fa = document.querySelector('.fa-solid')
const faMoon = document.querySelector('.fa-moon')

btn.addEventListener('click', function() {
    move.classList.toggle('active')

    fa.classList.toggle('dark')

    faMoon.classList.toggle('active')
    if(move.classList == 'active') {
        faMoon.classList.add('moon-active')
    }
    else {
        faMoon.classList.remove('moon-active')
    }
    // Apply condition when toggle button is active and deactive
    if(move.classList.contains('active')) {
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }
})