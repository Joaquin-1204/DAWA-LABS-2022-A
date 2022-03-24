/**
 * Calcular la comisión sobre las ventas totales de un empleado, sabiendo
 *  que el empleado no recibe comisión si su venta es hasta S/.150, si la 
 * venta es superior a S/.150 y menor o igual a S/.400 el empleado recibe
 *  una comisión del 10% de las ventas y si las ventas son mayores a 
 * 400, entonces la comisión es de S/.50 más el 9% de las ventas.
 */

    let venta = prompt("Ingrese la venta total")
    comision(venta);

 function comision(){
    if (venta <= 150) 
    {
        window.alert("No tiene comision")
    } else if (venta > 150 && venta <= 400) 
    {
        window.alert("La comision total que recibe es:  " + (venta * 10) / 100)
    } else if (venta > 400) 
    {
        window.alert("La comision total que recibe es: " + (50 + (venta * 9) / 100))
    }
}
