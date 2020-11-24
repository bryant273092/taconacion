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
import Image from 'next/image'
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
            <MobileListContainer display={display}>
                {links.map((link) => (
                    <DropDownItem key={link.name} href={link.href}>
                        {link.name}
                    </DropDownItem>
                ))}
            </MobileListContainer>
            <NavBarLogo>
                <Image width='50px' height='48px' alt="Taco Nacion Logo" src={"/taco_nacion_logo.webp"} />
            </NavBarLogo>
            <NavBarItems>
                {links.map((link) => (
                    <NavBarItem key={link.name}>
                        <NavBarButton key={link.name} href={link.href}>
                            {link.name}
                        </NavBarButton>
                    </NavBarItem>
                ))}
            </NavBarItems>
        </NavBarContainer>
    );
};
