
function calcRadius(side, alpha) {
    if(!isValidInput(side)) {
        throw new Error('Hiba! Az oldal érték hibás!')
    }
    if(!isValidInput(alpha)) {
        throw new Error('Hiba! Az szög érték hibás!')
    }
    let rad = alpha * Math.PI / 180
    return 1.0/2.0 * side * Math.sin(rad)
}

function isValidInput(input) {
    let inputStr = String(input)
    if(!inputStr.match(/^[0-9]+$/)) {
        return false
    }
    if(input <= 0) {
        return false
    }
    return true
}

export { calcRadius, isValidInput }
