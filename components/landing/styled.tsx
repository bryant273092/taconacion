import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../layout';
import { colors, fonts, breakpoints, maxWidth } from '../../styles/theme';

export const Stack = styled(FlexColumn)`
    gap: 64px;
    margin-top: 64px;
    @media (max-width: ${breakpoints.md}) {
        gap: 40px;
        margin-top: 40px;
    }
`;
export const SectionHeader = styled.h2<{ $flush?: boolean }>`
    color: ${colors.text};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    margin: ${(p) => (p.$flush ? '0 0 16px' : '16px 0 24px')};
`;
export const PhotoBanner = styled(FlexColumn)<{ $image?: string }>`
    width: 90%;
    max-width: ${maxWidth};
    margin: 0 auto;
    overflow: hidden;
    border-radius: 24px;
    background-image: url(${(p) => p.$image || '/taco-catering.webp'});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: ${breakpoints.md}) {
        width: calc(100% - 24px);
    }
`;
export const SplitRow = styled(FlexRow)`
    gap: 32px;
    align-items: center;
    @media (max-width: ${breakpoints.md}) {
        flex-direction: column;
        gap: 16px;
    }
`;
export const PhotoFrame = styled.div`
    flex: 0 0 45%;
    img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    }
`;
export const SplitText = styled.div`
    flex: 1;
    color: ${colors.text};
    font-size: 1.15rem;
    line-height: 1.7;
    a {
        color: ${colors.brand};
        text-decoration: underline;
        text-underline-offset: 3px;
    }
`;
export const BeerList = styled.ul`
    width: 100%;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 4px 16px;
    margin: 0 auto 24px;
    padding: 0;
`;
export const BeerItem = styled.li`
    color: ${colors.brand};
    font-family: ${fonts.heading};
    font-size: 1.4rem;
    padding: 10px 4px;
    text-align: center;
    list-style: none;
    border-bottom: 1px solid ${colors.divider};
`;
export const HappyHour = styled(FlexColumn)`
    align-items: center;
    margin-top: 16px;
    padding: 24px 40px;
    border: 2px solid ${colors.brand};
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.45);
`;
export const Price = styled.p`
    color: ${colors.brand};
    font-family: ${fonts.heading};
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 600;
    line-height: 1;
    margin: 0 0 8px;
`;
