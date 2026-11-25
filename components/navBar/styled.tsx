import styled from 'styled-components';
import Link from 'next/link';
import { colors, fonts, buttonStyles, breakpoints } from '../../styles/theme';

export const NavBarContainer = styled.nav`
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 72px;
    padding: 0 32px;
    background-color: ${colors.surfaceStrong};
    backdrop-filter: blur(8px);
    border-bottom: 1px solid ${colors.divider};
    @media (max-width: ${breakpoints.lg}) {
        padding: 0 16px;
        height: 64px;
    }
`;
export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
`;
export const LogoLink = styled(Link)`
    display: flex;
    flex-shrink: 0;
`;
export const NavBarItems = styled.ul`
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
    @media (max-width: ${breakpoints.lg}) {
        display: none;
    }
`;
export const NavLink = styled(Link)`
    display: block;
    padding: 8px 14px;
    color: ${colors.text};
    font-family: ${fonts.heading};
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;
    &:hover,
    &[aria-current='page'] {
        color: ${colors.brand};
        border-bottom-color: ${colors.brand};
    }
`;
export const OrderCta = styled.a`
    ${buttonStyles}
    min-height: 40px;
    padding: 8px 20px;
    font-size: 1rem;
    box-shadow: none;
    /* On tablet/phone the bottom action bar carries the order button. */
    @media (max-width: ${breakpoints.lg}) {
        display: none;
    }
`;
export const MenuToggle = styled.button`
    display: none;
    padding: 4px;
    background: none;
    border: none;
    cursor: pointer;
    @media (max-width: ${breakpoints.lg}) {
        display: flex;
        margin-left: auto;
    }
`;
export const MobileList = styled.ul<{ $open: boolean }>`
    display: none;
    @media (max-width: ${breakpoints.lg}) {
        display: ${(p) => (p.$open ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin: 0;
        padding: 8px 0;
        list-style: none;
        background-color: ${colors.surfaceStrong};
        border-bottom: 2px solid ${colors.brand};
    }
`;
export const MobileLink = styled(Link)`
    display: block;
    padding: 14px 24px;
    color: ${colors.text};
    font-family: ${fonts.heading};
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-left: 4px solid transparent;
    &[aria-current='page'] {
        color: ${colors.brand};
        border-left-color: ${colors.brand};
    }
`;
