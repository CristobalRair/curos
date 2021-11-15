function sumar(a=0,b=0){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a=1,b=1){
    return a*b;
}

function dividir(a=0,b=0){
    if(b==0){
        return 'No puedo dividir entre 0';
    }
    return a/b;
}

const resultado_div = dividir(10,3);
const num_1 = 7;

console.log(sumar(num_1,40));
console.log(restar(20,25));
console.log(multiplicar(100,5));
console.log(resultado_div);

/**
 * Funciones flecha 
*/


const sumar_f = (a,b) => {
    return a+b;
}

const restar_f = (a,b)=>a-b;

const multiplicar_f =(a=1,b=1)=>{
    return a*b;
}

const dividir_f=(a=0,b=0)=>{
    if(b==0){
        return 'No puedo dividir entre 0';
    }
    return a/b;
}

console.log('Resultado divir de la funcion flecha',dividir_f(55,13));
console.log('Resultado resta de la funcion flecha',sumar_f(5,8));