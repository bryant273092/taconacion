import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 90%;
    max-width: 900px;
    margin: 48px auto 32px;
`
export const Line = styled.span`
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${colors.brand});
    &:last-child {
        background: linear-gradient(90deg, ${colors.brand}, transparent);
    }
`
export const Heading = styled.h1`
    margin: 0;
    color: ${colors.text};
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
`
