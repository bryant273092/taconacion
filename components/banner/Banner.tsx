import { BannerContainer, BannerHeader, BannerText, BannerButtonGrid, BannerButton, ImageFilter, ImageContainer, Image } from './styled';
import Link from 'next/link';
export const Banner = () => {
    return (
        <BannerContainer>
            <ImageFilter>
                <ImageContainer>
                    <Image alt="Taco Nacion Logo" src={'taco_nacion_logo.webp'} />
                </ImageContainer>

                <BannerText>Authentic Mexican Food</BannerText>
                <BannerButtonGrid>
                    <Link title="View Menu for Taco Nacion" href='/menu'>
                        <BannerButton >View Menu</BannerButton>
                    </Link>
                    <Link title="Order Online from Taco Nacion" href='/order'>
                        <BannerButton >Order Online</BannerButton>
                    </Link>
                </BannerButtonGrid>
            </ImageFilter>
        </BannerContainer>
    )
}