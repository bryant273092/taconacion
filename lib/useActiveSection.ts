import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently being read: the last section whose top has
 * scrolled past `offset` px from the top of the viewport (below the sticky headers).
 */
export const useActiveSection = (ids: string[], offset = 170) => {
    const [active, setActive] = useState(ids[0]);
    const key = ids.join('|');

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            let current = ids[0];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= offset) current = id;
            }
            setActive(current);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key, offset]);

    return [active, setActive] as const;
};

/** Smoothly scrolls to a section (scroll-margin-top handles the sticky header offset). */
export const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
};
