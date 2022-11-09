let num1 = parseFloat(prompt("Ingresa un número: "));

let num2 = parseFloat(prompt("Ingresa otro número: "));

let operacion = prompt("¿Qué operación deseas realizar? Utiliza alguno de los signos a continuación para determinar el tipo de operación (Suma +, Resta -, Multiplicación * o División /)");

let resultado;

switch(operacion) {
    case '+':
        resultado = (num1 + num2);
        alert("El resultado es: " + resultado);
        break;

    case '-':
        resultado = (num1 - num2);
        alert("El resultado es: " + resultado);
        break;

    case '*':
        resultado = (num1 * num2);
        alert("El resultado es: " + resultado);
        break;

    case '/':
        if (num1==0) or (num2==0);{
            mensaje=("No se puede realizar esta la operación")

        //acá no supe como resolver la parte del cero :(
    
 
        } else mensaje=("El total de la división es: " + (num1/num2))
        break;

}