let cont=0, rep=0, letraRep = 0;
let palabra, inversa;

function buscaRepetidos(palabra){
    rep=0;
    cont=0;
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra.charAt(i));
    }

    for (let i=0; i<palabra.length; i++){
        //console.log(i)
        //console.log(arreglo[i]);
        rep=1;
        for (let j=0; j<palabra.length; j++){
            //console.log(j)
            if ((palabra.charAt(i)==palabra.charAt(j)) && (i!=j&&i<j)){
                rep++;
                //console.log(rep);
            }
        }
        if (rep>cont) {
            cont = rep;
            letraRep = palabra.charAt(i);
        }
    }
    return letraRep;
}

function devuelveInverso(palabra){
    let invertida = "";
    for (let i = palabra.length; i >=0; i--) {
        invertida += palabra.charAt(i);
    }
    console.log(invertida);
    return invertida;
}

function esPalindromo(palabra){
    let temp = palabra.split(" ").join("");
    let invertida = devuelveInverso(palabra);
    invertida=invertida.split(" ").join("");

    if (invertida==temp){
        return `<br>Es un palíndromo`;
    }else {
        return `<br>no es un palíndromo`;
    }
}

let btnRevisaPalabra = document.getElementById("btnRevisaPalabra");
btnRevisaPalabra.addEventListener("click", function (event){
    event.preventDefault();  //le quita el funcionamiento que tenía el boton por default
    let palabra = document.getElementById("palabra").value;
    console.log(palabra)
    let nueva = palabra.toUpperCase();
    let res = document.getElementById("alerta");
    res.innerHTML += `<br>La letra mas repetida es ${buscaRepetidos(nueva)} y se aparece ${cont} veces`;
    let res2 = document.getElementById("alerta2");
    res2.innerHTML += `<br>La palabra al revés sería ${devuelveInverso(palabra)}`;
    let res3 = document.getElementById("alerta3");
    res3.innerHTML += esPalindromo(palabra);

    document.getElementById("palabra").focus();
    document.getElementById("palabra").select();
});