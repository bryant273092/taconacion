import { css } from 'styled-components';

// Brand tokens — derived from the existing palette (logo orange, black overlays, white type).
export const colors = {
  brand: '#ee971c',
  brandHover: '#f5a93f',
  accent: '#f57b48',
  ink: '#1a1a1a',
  text: '#ffffff',
  textMuted: 'rgba(255, 255, 255, 0.78)',
  surface: 'rgba(0, 0, 0, 0.68)',
  surfaceStrong: 'rgba(0, 0, 0, 0.82)',
  divider: 'rgba(238, 151, 28, 0.35)',
};

export const fonts = {
  heading: 'var(--font-heading), "Arial Narrow", sans-serif',
};

export const breakpoints = {
  sm: '480px',
  md: '850px',
  lg: '1024px',
};

export const maxWidth = '1200px';

// Shared call-to-action style so every button looks and behaves the same.
export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 28px;
  border-radius: 10px;
  border: none;
  background-color: ${colors.brand};
  color: ${colors.ink};
  font-family: ${fonts.heading};
  font-size: 1.35rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${colors.brandHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
  }
  &:active {
    transform: translateY(0);
  }
  @media (max-width: ${breakpoints.md}) {
    font-size: 1.1rem;
  }
`;
