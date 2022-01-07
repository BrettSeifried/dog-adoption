import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './HomeDetail';

it('render all the dogs on a list', async () => {
  const { container } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  await screen.findByText('Rue');
  expect(container).toMatchSnapshot();
});
