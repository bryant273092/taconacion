import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import links from '../../data/nav_links.json';
import HamburgerIcon from './hamburgerIcon';
import { NavBarContainer, LogoLink, NavBarItems, NavLink, MenuToggle, MobileList, MobileLink, OrderCta } from './styled';

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
            <LogoLink href="/" aria-label="Taco Nacion home">
                <Image width={50} height={48} alt="Taco Nacion logo" src="/taco_nacion_logo.webp" priority />
            </LogoLink>

            <NavBarItems>
                {links.map((link) => (
                    <li key={link.href}>
                        <NavLink href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </NavBarItems>

            <OrderCta href="/order">Order Now</OrderCta>

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
