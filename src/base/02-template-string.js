


const nombre   = 'Renzo';
const apellido = 'Montoya';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo(nombre ='Renzito') {
    return 'Hola'+nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );