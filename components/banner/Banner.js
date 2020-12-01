import {BannerContainer, BannerHeader, BannerText, BannerButtonGrid, BannerButton, ImageFilter, ImageContainer, Image} from './styled';

export const Banner = () => {
    return(
        <BannerContainer>
            <ImageFilter>
                <ImageContainer>
                    <Image alt="Taco Nacion Logo" src={'taco_nacion_logo.webp'}/>
                </ImageContainer>
                
                <BannerText>Authentic Mexican Food</BannerText>
                <BannerButtonGrid>
                    <BannerButton title="View Menu for Taco Nacion"href='/menu'>View Menu</BannerButton>
                    <BannerButton title="Order Online from Taco Nacion"href='/order'>Order Online</BannerButton>
                </BannerButtonGrid>
            </ImageFilter>
        </BannerContainer>
    )
}