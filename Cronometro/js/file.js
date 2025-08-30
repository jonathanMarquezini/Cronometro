let horas = 0
let minutos = 0
let segundos = 0

function start() {
    gerarNumeros()
    tempo = setInterval(gerarNumeros, 1000)
}

function pause() {
    clearInterval(tempo)
}

function resetar() {
    clearInterval(tempo)
    horas = 0, minutos = 0, segundos = 0
    document.getElementById("watch").innerHTML = "00:00:00"
}

function addDigitos(digitos) {
    if(digitos < 10) {
        return ('0' + digitos)
    } else {
        return digitos
    }
}

function gerarNumeros() {
    segundos++
    if(segundos == 60) {
        segundos = 0
        minutos++
    } if(minutos == 60) {
        minutos = 0
        horas++
    }
    document.getElementById("watch").innerHTML = addDigitos(horas) + ":" + addDigitos(minutos) + ":" + addDigitos(segundos)
}