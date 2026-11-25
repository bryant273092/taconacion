import styled from 'styled-components';
import { FlexColumn } from '../layout';
import { colors, breakpoints } from '../../styles/theme';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
    margin-top: 16px;
    @media (max-width: ${breakpoints.md}) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;
export const Column = styled(FlexColumn)`
    align-items: center;
`;
export const Photo = styled.div`
    img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    }
`;
export const AddressLink = styled.a`
    color: ${colors.text};
    font-size: 1.15rem;
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 3px;
    margin-bottom: 8px;
    &:hover {
        color: ${colors.brand};
    }
`;
export const MapFrame = styled.iframe`
    width: 100%;
    height: 360px;
    margin-top: 32px;
    border: 0;
    border-radius: 16px;
`;
