import styled from 'styled-components';
import { colors, fonts, breakpoints } from '../../styles/theme';

export const CategoryNav = styled.nav`
    position: sticky;
    top: 72px;
    z-index: 10;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    margin: -8px -8px 24px;
    padding: 12px 8px;
    background: ${colors.surfaceStrong};
    border-radius: 12px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: ${breakpoints.lg}) {
        top: 64px;
    }
`;
export const CategoryLink = styled.a`
    flex-shrink: 0;
    padding: 6px 14px;
    border: 1px solid ${colors.brand};
    border-radius: 999px;
    color: ${colors.brand};
    font-family: ${fonts.heading};
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
    transition: background-color 0.2s ease, color 0.2s ease;
    &:hover {
        background: ${colors.brand};
        color: ${colors.ink};
    }
`;
export const MeatSection = styled.section`
    width: 100%;
    max-width: 900px;
    margin: 0 auto 16px;
    padding: 8px 16px 16px;
    background-color: ${colors.brand};
    border-radius: 16px;
`;
export const MeatHeading = styled.h2`
    color: ${colors.ink};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 8px 0;
`;
export const MeatOptions = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
`;
export const MeatText = styled.li`
    color: ${colors.ink};
    text-align: center;
    font-weight: 700;
    font-size: 1.05rem;
`;
export const AltLang = styled.span`
    display: block;
    color: rgba(26, 26, 26, 0.75);
    font-size: 0.8rem;
    font-weight: 500;
`;
export const Category = styled.section`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    scroll-margin-top: 150px;
`;
export const CategoryHeading = styled.h2`
    color: ${colors.text};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: clamp(1.6rem, 3vw, 2rem);
    margin: 40px 0 4px;
`;
export const OptionDescription = styled.p`
    color: ${colors.brand};
    text-align: center;
    font-style: italic;
    margin: 0 0 8px;
`;
export const ItemList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
export const ItemRow = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px dashed ${colors.divider};
`;
export const ItemHeading = styled.h3`
    color: ${colors.brand};
    font-size: 1.3rem;
    margin: 0 0 2px;
`;
export const ItemDescription = styled.p`
    color: ${colors.textMuted};
    font-size: 0.95rem;
    margin: 0;
`;
export const ItemPrice = styled.p`
    flex-shrink: 0;
    color: ${colors.brand};
    font-family: ${fonts.heading};
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
    font-variant-numeric: tabular-nums;
`;
