import { render } from '@testing-library/react';
import DogCreate from './DogAdmin';
import { MemoryRouter } from 'react-router-dom';

test('renders admin page', () => {
  const { container } = render(
    <MemoryRouter>
      <DogCreate />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
