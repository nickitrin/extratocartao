let Limite = 2500
let SaldoAtualizado = Limite
let SaldoInicial = Limite
let SaldoUtilizado = 0

let FormDespesa = document.getElementById("formdespesa")
let ValorDespesa = document.getElementById("valordadespesa")
let NomeDespesa = document.getElementById("nomedadespesa")
let DataDespesa = document.getElementById("datadadespesa")
let Transacoes = document.getElementById("transacoes")
let TotalSaldo = document.getElementById("totalsaldo")
let LimitedoCartao = document.getElementById("limitedocartao")
let LimiteUtilizado = document.getElementById("limiteutilizado")
let BarraDeProgresso = document.getElementById("barradeprogresso")

function AtualizarDados(){
    LimitedoCartao.innerHTML = "Limite Disponível: R$" + Limite
    LimiteUtilizado.innerHTML = "Limite Utilizado: R$" + SaldoUtilizado.toFixed(2)
    TotalSaldo.innerHTML = "R$" + SaldoAtualizado.toFixed(2)
}
AtualizarDados()

FormDespesa.onsubmit = (event) => {

    event.preventDefault()

    let Despesa = {
        valor : ValorDespesa.value,
        nome : NomeDespesa.value,
        data : DataDespesa.value
    }
    
    CreateDespesa(Despesa)
    AtualizarSaldo(Despesa)

}

function CreateDespesa (Despesa)  {
    try{

        let ContainerDespesa = document.createElement("div")
        ContainerDespesa.classList.add("ContainerDespesa")
        Transacoes.append(ContainerDespesa)

        let ContainerDescricaoDespesa = document.createElement("div")
        ContainerDescricaoDespesa.classList.add("ContainerDescricaoDespesa")
        ContainerDespesa.append(ContainerDescricaoDespesa)

        let ContainerNomeDespesa = document.createElement("p")
        ContainerNomeDespesa.textContent = Despesa.nome
        ContainerDescricaoDespesa.append(ContainerNomeDespesa)

        let ContainerValorDespesa = document.createElement("p")
        ContainerValorDespesa.textContent = "R$" + Despesa.valor
        ContainerDescricaoDespesa.append(ContainerValorDespesa)

        let ContainerDetalheDespesa = document.createElement("div")
        ContainerDetalheDespesa.classList.add("ContainerDetalheDespesa")
        ContainerDespesa.append(ContainerDetalheDespesa)

        let ContainerDataDespesa = document.createElement("p")
        ContainerDataDespesa.textContent = Despesa.data
        ContainerDetalheDespesa.append(ContainerDataDespesa)

        
    }
    catch(error){
        alert("Não foi possivel")
    }

}

function AtualizarSaldo(Despesa) {

    if(Despesa.valor <= SaldoAtualizado){
    SaldoAtualizado = SaldoInicial - Despesa.valor
    SaldoUtilizado = SaldoUtilizado + Number(Despesa.valor)
    TotalSaldo.innerHTML = "R$" + SaldoAtualizado
    SaldoInicial = SaldoAtualizado.toFixed(2)

    AtualizarDados(SaldoUtilizado)     
    BarraDeProgresso.value = SaldoUtilizado.toFixed(2) 

    }
    else{
        alert("Limite Atingido!")
    }    
    

}