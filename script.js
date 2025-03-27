const converterbutton = document.querySelector(".botao-de-converter")
const moedaSelecionada = document.querySelector(".moeda-escolhida-para-converter")
const imgMoeda = document.querySelector(".img-moedas")


function converterValores() {

    const inputValor = document.querySelector(".input-valor").value
    const valorAserConvertido = document.querySelector(".valor-a-ser-convertido")
    const valorAConverter = document.querySelector(".valor")

    console.log(moedaSelecionada.value)

    const dolarToday = 5.20
    const euroToday = 8.20
    const libratoday = 7.40
    const bitcointoday = 87455.00

    const valorConvertido = inputValor / dolarToday
    const valorConvertidoE = inputValor / euroToday
    const valorConvertidoL = inputValor / libratoday
    const valorConvertidoB = inputValor / bitcointoday

    valorAserConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputValor)


    if (moedaSelecionada.value == 'dolar') {

        valorAConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(valorConvertido)

    }

    if (moedaSelecionada.value == 'euro') {
        valorAConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(valorConvertidoE)

    }

    if (moedaSelecionada.value == "libra") {
        valorAConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(valorConvertidoL)

    }

    if (moedaSelecionada.value == "bitcoin") {

        valorAConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"

        }).format(valorConvertidoB)
    }
    console.log(valorConvertido)
}

function trocadeMoeda() {
    const nomedaMoeda = document.getElementById("nome-da-moeda")


    if (moedaSelecionada.value == 'dolar') {
        nomedaMoeda.innerHTML = "Dólar Americano"
        imgMoeda.src = "assets/estados-unidos (1) 1.png"
    }

    if (moedaSelecionada.value == 'euro') {
        nomedaMoeda.innerHTML = "Euro"
        imgMoeda.src = "assets/euro.png"
    }

    if (moedaSelecionada.value == 'libra') {
        nomedaMoeda.innerHTML = "Libra"
        imgMoeda.src = "assets/libra.png"
        
    }

    if (moedaSelecionada.value == 'bitcoin') {
        nomedaMoeda.innerHTML = "Bitcoin"
        imgMoeda.src = "assets/bitcoin.png"
        
    }

}


moedaSelecionada.addEventListener("change", trocadeMoeda)
converterbutton.addEventListener("click", converterValores)
