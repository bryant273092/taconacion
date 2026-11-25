import NextImage from "next/image";
import Link from "next/link";
import { Container, HeaderThree, Button, ButtonRow, Content, Lead } from "../layout";
import { Overlay } from "../banner/styled";
import { site } from "../../config/site";
import {
  Stack,
  SectionHeader,
  PhotoBanner,
  BeerList,
  BeerItem,
  SplitRow,
  PhotoFrame,
  SplitText,
  HappyHour,
  Price,
} from "./styled";

const beers = [
  "Golden Cart",
  "Bud Light",
  "Bud Light Seltzer",
  "Corona",
  "Modelo",
  "Dos Equis",
  "Michelob Ultra",
  "Pacifico",
  "Sol",
  "Tecate",
];

export const LandingSection = () => {
  return (
    <Stack>
      <Container as="section" aria-labelledby="patio-heading">
        <SectionHeader id="patio-heading">Patio Dining Available</SectionHeader>
        <SplitRow>
          <PhotoFrame>
            <NextImage
              src="/taco_nacion_physical.jpg"
              alt="Taco Nacion restaurant exterior with patio dining area in Ontario, California"
              width={768}
              height={768}
              sizes="(max-width: 850px) 90vw, 480px"
            />
          </PhotoFrame>
          <SplitText>
            <p>
              Grab a table on our spacious outdoor patio for a fresh plate of
              street tacos, a breakfast burrito, or a cold draft beer. Enjoy
              the Ontario sunshine and catch your favorite game while you eat.
            </p>
            <p>
              Find us in the Milliken Business Center at{" "}
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
                {site.addressDisplay}
              </a>
              . Browse the full <Link href="/menu">menu</Link> or{" "}
              <Link href="/order">order online</Link> for pickup or delivery.
            </p>
          </SplitText>
        </SplitRow>
        <Button
          title="Directions to Taco Nacion"
          href={site.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </Button>
      </Container>

      <PhotoBanner as="section" aria-labelledby="beer-heading" $image="/taco_beer.webp">
        <Overlay>
          <SectionHeader id="beer-heading" $flush>
            Now Serving Tap &amp; Draft Beer
          </SectionHeader>
          <BeerList>
            {beers.map((beer) => (
              <BeerItem key={beer}>{beer}</BeerItem>
            ))}
          </BeerList>
          <HappyHour>
            <SectionHeader as="h3" $flush>Happy Hour: All Draft Beer</SectionHeader>
            <Price>$4.99</Price>
            <HeaderThree as="p">2 PM – Close · 16 oz only</HeaderThree>
          </HappyHour>
        </Overlay>
      </PhotoBanner>

      <PhotoBanner as="section" aria-labelledby="catering-heading">
        <Overlay>
          <Content>
            <SectionHeader id="catering-heading" $flush>
              Want Catering at Your Next Event?
            </SectionHeader>
            <Lead>
              We provide catering packages for all events. Contact us for more
              info or to place an order.
            </Lead>
            <ButtonRow>
              <Button title="Call Taco Nacion" href={`tel:${site.phone}`}>
                Call {site.phoneDisplay}
              </Button>
              <Button as={Link} href="/catering" title="Taco Nacion catering">
                Catering Info
              </Button>
            </ButtonRow>
          </Content>
        </Overlay>
      </PhotoBanner>
    </Stack>
  );
};
