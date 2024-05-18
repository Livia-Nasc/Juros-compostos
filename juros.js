function juros(){
    let C = +document.getElementById("capital").value
    let taxa = +document.getElementById("taxa").value
    let t = +document.getElementById("tempo").value
    let i = taxa/100
    let M = C*(1 + i)**t
    document.getElementById("result").innerHTML = "R$ " + M.toFixed(2).replace(".",",")
}