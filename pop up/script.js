const submitBtn = document.getElementById('submit')
const closeBtn = document.getElementById('close')
const popup = document.querySelector('.popup-container')

submitBtn.addEventListener('click', function() {
    popup.classList.add('popupActive')
})

closeBtn.addEventListener('click', function(){
    popup.classList.remove('popupActive')
})

