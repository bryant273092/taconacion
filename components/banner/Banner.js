import {BannerContainer, BannerHeader, BannerText, BannerButtonGrid, BannerButton, ImageFilter, ImageContainer, Image} from './styled';

export const Banner = () => {
    return(
        <BannerContainer>
            <ImageFilter>
                <ImageContainer>
                    <Image height='200px' width='300px' src={'taco_nacion_logo.webp'}/>
                </ImageContainer>
                
                <BannerText>Authentic Mexican Food</BannerText>
                <BannerButtonGrid>
                    <BannerButton href='/menu'>View Menu</BannerButton>
                    <BannerButton href='/order'>Order Online</BannerButton>
                </BannerButtonGrid>
            </ImageFilter>
        </BannerContainer>
    )
}