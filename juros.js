function juros(){
    let C = +document.querySelector("#capital").value
    let taxa = +document.querySelector("#taxa").value
    let t = +document.querySelector("#tempo").value
    let i = taxa/100
    let M = C*(1 + i)**t
    document.querySelector("#result").innerHTML = "R$ " + M.toFixed(2).replace(".",",")
}