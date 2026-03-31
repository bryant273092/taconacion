import {
  Container,
  HeaderTwo,
  HeaderThree,
  Button,
  Image,
  Text,
} from "../layout";
import { Days, DaysText, Hours, HoursText } from "../footer/styled";
import { HoursContainer } from "./styled";

export const Map = () => {
  const mapStyle = {
    width: "80%",
    margin: "50px auto",
    height: "300px",
    marginTop: "20px",
  };
  return (
    <Container>
      <HeaderTwo>Where to find us</HeaderTwo>
      <HeaderThree>
        Located at the Milliken Business Center in Ontario
      </HeaderThree>
      <Image
        alt="Image of the Physical location of Taco Nacion in Ontario, California"
        src={"/taco_nacion_physical.jpg"}
      />
      <Button
        title="Directions to Taco Nacion"
        href={
          "https://maps.apple.com/?address=1119%20S%20Milliken%20Ave,%20Unit%20G,%20Ontario,%20CA%20%2091761,%20United%20States&auid=18390287420442012809&ll=34.052728,-117.557599&lsp=9902&q=Taco%20Nacion&_ext=ChkKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAAEiYpCSJBmCwGQUAxwU38hAhkXcA5h/dm9FIHQUBBN9fE4FZjXcBQBA%3D%3D"
        }
      >
        Get Directions
      </Button>
      <Text>
        <a
          title="Get Directions to Taco Nacion Restaurant in Ontario"
          href={
            "https://maps.apple.com/?address=1119%20S%20Milliken%20Ave,%20Unit%20G,%20Ontario,%20CA%20%2091761,%20United%20States&auid=18390287420442012809&ll=34.052728,-117.557599&lsp=9902&q=Taco%20Nacion&_ext=ChkKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAAEiYpCSJBmCwGQUAxwU38hAhkXcA5h/dm9FIHQUBBN9fE4FZjXcBQBA%3D%3D"
          }
        >
          1119 S Milliken Ave STE G, Ontario, CA 91761
        </a>
      </Text>
      <HeaderThree>Hours</HeaderThree>
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
      <iframe
        style={mapStyle}
        title="Google Map for Taco Nacion Ontario Location"
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
        src={
          "https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d211880.4777792414!2d-117.575223!3d33.9248577!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c3351b7666baad%3A0x7fc95fd75e8370cd!2sTaco%20Nacion%2C%201119%20S%20Milliken%20Ave%20STE%20G%2C%20Ontario%2C%20CA%2091761!3m2!1d34.0523891!2d-117.5576833!5e0!3m2!1sen!2sus!4v1605662579084!5m2!1sen!2sus"
        }
      ></iframe>
    </Container>
  );
};
