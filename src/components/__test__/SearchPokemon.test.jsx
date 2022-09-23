import { waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';

import renderWithProviders from '../../helper/test-utils';
import SearchPokemon from '../SearchPokemon';
import pokemon1 from './json/pokemon1.json';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) =>
    res(
      ctx.json({
        count: 1154,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
        previous: null,
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        ],
      }),
      ctx.delay(150),
    ),
  ),
  rest.get('https://pokeapi.co/api/v2/pokemon/1/', (req, res, ctx) =>
    res(ctx.json(pokemon1), ctx.delay(150)),
  ),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('SearchPokemon', () => {
  it('should render fetch api and render data', async () => {
    const { getByText } = renderWithProviders(<SearchPokemon />);
    await waitFor(() => expect(getByText('bulbasaur')).toBeVisible());
    expect(getByText('grass')).toBeVisible();
    expect(getByText('poison')).toBeVisible();
  });
});
