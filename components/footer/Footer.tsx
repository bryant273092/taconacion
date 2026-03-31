import {
  FooterContainer,
  FooterItem,
  FooterHeader,
  FooterIcon,
  IconContainer,
  FooterButton,
  HoursText,
  HoursContainer,
  Hours,
  Days,
  DaysText,
  FooterItems,
  CopyRight,
  CallButton,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYelp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { NewsLetter } from "../newsLetter/NewsLetter";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterItem>
          <FooterHeader>Find Us Online</FooterHeader>
          <IconContainer>
            <FooterIcon
              title="Instagram"
              href="https://www.instagram.com/taco.nacion/"
            >
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </FooterIcon>
            <FooterIcon
              title="Yelp"
              href="https://www.yelp.com/biz/taco-nacion-ontario"
            >
              <FontAwesomeIcon icon={faYelp}></FontAwesomeIcon>
            </FooterIcon>
            <FooterIcon>
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </FooterIcon>
          </IconContainer>
        </FooterItem>
        <FooterItem>
          <FooterHeader>Location & Hours</FooterHeader>

          <CallButton
            title="Find Directions for Taco Nacion Location in Ontario"
            href="https://maps.apple.com/?address=1119%20S%20Milliken%20Ave,%20Unit%20G,%20Ontario,%20CA%20%2091761,%20United%20States&auid=18390287420442012809&ll=34.052728,-117.557599&lsp=9902&q=Taco%20Nacion&_ext=ChkKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAAEiYpCSJBmCwGQUAxwU38hAhkXcA5h/dm9FIHQUBBN9fE4FZjXcBQBA%3D%3D"
          >
            Get Directions
          </CallButton>
          <HoursContainer>
            <Days>
              <DaysText>Mon-Thurs</DaysText>
              <DaysText>Fri</DaysText>
              <DaysText>Sat</DaysText>
              <DaysText>Sun</DaysText>
            </Days>
            <Hours>
              <HoursText>7:30 AM - 6:00 PM</HoursText>
              <HoursText>7:30 AM - 7:00 PM</HoursText>
              <HoursText>7:30 AM - 2:30 PM</HoursText>
              <HoursText>Closed</HoursText>
            </Hours>
          </HoursContainer>
        </FooterItem>
        <FooterItem>
          <FooterHeader>Contact</FooterHeader>
          <CallButton
            title="Call Taco Nacion Ontario Location"
            href="tel:9099062045"
          >
            Call Now
          </CallButton>
          <FooterButton
            title="Call Taco Nacion Ontario Location"
            href="tel:9099062045"
          >
            {" "}
            (909)906-2045
          </FooterButton>
        </FooterItem>
      </FooterItems>
      {/* <FooterItem>
                <NewsLetter></NewsLetter>
            </FooterItem> */}
      <FooterItem>
        <CopyRight>
          @ Copyright 2020 by{" "}
          <FooterButton title="Go to Commercify page" href="//bryanth.dev">
            Commercify
          </FooterButton>
        </CopyRight>
      </FooterItem>
    </FooterContainer>
  );
};
