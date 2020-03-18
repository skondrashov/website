import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';
import { MemoryRouter } from 'react-router-dom';


test('', () => {
  const { getByText } = render(<MemoryRouter initialEntries={["/about"]}><App /></MemoryRouter>);
  const linkElement = getByText(/I built this website with React/i);
  expect(linkElement).toBeInTheDocument();
});
