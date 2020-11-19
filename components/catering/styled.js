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
    width: 20%;
    height: 45px;
    background-color: rgba(0,0,0);
    margin: 0px auto;
    color: white;
    text-align: center;
    border: solid 2px #ee971c;
    border-radius: 5px;
    line-height: 35px;
    margin-bottom: 20px;
    @media (max-width: 650px) {
        width: 60%
    } ;
    
`