import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar component', () => {
  it('renders correctly', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    await waitFor(() => expect(getByText('Home')).toBeInTheDocument());
    await waitFor(() => expect(getByText('About')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Projects')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Contact')).toBeInTheDocument());
  });

  it('navigates to correct page when link is clicked', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const aboutLink = getByText('About');
    fireEvent.click(aboutLink);
    await waitFor(() => expect(window.location.pathname).toBe('/about'));
  });

  it('has correct ARIA attributes', async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const navBar = getByRole('navigation');
    await waitFor(() => expect(navBar).toHaveAttribute('aria-label', 'Main navigation'));
  });

  it('is accessible with keyboard navigation', async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const navBar = getByRole('navigation');
    fireEvent.keyDown(navBar, { key: 'Tab' });
    await waitFor(() => expect(document.activeElement).toBe(navBar));
  });

  it('renders correctly with no links', async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <NavBar links={[]} />
      </BrowserRouter>
    );
    const navBar = getByRole('navigation');
    await waitFor(() => expect(navBar).toBeInTheDocument());
  });

  it('renders correctly with invalid links', async () => {
    const { getByRole } = render(
      <BrowserRouter>
        <NavBar links={[{ to: 'invalid-link' }]} />
      </BrowserRouter>
    );
    const navBar = getByRole('navigation');
    await waitFor(() => expect(navBar).toBeInTheDocument());
  });
});