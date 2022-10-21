describe('Pruebas unitarias del componente DemoComponent', () => {
    
    test('Esta es una prueba', () => {
        // 1. inicialización
        const message1 = 'Hola Mundo';

        // 2. estimado
        const message2 = message1.trim();

        // 3. observar el comportamiento esperado
        expect(message1).toBe(message2);
    });
});

