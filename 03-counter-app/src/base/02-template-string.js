


const nombre   = 'Laura';
const apellido = 'Jaime';

const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre = 'Miguel') {
    return 'Hola ' + nombre;
}
