import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas Unitarias: 07-deses-arr', () => {
    
    test('Prueba: retornaArreglo', () => {
        const [cadena, numero] = retornaArreglo();
        expect(cadena).toBe('ABC');
        expect(numero).toBe(123);
        expect(typeof cadena).toBe('string');
        expect(typeof numero).toBe('number');

        expect(cadena).toStrictEqual(expect.any(String));
    });
});