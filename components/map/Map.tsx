import NextImage from "next/image";
import { Container, HeaderTwo, HeaderThree, Button } from "../layout";
import { HoursTable } from "../hours/Hours";
import OpenStatus from "../openStatus/OpenStatus";
import { site } from "../../config/site";
import { Grid, Column, Photo, AddressLink, MapFrame } from "./styled";

export const Map = () => {
  return (
    <Container>
      <HeaderTwo>Where to Find Us</HeaderTwo>
      <HeaderThree as="p">Located in the Milliken Business Center in Ontario, CA</HeaderThree>
      <Grid>
        <Photo>
          <NextImage
            alt="Storefront of Taco Nacion in Ontario, California"
            src="/taco-nacion-ontario-storefront.jpg"
            width={768}
            height={768}
            sizes="(max-width: 850px) 90vw, 480px"
          />
        </Photo>
        <Column>
          <HeaderThree as="h3">Address</HeaderThree>
          <AddressLink
            title="Get directions to Taco Nacion in Ontario, CA"
            href={site.directionsUrl} data-track="directions"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.addressDisplay}
          </AddressLink>
          <HeaderThree as="h3">Hours</HeaderThree>
          <OpenStatus />
          <HoursTable />
          <Button
            title="Directions to Taco Nacion"
            href={site.directionsUrl} data-track="directions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </Button>
          <Button title="Call Taco Nacion" href={`tel:${site.phone}`} data-track="call">
            Call {site.phoneDisplay}
          </Button>
        </Column>
      </Grid>
      <MapFrame
        title="Google Map showing Taco Nacion in Ontario, CA"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        src={site.mapEmbedUrl}
      />
    </Container>
  );
};
