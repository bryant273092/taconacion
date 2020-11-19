import {BannerContainer, BannerHeader, BannerText, BannerButtonGrid, BannerButton, ImageFilter, ImageContainer, Image} from './styled';

export const Banner = () => {
    return(
        <BannerContainer>
            <ImageFilter>
                <ImageContainer>
                    <Image src={'taco_nacion_logo.png'}/>
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