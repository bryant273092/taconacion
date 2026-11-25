import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { site } from '../../config/site';
import { colors, fonts, breakpoints } from '../../styles/theme';

const BAR_HEIGHT = '64px';

const Bar = styled.nav`
    display: none;
    @media (max-width: ${breakpoints.lg}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1.3fr;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 60;
        height: calc(${BAR_HEIGHT} + env(safe-area-inset-bottom));
        padding-bottom: env(safe-area-inset-bottom);
        background: ${colors.surfaceStrong};
        backdrop-filter: blur(8px);
        border-top: 1px solid ${colors.divider};
    }
`;
const Action = styled.a<{ $primary?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: ${(p) => (p.$primary ? colors.ink : colors.text)};
    background: ${(p) => (p.$primary ? colors.brand : 'transparent')};
    font-family: ${fonts.heading};
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    svg {
        font-size: 1.25rem;
        color: ${(p) => (p.$primary ? colors.ink : colors.brand)};
    }
    &:active {
        opacity: 0.8;
    }
`;
// Reserves space so the fixed bar never covers the end of the page.
export const ActionBarSpacer = styled.div`
    display: none;
    @media (max-width: ${breakpoints.lg}) {
        display: block;
        height: calc(${BAR_HEIGHT} + env(safe-area-inset-bottom));
    }
`;

export const MobileActionBar = () => (
    <Bar aria-label="Quick actions">
        <Action href={`tel:${site.phone}`} data-track="call">
            <FontAwesomeIcon icon={faPhone} />
            Call
        </Action>
        <Action href={site.directionsUrl} data-track="directions" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLocationDot} />
            Directions
        </Action>
        <Action $primary href={site.orderTakeoutUrl} data-track="order-takeout" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBagShopping} />
            Order Pickup
        </Action>
    </Bar>
);

export default MobileActionBar;
