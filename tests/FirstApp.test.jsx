/**  * @jest-environment jsdom  */ 
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas Unitarias: de FirstApp', () => {
    test('Prueba: del snapshot', () => {
        const title = 'título de prueba';
        const {container} = render(<FirstApp title = {title}/>);
        
        expect(container).toMatchSnapshot();

    });
    test('Prueba: debe mostrar el título en un h2', () => {
        const title = 'título de prueba';
        const {container, getByText} = render(<FirstApp title = {title}/>);
        
        expect(getByText(title)).toBeTruthy();

        const h2 = container.querySelector('h2');
        expect(h2.innerHTML).toContain(title);
    });
});