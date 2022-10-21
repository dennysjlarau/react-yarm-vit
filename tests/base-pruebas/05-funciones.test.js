import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas Unitarias: 05-funciones', () => {
    test('Prueba: getUser', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(testUser);
    });
    test('Prueba: getUserActivo', () => {
        const nombre = 'Dennys';
        const usuarioActivo = getUsuarioActivo(nombre);
        expect(usuarioActivo).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        });
    });
});