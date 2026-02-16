import {
  Container,
  Grid,
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  Button,
  Content,
  Text,
  Image,
} from "../layout";
import { HomeBanner, TextGrid, List, ListItem, RowContainer } from "./styled";
import { ImageFilter, BannerButtonGrid, BannerHeader } from "../banner/styled";

export const LandingSection = () => {
  return (
    <Container color={"transparent"} style={{ marginTop: "100px" }}>
      <Container
        style={{ width: "100%", marginBottom: "50px", paddingBottom: "50px" }}
      >
        <BannerHeader>Patio Dining Available</BannerHeader>
        <RowContainer>
          <Image
            style={{ width: "60%", borderRadius: "10px" }}
            src={"/taco_nacion_physical.jpg"}
          />
          <HeaderThree style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
            Taco Nacion offers outdoor dining. Join us for a delicious
            meal or a refreshing beverage on our spacious patio. Enjoy the warm
            weather and watch your favorite sporting even..
            We look forward to seeing you soon!
          </HeaderThree>
        </RowContainer>

        <Button
          title="Directions to Taco Nacion"
          href={
            "https://maps.apple.com/?address=1119%20S%20Milliken%20Ave,%20Unit%20G,%20Ontario,%20CA%20%2091761,%20United%20States&auid=18390287420442012809&ll=34.052728,-117.557599&lsp=9902&q=Taco%20Nacion&_ext=ChkKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAAEiYpCSJBmCwGQUAxwU38hAhkXcA5h/dm9FIHQUBBN9fE4FZjXcBQBA%3D%3D"
          }
        >
          Get Directions
        </Button>
      </Container>
      <HomeBanner image={"url(/taco_beer.webp)"}>
        <ImageFilter>
          <TextGrid>
            <BannerHeader topMargin="1%">
              Now Serving Tap and Draft Beer
            </BannerHeader>
            <List>
              <ListItem>Golden Cart</ListItem>
              <ListItem>Bud Light</ListItem>
              <ListItem>Bud Light Seltzer</ListItem>
              <ListItem>Corona</ListItem>
              <ListItem>Modelo</ListItem>
              <ListItem>Dos X</ListItem>
              <ListItem>Michelob Ultra</ListItem>
              <ListItem>Pacifico</ListItem>
              <ListItem>Sol</ListItem>
              <ListItem>Tecate</ListItem>
            </List>
            <BannerHeader style={{ marginBottom: "20px" }} topMargin="10%">
              Happy Hour: All Draft Beer
            </BannerHeader>
            <BannerHeader style={{ color: "#ee971c" }} topMargin="0">
              $4.99
            </BannerHeader>
            <HeaderTwo>2PM - Closing</HeaderTwo>
            <HeaderThree>16oz Only</HeaderThree>
          </TextGrid>
        </ImageFilter>
      </HomeBanner>
      <div style={{ height: "100px" }} />
      <HomeBanner>
        <ImageFilter>
          <Content>
            <BannerHeader>Want Catering At Your Next Event?</BannerHeader>
            <HeaderThree>
              {" "}
              Contact us for more info or to place an order
            </HeaderThree>
            <BannerButtonGrid>
              <Button title="Call Taco Nacion" href={"tel:9099062045"}>
                Call Now
              </Button>
            </BannerButtonGrid>
          </Content>
        </ImageFilter>
      </HomeBanner>
    </Container>
  );
};
