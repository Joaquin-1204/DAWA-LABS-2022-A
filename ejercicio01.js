/**
 * Desarrolle una función que permita determinar cuál de tres parámetros 
 * que se le proporcione a la función es mayor.
 */

    let n1, n2, n3;
    n1 = parseInt(prompt("Ingrese el primer numero: "))
    n2 = parseInt(prompt("Ingrese el segundo numero: "))
    n3 = parseInt(prompt("Ingrese el tercer numero: "))
    nummayor(n1, n2, n3);


function nummayor(){
    if(n1 > n2 && n1 > n3)
    {
        window.alert("El numero mayor es: " +n1);
    }
    else if(n2 > n1 && n2 > n3)
    {
        window.alert("El numero mayor es: " +n2);
    }
    else if(n3 > n1 && n3 > n2)
    {
        window.alert("El numero mayor es: " +n3);
    }
}


