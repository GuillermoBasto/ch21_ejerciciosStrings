let nombre = "perro";
let cont=0, rep=0, letraRep = 0;
let palabra;

function buscaRepetidos(palabra){
    rep=0;
    cont=0;
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra.charAt(i));
    }

    for (let i=0; i<palabra.length; i++){
        //console.log(i)
        //console.log(arreglo[i]);
        for (let j=0; j<palabra.length; j++){
            //console.log(j)
            if ((palabra.charAt(i)==palabra.charAt(j)) && (i!=j&&i<j)){
                rep++;
                console.log(rep);
            }
        }
        if (rep>cont) {
            cont = rep;
            letraRep = palabra.charAt(i);
        }
    }
    if (rep==0){
        return `no hay letras repetidas`;
    }else{
        return letraRep;
    }
}

let btnRevisaPalabra = document.getElementById("btnRevisaPalabra");
btnRevisaPalabra.addEventListener("click", function (event){
    event.preventDefault();  //le quita el funcionamiento que tenía el boton por default
    let palabra = document.getElementById("palabra").value;
    console.log(palabra)
    let nueva = palabra.toUpperCase();
    let resultado = document.getElementById("alerta");
    resultado.innerHTML = `La letra mas repetida es ${buscaRepetidos(nueva)} y se aparece ${rep+1} veces`;

    document.getElementById("palabra").focus();
    document.getElementById("palabra").select();
});