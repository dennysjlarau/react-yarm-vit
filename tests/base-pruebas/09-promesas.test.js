import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas Unitarias: 09-promesas', () => {
    test('Prueba: getHeroeByIdAsync', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({id: 1,name: 'Batman',owner: 'DC'});
                done();
            });
    });
    test('Prueba: getHeroeByIdAsync evaluar excepción cuando no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe: ${id}`);
                done();
            });
    });
}); 