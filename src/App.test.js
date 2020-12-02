import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders app', () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={['/dogs']}>
      <App/>
    </MemoryRouter>
  );
  expect(getByText('Duke enjoys pawing other dogs.')).toBeInTheDocument();
})

test('matches snapshot', () => {
  const {asFragment} = render(
    <MemoryRouter initialEntries={['/dogs']}>
      <App/>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})

test('links take user to dog details page', () => {
  const {getByText} =render(
    <MemoryRouter initialEntries={['/dogs']}>
      <App/>
    </MemoryRouter>
  );
  expect(getByText("Look at these Dogs!")).toBeInTheDocument();

  fireEvent.click(getByText('Whiskey'));

  expect(getByText('Return Home')).toBeInTheDocument();

  fireEvent.click(getByText('Return Home'));

  expect(getByText("Look at these Dogs!")).toBeInTheDocument();
})