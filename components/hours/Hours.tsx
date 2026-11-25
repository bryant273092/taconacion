import styled from 'styled-components';
import { site } from '../../config/site';
import { colors } from '../../styles/theme';

const Table = styled.dl`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 6px 24px;
    margin: 8px auto 16px;
    color: ${colors.text};
    dt {
        text-align: left;
        font-weight: 600;
    }
    dd {
        margin: 0;
        text-align: right;
        font-variant-numeric: tabular-nums;
    }
`;

export const HoursTable = () => (
    <Table>
        {site.hours.map((h) => (
            <div key={h.label} style={{ display: 'contents' }}>
                <dt>{h.label}</dt>
                <dd>{h.display}</dd>
            </div>
        ))}
    </Table>
);

export default HoursTable;
