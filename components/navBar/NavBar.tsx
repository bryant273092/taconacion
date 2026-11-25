import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import links from '../../data/nav_links.json';
import HamburgerIcon from './hamburgerIcon';
import OpenStatus from '../openStatus/OpenStatus';
import { site } from '../../config/site';
import { NavBarContainer, Brand, LogoLink, NavBarItems, NavLink, MenuToggle, MobileList, MobileLink, OrderCta } from './styled';

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { pathname, events } = useRouter();

    // Close the mobile menu after navigating.
    useEffect(() => {
        const close = () => setOpen(false);
        events.on('routeChangeStart', close);
        return () => events.off('routeChangeStart', close);
    }, [events]);

    return (
        <NavBarContainer aria-label="Main navigation">
            <Brand>
                <LogoLink href="/" aria-label="Taco Nacion home">
                    <Image width={50} height={49} alt="Taco Nacion logo" src="/taco-nacion-logo.webp" priority />
                </LogoLink>
                <OpenStatus />
            </Brand>

            <NavBarItems>
                {links.map((link) => (
                    <li key={link.href}>
                        <NavLink href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </NavBarItems>

            <OrderCta href={site.orderTakeoutUrl} data-track="order-takeout" target="_blank" rel="noopener noreferrer">
                Order Now
            </OrderCta>

            <MenuToggle
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((o) => !o)}
            >
                <HamburgerIcon />
            </MenuToggle>

            <MobileList id="mobile-menu" $open={open}>
                {links.map((link) => (
                    <li key={link.href}>
                        <MobileLink href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
                            {link.name}
                        </MobileLink>
                    </li>
                ))}
            </MobileList>
        </NavBarContainer>
    );
};
