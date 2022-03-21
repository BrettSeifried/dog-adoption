import { render, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import DogDetail from './DogDetail';

test('Should render individual Dog', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/2']}>
      <Route exact path="/dogs/:id" component={DogDetail} />
    </MemoryRouter>
  );
  await screen.findByText('Cato');

  expect(container).toMatchSnapshot();
});
