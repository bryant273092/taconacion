import { FooterContainer, FooterItem, FooterHeader, FooterIcon, IconContainer, FooterButton, HoursText, HoursContainer, Hours, Days, DaysText, FooterItems, CopyRight, CallButton } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYelp, faFacebook } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
    const mapStyle = { width: "90%",margin: "auto", height: "300", frameborder: "0", allowfullscreen: "", ariahidden: "false", tabindex: "0", marginTop: "20px" }
    return (
        <FooterContainer>
            <FooterItems>
                <FooterItem>

                    <FooterHeader>Find Us Online</FooterHeader>
                    <IconContainer>
                        <FooterIcon href="https://www.instagram.com/taco_nacion/">
                            <FontAwesomeIcon  icon={faInstagram}></FontAwesomeIcon>
                        </FooterIcon>
                        <FooterIcon href="https://www.yelp.com/biz/taco-nacion-ontario">
                            <FontAwesomeIcon  icon={faYelp}></FontAwesomeIcon>
                        </FooterIcon>
                        <FooterIcon>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </FooterIcon>
                    </IconContainer>

                </FooterItem>
                <FooterItem>
                    <FooterHeader>Location & Hours</FooterHeader>
                    {/* <FooterButton href="https://maps.apple.com/?address=1119%20S%20Milliken%20Ave,%20Unit%20G,%20Ontario,%20CA%20%2091761,%20United%20States&auid=18390287420442012809&ll=34.052728,-117.557599&lsp=9902&q=Taco%20Nacion&_ext=ChkKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAAEiYpCSJBmCwGQUAxwU38hAhkXcA5h/dm9FIHQUBBN9fE4FZjXcBQBA%3D%3D">Ontario, CA</FooterButton>
                    <iframe style={mapStyle} src={"https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d211880.4777792414!2d-117.575223!3d33.9248577!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c3351b7666baad%3A0x7fc95fd75e8370cd!2sTaco%20Nacion%2C%201119%20S%20Milliken%20Ave%20STE%20G%2C%20Ontario%2C%20CA%2091761!3m2!1d34.0523891!2d-117.5576833!5e0!3m2!1sen!2sus!4v1605662579084!5m2!1sen!2sus"}></iframe> */}
                    <CallButton href="https://maps.apple.com/?address=1119%20S%20Milliken%20Ave,%20Unit%20G,%20Ontario,%20CA%20%2091761,%20United%20States&auid=18390287420442012809&ll=34.052728,-117.557599&lsp=9902&q=Taco%20Nacion&_ext=ChkKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAAEiYpCSJBmCwGQUAxwU38hAhkXcA5h/dm9FIHQUBBN9fE4FZjXcBQBA%3D%3D">Get Directions</CallButton>
                    <HoursContainer>
                        <Days>
                            <DaysText>Mon-Fri</DaysText>
                            <DaysText>Sat</DaysText>
                            <DaysText>Sun</DaysText>
                        </Days>
                        <Hours>
                            <HoursText>9:00 AM - 6:00 PM</HoursText>
                            <HoursText>9:00 AM - 3:00 PM</HoursText>
                            <HoursText>Closed</HoursText>
                        </Hours>
                    </HoursContainer>
                </FooterItem>
                <FooterItem>
                    <FooterHeader>Contact</FooterHeader>
                    <CallButton href="tel:90999062045">Call Now</CallButton>
                    <FooterButton href="tel:90999062045"> (909)906-2045</FooterButton>
                </FooterItem>
                
            </FooterItems>
            <FooterItem>
                <CopyRight >@ Copyright 2020 by <FooterButton href="//bryanth.dev">DreamWare LLC.</FooterButton></CopyRight>
            </FooterItem>
        </FooterContainer>
    )
}