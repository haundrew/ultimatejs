
function crearUsuraio(name, email) {
   return {
        email,
        name,
        activo: true,
        recuoerarClave: function (){
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuraio('Andres', 'andres@gmail.com');
let user2 = crearUsuraio('Felipe', 'felipe@gmail.com');

console.log(user1, user2);