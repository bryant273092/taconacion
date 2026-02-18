import {
    NavBarContainer,
    NavBarLogo,
    NavBarItems,
    NavBarButton,
    HamburgerIconDiv,
    NavBarItem,
    DropDownItem,
    MobileListContainer,
} from './styled';
import HamburgerIcon from './hamburgerIcon';
import links from '../../data/nav_links.json'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
export const NavBar = () => {
    //hook to control opening/closing dropdown menu when user clicks on hamburger icon
    const [display, setDisplay] = useState('none');
    const teamLogo = "";
    //alternates display property for mobile drop down menu
    const changeDisplay = () => {
        if (display == 'none') {
            setDisplay('flex');
        } else {
            setDisplay('none');
        }
    };
    return (
        <NavBarContainer>
            {/* toggles mobile dropdown list when user clicks on hamburger icon */}
            <HamburgerIconDiv onClick={changeDisplay}>
                <HamburgerIcon />
            </HamburgerIconDiv>
            <MobileListContainer $display={display}>
                {links.map((link) => (
                    <Link key={link.name} title={"Go To " + link.name} href={link.href}>
                        <DropDownItem>
                            {link.name}
                        </DropDownItem>
                    </Link>
                ))}
            </MobileListContainer>
            <NavBarLogo>
                <Image width={50} height={48} alt="An image of the Taco Nacion Logo" src={"/taco_nacion_logo.webp"} priority />
            </NavBarLogo>
            <NavBarItems>
                {links.map((link) => (
                    <NavBarItem key={link.name}>
                        <Link title={"Go To " + link.name} key={link.name} href={link.href}>
                            <NavBarButton >
                                {link.name}
                            </NavBarButton>
                        </Link>

                    </NavBarItem>
                ))}
            </NavBarItems>
        </NavBarContainer>
    );
};
