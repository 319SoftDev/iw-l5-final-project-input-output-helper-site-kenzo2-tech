console.log('hey')

const rapButton = document.querySelector('#rap')
const rockButton = document.querySelector('#rock')
const rnbButton = document.querySelector('#rnb')
const jazzButton = document.querySelector('#jazz')
const neoButton = document.querySelector('#neo-soul')

const brentIMG = document.querySelector('#brent')

const rnbGen = () => {
    brentIMG.classList.toggle('hidden')
}

rnbButton.addEventListener('click',rnbGen)
