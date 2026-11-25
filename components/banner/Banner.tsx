import NextImage from 'next/image';
import { BannerContainer, Overlay, Heading, Tagline, BannerButtonGrid, BannerButton } from './styled';

export const Banner = () => {
    return (
        <BannerContainer>
            <Overlay>
                <NextImage
                    src="/taco-nacion-logo.webp"
                    alt="Taco Nacion"
                    width={989}
                    height={973}
                    priority
                    sizes="(max-width: 640px) 55vw, 324px"
                    style={{ width: 'min(55vw, 324px)', height: 'auto' }}
                />
                <Heading>Authentic Mexican Food in Ontario, CA</Heading>
                <Tagline>Street tacos, breakfast burritos, seafood &amp; birria — plus draft beer on the patio.</Tagline>
                <BannerButtonGrid>
                    <BannerButton title="View the Taco Nacion menu" href="/menu">View Menu</BannerButton>
                    <BannerButton title="Order online from Taco Nacion" href="/order">Order Online</BannerButton>
                </BannerButtonGrid>
            </Overlay>
        </BannerContainer>
    )
}
