// forma de calcular el indice de masa corporal y mostrar en que rango se encuentra segun OMS, las cuales son:
    // underweight < 18.5
    // normal 18.5 - 24.9
    // overweight 25.00 - 29.90
    // obese > 30.00

function caculateIMC (peso, altura){
    const indiceMasaCoporal = peso / (altura*altura);
    
    if (indiceMasaCoporal < 18.5) {
        console.log(`${indiceMasaCoporal} tu indicie de  masa corporal es bajo`);
        return;
    } if (indiceMasaCoporal > 18.5 && indiceMasaCoporal <24.9) {
        console.log(`${indiceMasaCoporal} tu indicie de masa corporal es normal`);
        return;
    } if (indiceMasaCoporal > 25 && indiceMasaCoporal < 29.9) {
        console.log(`${indiceMasaCoporal} tu indicie de masa corporal es con exceso de peso`);
        return;
    }else {
        console.log(`${indiceMasaCoporal} tu indicie de masa corporal es obeso`);
        return;
    }
}