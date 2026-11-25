import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import { site } from "../../config/site";
import { HoursTable } from "../hours/Hours";
import { Button } from "../layout";
import {
  FooterContainer,
  FooterItems,
  FooterItem,
  FooterHeader,
  IconContainer,
  FooterIcon,
  Address,
  TextLink,
  CopyRight,
} from "./styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterItem>
          <FooterHeader>Visit Us</FooterHeader>
          <Address>
            <strong>{site.name}</strong>
            <br />
            {site.address.streetAddress}
            <br />
            {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
          </Address>
          <Button
            title="Get directions to Taco Nacion in Ontario, CA"
            href={site.directionsUrl} data-track="directions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </Button>
        </FooterItem>
        <FooterItem>
          <FooterHeader>Hours</FooterHeader>
          <HoursTable />
        </FooterItem>
        <FooterItem>
          <FooterHeader>Contact</FooterHeader>
          <TextLink href={`tel:${site.phone}`} data-track="call">{site.phoneDisplay}</TextLink>
          <Button title="Call Taco Nacion" href={`tel:${site.phone}`} data-track="call">
            Call Now
          </Button>
          <IconContainer>
            <FooterIcon
              aria-label="Taco Nacion on Instagram"
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </FooterIcon>
            <FooterIcon
              aria-label="Taco Nacion on Yelp"
              href={site.social.yelp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYelp} />
            </FooterIcon>
          </IconContainer>
        </FooterItem>
      </FooterItems>
      <CopyRight>
        © {new Date().getFullYear()} {site.name} · Site by Commercify
      </CopyRight>
    </FooterContainer>
  );
};
