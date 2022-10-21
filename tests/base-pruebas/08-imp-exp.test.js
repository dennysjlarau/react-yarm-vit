import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas Unitarias: 08-imp-exp', () => {
    test('Prueba: getHeroeById', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('Prueba: getHeroeById undefine si no existe id', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeUndefined();
    });
    test('Prueba: getHeroesByOwner heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesDC = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]; 
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroesDC);
    });
});