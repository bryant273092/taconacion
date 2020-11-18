import {BannerContainer, BannerHeader, BannerText, BannerButtonGrid, BannerButton, ImageFilter} from './styled';

export const Banner = () => {
    return(
        <BannerContainer>
            <ImageFilter>
                <BannerHeader>Taco Nacion</BannerHeader>
                <BannerText>Authentic Mexican Food</BannerText>
                <BannerButtonGrid>
                    <BannerButton href='/menu'>View Menu</BannerButton>
                    <BannerButton href='/order'>Order Online</BannerButton>
                </BannerButtonGrid>
            </ImageFilter>
        </BannerContainer>
    )
}