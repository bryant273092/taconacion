import NextImage from 'next/image';
import { Container, HeaderTwo, Lead, Button, ButtonRow } from '../layout';
import { site } from '../../config/site';
import { Photo } from './styled';

export const CateringPage = () => {
    return (
        <Container>
            <HeaderTwo>Mexican Food Catering for Every Event</HeaderTwo>
            <Photo>
                <NextImage
                    src="/catering.webp"
                    alt="Taco Nacion catering spread of street tacos"
                    width={2048}
                    height={847}
                    sizes="(max-width: 1200px) 90vw, 1100px"
                    priority
                />
            </Photo>
            <Lead>
                Planning a party, office lunch, or family gathering in Ontario or the
                Inland Empire? We provide a variety of catering packages for all
                events. Give us a call to find out more or to place an order.
            </Lead>
            <ButtonRow>
                <Button title="Call Taco Nacion about catering" href={`tel:${site.phone}`} data-track="call">
                    Call {site.phoneDisplay}
                </Button>
            </ButtonRow>
        </Container>
    )
}
