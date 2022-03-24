/**
 * Mostrar los 50 primeros números múltiplos 
 * de 7, pero NO múltiplos de 2,3 o 5.
 */
var resultado="";
var num = 7;
var mult;
multiplo(resultado, num, mult);

function multiplo(){
for(i=1; i<=50; i++){
    mult=num*i;
    resultado=resultado+mult+" ";
    if(i * 2 !=0 && i * 3 !=0 && i * 5 !=0){
        continue;
    }
}
document.write(resultado)
}






