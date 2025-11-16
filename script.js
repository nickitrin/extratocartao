let Limite = 2500
let SaldoAtualizado = Limite
let SaldoInicial = Limite

let FormDespesa = document.getElementById("formdespesa")
let ValorDespesa = document.getElementById("valordadespesa")
let NomeDespesa = document.getElementById("nomedadespesa")
let ContainerDespesa = document.getElementById("containerdespesa")
let DataDespesa = document.getElementById("datadadespesa")

let TotalSaldo = document.getElementById("totalsaldo")
let LimitedoCartao = document.getElementById("limitedocartao")
let LimiteUtilizado = document.getElementById("limiteutilizado")



function AtualizarLimite(){
    LimitedoCartao.innerHTML = "Limite Disponível: " + Limite
    LimiteUtilizado.innerHTML = "Limite Utilizado: " + SaldoAtualizado
}
AtualizarLimite()

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
        let ContainerDescricaoDespesa = document.createElement("div")
        ContainerDescricaoDespesa.classList.add("ContainerDescricaoDespesa")
        ContainerDespesa.append(ContainerDescricaoDespesa)

        let ContainerNomeDespesa = document.createElement("p")
        ContainerNomeDespesa.textContent = Despesa.nome
        ContainerDescricaoDespesa.append(ContainerNomeDespesa)

        let ContainerValorDespesa = document.createElement("p")
        ContainerValorDespesa.textContent = Despesa.valor
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
    TotalSaldo.innerHTML = SaldoAtualizado
    SaldoInicial = SaldoAtualizado

    AtualizarLimite(SaldoAtualizado)       

    }
    else{
        alert("Limite Atingido!")
    }    
    

}