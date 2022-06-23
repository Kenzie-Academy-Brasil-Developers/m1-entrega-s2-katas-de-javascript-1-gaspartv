function oneThroughTwenty() {
  let contador = []
    for (let i = 0; i < 20; i++) {
      contador.push(i + 1)
    }
    return contador
}

function evensToTwenty() {
  let contador = []
    for (let i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
        contador.push(i)
      }
    }
    return contador
}

function oddsToTwenty() {
  let contador = []
    for (let i = 0; i < 20; i++) {
      if (i % 2 != 0) {
        contador.push(i)
      }
    }
    return contador
}

function multiplesOfFive() {
  let contador = []
    for (let i = 1; i <= 100; i++) {
      if (i % 5 == 0) {
        contador.push(i)
      }
    }
    return contador
}

function squareNumbers() {
  let contador = []
    for (let i = 1; i <= 100; i++) {
      numero = Math.sqrt(i)
        if (Number.isInteger(numero)) {
          contador.push(i)
        }
  }
  return contador
}

function countingBackwards() {
  let contador = []
  for (let i = 20; i > 0; i--) {
    contador.push(i)
  }
  return contador
}

function evenNumbersBackwards() {
  let contador = []
    for (let i = 20; i > 1; i--) {
      if (i % 2 == 0) {
        contador.push(i)
      }
    }
    return contador
}

function oddNumbersBackwards() {
  let contador = []
    for (let i = 20; i > 0; i--) {
      if (i % 2 != 0) {
        contador.push(i)
      }
    }
    return contador
}

function multiplesOfFiveBackwards() {
  let contador = []
    for (let i = 100; i > 1; i--) {
      if (i % 5 == 0) {
        contador.push(i)
      }
    }
    return contador
}

function squareNumbersBackwards() {
  let contador = []
    for (let i = 100; i > 0; i--) {
      numero = Math.sqrt(i)
        if (Number.isInteger(numero)) {
          contador.push(i)
        }
  }
  return contador
}
