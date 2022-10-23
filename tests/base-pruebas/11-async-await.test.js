import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas Unitarias: 11-async-await', () => {
    test('Prueba: getImagen', async() => {
      const url = await getImagen();
      expect(typeof url).toBe('string');
    });
});