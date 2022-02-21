import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Counter from './Counter';

global.fetch = require('jest-fetch-mock');

describe('Counter', () => {
    it('deve somar 1 ao contador', () => {
        render(renderComponent());

        const botao = screen.getByText('+');

        expect(screen.getByText('0')).toBeTruthy();

        userEvent.click(botao);

        expect(screen.getByText('1')).toBeTruthy();
    });

    it('deve diminuir 1 ao contador', () => {
        render(renderComponent());

        const botao = screen.getByText('-');

        expect(screen.getByText('0')).toBeTruthy();

        userEvent.click(botao);

        expect(screen.getByText('-1')).toBeTruthy();
    });

    it('deve buscar usuarios', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve([{ login: 'blabla' }]) }))

        render(renderComponent());

        // const texto = await screen.findByText('blabla');
        // expect(texto).toBeTruthy();

        await waitFor(() => {
            // console.log(a);
            expect(screen.getByText('blabla')).toBeTruthy();
        });
    });


    function renderComponent() {
        return (
            <MemoryRouter>
                <Counter />
            </MemoryRouter>
        )
    }
});