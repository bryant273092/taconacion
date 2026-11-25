import styled from 'styled-components';
import Link from 'next/link';
import { useOpenStatus } from '../../lib/useOpenStatus';
import { colors, breakpoints } from '../../styles/theme';

const Badge = styled(Link)<{ $open: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid ${(p) => (p.$open ? 'rgba(74, 222, 128, 0.5)' : 'rgba(255, 255, 255, 0.25)')};
    background: rgba(0, 0, 0, 0.4);
    color: ${colors.text};
    font-size: 0.85rem;
    white-space: nowrap;
    &::before {
        content: '';
        flex-shrink: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${(p) => (p.$open ? '#4ade80' : '#f87171')};
        box-shadow: 0 0 0 3px ${(p) => (p.$open ? 'rgba(74, 222, 128, 0.25)' : 'rgba(248, 113, 113, 0.25)')};
    }
    strong {
        font-weight: 600;
    }
    @media (max-width: ${breakpoints.sm}) {
        .detail {
            display: none;
        }
    }
`;

export const OpenStatus = () => {
    const status = useOpenStatus();
    if (!status) return null;
    return (
        <Badge href="/location" $open={status.open} title="See hours and location">
            <strong>{status.label}</strong>
            {status.detail && <span className="detail">· {status.detail}</span>}
        </Badge>
    );
};

export default OpenStatus;
