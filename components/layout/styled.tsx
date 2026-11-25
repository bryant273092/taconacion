import styled from 'styled-components';
import { colors, buttonStyles, breakpoints, maxWidth } from '../../styles/theme';

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

// Dark translucent card used as the main content surface on every page.
export const Container = styled(FlexColumn)<{ $transparent?: boolean }>`
    width: 90%;
    max-width: ${maxWidth};
    margin: 0 auto;
    padding: ${(p) => (p.$transparent ? '0' : '24px 32px 40px')};
    background-color: ${(p) => (p.$transparent ? 'transparent' : colors.surface)};
    border-radius: 24px;
    backdrop-filter: ${(p) => (p.$transparent ? 'none' : 'blur(2px)')};
    @media (max-width: ${breakpoints.md}) {
        width: calc(100% - 24px);
        padding: ${(p) => (p.$transparent ? '0' : '16px 16px 32px')};
    }
`;
export const HeaderTwo = styled.h2`
    color: ${colors.text};
    width: 100%;
    text-align: center;
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin: 16px 0 8px;
`;
export const HeaderThree = styled.h3`
    color: ${colors.brand};
    width: 100%;
    text-align: center;
    font-size: clamp(1.15rem, 2.2vw, 1.4rem);
    margin: 8px 0;
`;
export const Lead = styled.p`
    color: ${colors.text};
    max-width: 640px;
    margin: 8px auto 16px;
    text-align: center;
    font-size: 1.15rem;
    line-height: 1.6;
`;
export const Button = styled.a`
    ${buttonStyles}
    width: min(100%, 360px);
    margin: 12px auto;
`;
export const ButtonRow = styled(FlexRow)`
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 16px auto;
    width: 100%;
    & > * {
        margin: 0;
        flex: 0 1 260px;
    }
`;
export const Content = styled(FlexColumn)`
    height: 100%;
    padding: 48px 16px;
    justify-content: center;
    align-items: center;
`;
