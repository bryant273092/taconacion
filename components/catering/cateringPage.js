import {CateringContainer, CateringHeader, BannerImage, CateringText, CallButton} from './styled';

export const CateringPage = () => {
    return(
        <CateringContainer >
            <CateringHeader>Catering Packages</CateringHeader>
            <CateringText>We provide the best catering packages for your next event.</CateringText>
            <BannerImage src={'/catering.png'}></BannerImage>
            <CateringText>Give us a call for more details or to place an order</CateringText>
            <CallButton href={'tel:9099062045'}>Call Now</CallButton>
            
        </CateringContainer>
    )
}