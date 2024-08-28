let user = {
    id: 1,
    name: 'Andres',
    age: 28,
}

for (let prop in user){
    console.log(prop, user[prop]);

}

let animales = ['Andres Diaz', 'Dragon', 'Canguro'];
for (let indice in animales){
    console.log(indice, animales[indice]);
}