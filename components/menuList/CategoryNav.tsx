import { MouseEvent, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useActiveSection, scrollToSection } from '../../lib/useActiveSection';
import { colors, fonts, breakpoints } from '../../styles/theme';

interface Props {
    categories: { id: string; label: string }[];
}

/* ---------- shared chip ---------- */
const Chip = styled.a<{ $active: boolean }>`
    flex-shrink: 0;
    padding: 8px 16px;
    border: 1px solid ${colors.brand};
    border-radius: 999px;
    color: ${(p) => (p.$active ? colors.ink : colors.brand)};
    background: ${(p) => (p.$active ? colors.brand : 'transparent')};
    font-family: ${fonts.heading};
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
    scroll-snap-align: center;
    transition: background-color 0.2s ease, color 0.2s ease;
    @media (hover: hover) {
        &:hover {
            background: ${colors.brand};
            color: ${colors.ink};
        }
    }
`;

const stickyBar = css`
    position: sticky;
    top: 72px;
    z-index: 10;
    margin: -8px -8px 24px;
    padding: 12px 8px;
    background: ${colors.surfaceStrong};
    border-radius: 12px;
    @media (max-width: ${breakpoints.lg}) {
        top: 64px;
    }
`;

/* Sticky, horizontally scrolling category tabs:
   - active chip follows the section being read (scrollspy) and is kept centered
   - edges fade when more chips are off-screen, chips snap into place */
const fade = (start: boolean, end: boolean) => {
    const l = start ? '#000 0' : 'transparent 0, #000 28px';
    const r = end ? '#000 100%' : '#000 calc(100% - 40px), transparent 100%';
    return `linear-gradient(to right, ${l}, ${r})`;
};
const TabsBar = styled.nav<{ $atStart: boolean; $atEnd: boolean }>`
    ${stickyBar}
    display: flex;
    gap: 8px;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    -webkit-mask-image: ${(p) => fade(p.$atStart, p.$atEnd)};
    mask-image: ${(p) => fade(p.$atStart, p.$atEnd)};
`;

export const CategoryNav = ({ categories }: Props) => {
    const ids = categories.map((c) => c.id);
    const [active, setActive] = useActiveSection(ids);
    const barRef = useRef<HTMLElement>(null);
    const [edges, setEdges] = useState({ atStart: true, atEnd: false });

    // Keep the active chip centered in the scrolling row (scrolls the row only, not the page).
    useEffect(() => {
        const bar = barRef.current;
        const chip = bar?.querySelector<HTMLElement>(`[data-id="${active}"]`);
        if (!bar || !chip || bar.scrollWidth <= bar.clientWidth) return;
        bar.scrollTo({ left: chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
    }, [active]);

    const onBarScroll = () => {
        const bar = barRef.current;
        if (!bar) return;
        setEdges({
            atStart: bar.scrollLeft <= 4,
            atEnd: bar.scrollLeft + bar.clientWidth >= bar.scrollWidth - 4,
        });
    };
    useEffect(onBarScroll, []);

    const go = (id: string) => (e: MouseEvent) => {
        e.preventDefault();
        setActive(id);
        scrollToSection(id);
    };

    const chips = categories.map((c) => (
        <Chip
            key={c.id}
            data-id={c.id}
            href={`#${c.id}`}
            $active={active === c.id}
            aria-current={active === c.id ? 'true' : undefined}
            onClick={go(c.id)}
        >
            {c.label}
        </Chip>
    ));

    return (
        <TabsBar ref={barRef} aria-label="Menu categories" onScroll={onBarScroll} $atStart={edges.atStart} $atEnd={edges.atEnd}>
            {chips}
        </TabsBar>
    );
};

export default CategoryNav;
