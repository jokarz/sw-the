import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('App Renders', () => {
  const { getByTitle, getByText, container } = render(<App />);
  let element = getByTitle(/Teams/i); //sidenav
  expect(element).toBeInTheDocument();

  element = getByText(/^NARWHAL$/); //navbar
  expect(element).toBeInTheDocument();

  element = getByText(/^CREATE NEW TEAM$/); //header
  expect(element).toBeInTheDocument();

  expect(container.getElementsByClassName('team-item').length).toBe(9) //teams
  
  expect(container.getElementsByClassName('activity-item').length).toBe(5) //activities

  fireEvent.click(getByText(/^Favorites$/))
  expect(container.getElementsByClassName('team-item').length).toBe(3) //teams in favorite tab

  fireEvent.click(getByText(/^Archived$/))
  expect(container.getElementsByClassName('team-item').length).toBe(2) //teams in archive tab

  fireEvent.click(getByText(/^Favorites$/))
  fireEvent.click(container.getElementsByClassName('star')[0])
  expect(container.getElementsByClassName('team-item').length).toBe(2) // one team in favorite tab removed

  fireEvent.click(getByText(/^Archived$/))
  fireEvent.click(container.getElementsByClassName('star')[0])
  fireEvent.click(getByText(/^Favorites$/))
  expect(container.getElementsByClassName('team-item').length).toBe(3) // one archived team favorited
});