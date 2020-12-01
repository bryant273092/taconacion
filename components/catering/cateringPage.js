import {CateringContainer, CateringHeader, BannerImage, CateringText, CallButton} from './styled';

export const CateringPage = () => {
    return(
        <CateringContainer >
            <CateringHeader>Available for all events</CateringHeader>
            <BannerImage alt="Banner Image of Tacos for Catering Services provided by Taco Nacion"src={'/catering.webp'}></BannerImage>
            <CateringText>We provide a variety of catering packages for all events. Give us a call to find out more or to place an order.</CateringText>
            <CallButton title="Call Taco Nacion"href={'tel:9099062045'}>Call Now</CallButton>
            
        </CateringContainer>
    )
}