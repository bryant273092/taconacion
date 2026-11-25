import styled from 'styled-components';
import { FlexColumn } from '../layout';
import { colors, breakpoints, maxWidth } from '../../styles/theme';

export const FooterContainer = styled.footer`
    width: 90%;
    max-width: ${maxWidth};
    margin: 96px auto 16px;
    padding: 24px 32px 16px;
    background-color: ${colors.surfaceStrong};
    border-top: 3px solid ${colors.brand};
    border-radius: 24px;
    @media (max-width: ${breakpoints.md}) {
        width: calc(100% - 24px);
        margin-top: 64px;
        padding: 16px;
    }
`;
export const FooterItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    @media (max-width: ${breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`;
export const FooterItem = styled(FlexColumn)`
    align-items: center;
    text-align: center;
`;
export const FooterHeader = styled.h2`
    color: ${colors.brand};
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 8px 0 12px;
`;
export const Address = styled.address`
    color: ${colors.text};
    font-style: normal;
    line-height: 1.6;
`;
export const TextLink = styled.a`
    color: ${colors.text};
    font-size: 1.3rem;
    font-weight: 600;
    &:hover {
        color: ${colors.brand};
    }
`;
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 28px;
    margin-top: 12px;
`;
export const FooterIcon = styled.a`
    color: ${colors.text};
    font-size: 2.25rem;
    transition: color 0.2s ease, transform 0.2s ease;
    &:hover {
        color: ${colors.brand};
        transform: translateY(-2px);
    }
`;
export const CopyRight = styled.p`
    margin: 24px 0 0;
    padding-top: 16px;
    border-top: 1px solid ${colors.divider};
    color: ${colors.textMuted};
    font-size: 0.9rem;
    text-align: center;
    a {
        color: ${colors.text};
        text-decoration: underline;
        text-underline-offset: 3px;
    }
`;
