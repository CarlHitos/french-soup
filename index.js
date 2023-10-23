let Nombre = "Carlos"
let edad = 32
console.log("Mi nombre es" + Nombre + " y mi edad es " + edad)

let años = 50
let precio = 200

if (años > 65 ){
    console.log("El costo de la entrada es " + (precio - 100))
}else if (años < 18){
    console.log("El costo de la entrada es " + (precio - 50))
}else {
    console.log("El costo de la entrada es " + precio)
}