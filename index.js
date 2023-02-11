const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')
const modalPopupOne = document.getElementById("modal__popup--1")
const modalPopupTwo = document.getElementById("modal__popup--2")
const modalPopupThree = document.getElementById("modal__popup--3")
const modalPopupFour = document.getElementById("modal__popup--4")
const modalPopupAcceptOne = document.getElementById("modal__button--1--yes")
const modalPopupdeclineOne = document.getElementById("modal__button--1--no")
const modalPopupAcceptTwo = document.getElementById("modal__button--2--yes")
const modalPopupdeclineTwo = document.getElementById("modal__button--2--no")




setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
}) 

declineBtn.addEventListener('click', function(){
    modalPopupOne.style.display = "block"
}) 

modalPopupAcceptOne.addEventListener('click', function(){

    modalPopupOne.style.display = "none"
    modalPopupTwo.style.display= "block"

}) 

modalPopupdeclineOne.addEventListener('click', function(){

    modalPopupThree.style.display = "block"
    modalPopupOne.style.display = "none"

    setTimeout(function() {
        modalPopupThree.style.display = "none"

    }, 2500)
}) 

modalPopupdeclineTwo.addEventListener('click', function(){

    modalPopupThree.style.display = "block"
    modalPopupTwo.style.display= "none"

    setTimeout(function() {
        modalPopupThree.style.display = "none"

    }, 2500)

}) 

modalPopupAcceptTwo.addEventListener('click', function(){

    modalPopupFour.style.display = "block"
    modalPopupTwo.style.display= "none"

    setTimeout(function() {
        modalPopupFour.style.display = "none"

    }, 2500)



}) 




consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 2000)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="pirate.gif">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 4000)
  
}) 
