import {getSaludo} from '../../src/base-pruebas/02-template-string'

describe('Pruebas Unitarias: 02-template-string', () => {
     test('Prueba: getSaludo', () => {
        const nombre = 'Dennys';
        const mensaje = getSaludo(nombre);
        expect(mensaje).toBe(`Hola ${nombre}`);
     });
});