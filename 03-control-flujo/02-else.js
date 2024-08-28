let edad = 10;

if (edad > 17){
    console.log('Usuario mayor de edad');
} else if(edad > 13){
    console.groupCollapsed('requiere un mayor de edad');
} else {
    console.groupCollapsed('Donde están los papas de este niño?');
}