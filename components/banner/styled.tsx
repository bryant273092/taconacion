import styled from 'styled-components';
import Link from 'next/link';
import { FlexColumn, FlexRow } from '../layout';
import { colors, buttonStyles, breakpoints } from '../../styles/theme';

export const BannerContainer = styled.section`
    width: 100%;
    background-image: url(/grill.webp);
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom left;
    @media (max-width: ${breakpoints.lg}) {
        background-position: center center;
        background-attachment: scroll;
    }
`;
// Darkening layer over a background photo so text stays legible.
export const Overlay = styled(FlexColumn)`
    width: 100%;
    min-height: inherit;
    align-items: center;
    padding: 64px 16px 72px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.75) 100%);
`;
export const Heading = styled.h1`
    color: ${colors.text};
    text-align: center;
    font-size: clamp(1.75rem, 4.5vw, 3rem);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 28px 0 8px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
`;
export const Tagline = styled.p`
    color: ${colors.textMuted};
    text-align: center;
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 640px;
    margin: 0 0 16px;
`;
export const BannerButtonGrid = styled(FlexRow)`
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
`;
export const BannerButton = styled(Link)`
    ${buttonStyles}
    min-width: 220px;
    @media (max-width: ${breakpoints.sm}) {
        min-width: 0;
        flex: 1 1 140px;
    }
`;
