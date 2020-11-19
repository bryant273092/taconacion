import { FlexRow, FlexColumn } from '../layout';
import styled from 'styled-components';

export const CateringContainer = styled(FlexColumn)`
    width: 90%;
    margin: 0 auto;
    background-color: rgba(0,0,0, 0.6);
    border-radius: 25px;
` 
export const CateringHeader = styled.h2`
    color: white;
    width: 100%;
    text-align: center;
`
export const BannerImage = styled.img`
    width: 60%; 
    margin: 0px auto;
    @media (max-width: 850px) {
        width: 70%
    } ;
`
export const CateringText = styled.h4`
    color: #ee971c;
    width: 100%;
    text-align: center;
`
export const CallButton = styled.a`
    width: 50%;
    margin: 25px auto; 
    color: white;
    text-align: center;
    border-radius: 10px;
    font-size: 25px;
    background-color: rgba(238, 151, 28, 0.7);
    padding: 10px 0px;
    @media (max-width: 850px) {
        font-size: 1em;
        width: 45%;
    } ;
    @media (max-width: 480px) {
        width: 80%;
        
    } ;
    
`