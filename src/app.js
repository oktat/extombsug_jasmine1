import { calcRadius } from './rhombus.js'

const doc = {
    sideInput: document.querySelector('#side'),
    alphaInput: document.querySelector('#alpha'),
    radiusInput: document.querySelector('#radius'),
    calcButton: document.querySelector('#calcButton')
}

const state = {
    radius: null
}

window.addEventListener('load', () => {
    init()
})

function init() {
    handleEvent()
}

function handleEvent() {
    if(doc.calcButton) {
        doc.calcButton.addEventListener('click', () => {
            startCalc()
        })
    }
}

function startCalc() {
    try {
        tryStartCalc()
    }catch(err) {
        console.log(err.message)
        alert(err.message)
    }
}

function tryStartCalc() {
    let side = doc.sideInput.value;
    let alpha = doc.alphaInput.value;
    state.radius = calcRadius(side, alpha)
    doc.radiusInput.value = state.radius
}
