var redNeuronal = {neurona}

function crearPesos(cantPesos,min,max){
    let pesos = {};

    for (let i = 1; i <= cantPesos; i++) {
        pesos[`peso${i}`] = Math.floor(Math.random() * (max - min + 1) + min);
    }

    return pesos;
}

function crearNeurona(capa,idNeurona,cantPesos,min,max){
let neurona = {}

neurona.capa = capa;
neurona.idNeurona = idNeurona;
neurona.sesgo = Math.floor(Math.random() * (max - min + 1) + min);
neurona.pesos = crearPesos(cantPesos,min,max)

return neurona
}



function funcionActivacion(sumatoria) {
    
}
