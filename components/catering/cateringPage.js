import {CateringContainer, CateringHeader, BannerImage, CateringText, CallButton} from './styled';

export const CateringPage = () => {
    return(
        <CateringContainer >
            <CateringHeader>Available for all events</CateringHeader>
            <BannerImage src={'/catering.webp'}></BannerImage>
            <CateringText>We provide a variety of catering packages for all events. Give us a call to find out more or to place an order.</CateringText>
            <CallButton href={'tel:9099062045'}>Call Now</CallButton>
            
        </CateringContainer>
    )
}