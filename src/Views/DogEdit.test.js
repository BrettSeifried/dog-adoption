import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react';
import DogEdit from './DogEdit';

test.skip("should render the dog's information in a form", async () => {
  //   render
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/2/edit']}>
      <Route path="dogs/:id/edit" component={DogEdit} />
    </MemoryRouter>
  );
  // wait for stuff to load. if using paramms use Memory Router, set to initial entry
  await screen.findByDisplayValue('Cato');
  // take a snap shot
  expect(container).toMatchSnapshot();
});
