import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../layout'

export const FooterContainer = styled(FlexColumn)`
    width: 90%;
    margin: 200px auto 10px auto;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 25px;
    
    
`
export const FooterItem = styled(FlexColumn)`
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
`
export const FooterHeader = styled.h2`
    color: #ee971c;
`
export const FooterButton = styled.a`
    color: white;
    
`
export const IconContainer = styled(FlexRow)`
    width: 60%;
    margin: 0px auto;
    justify-content: space-between;
    @media (max-width: 850px) {
        width: 45%
    } ;
    @media (max-width: 480px) {
        width: 80%;
        
    } ;
`
export const FooterIcon = styled(FooterButton)`
    font-size: 50px;
    @media (min-width: 2000px) {
        font-size: 70px;
    } ;
`
export const FooterLogo = styled.img`

`
export const HoursContainer = styled(FlexRow)`
width: 80%;
    margin: 0px auto;
    @media (max-width: 1000px) {
        font-size: 13px;
        
    } ;
    @media (max-width: 850px) {
        width: 45%;
        
    } ;
    @media (max-width: 480px) {
        width: 80%;
        
    } ;
    
    
`
export const Hours = styled(FlexColumn)`
    width: 65%;
`
export const Days = styled(FlexColumn)`
    width: 35%;
`
export const HoursText = styled.p`
    color: white;
    margin: 2px;
    text-align: right;
    margin-top: 5px;
    font-size: 1em;
`
export const DaysText = styled.p`
    color: white;
    margin: 2px;
    text-align: left;
    margin-top: 5px;
    font-size: 1em;
`
export const FooterItems = styled(FlexRow)`
    
    @media (max-width: 850px) {
        flex-direction: column;
    } ;

`
export const CopyRight = styled.p`
    color: white;
    padding-top: 10px;
    font-size: 1.17em;
    font-weight: bold;
`
export const CallButton = styled.a`
    width: 80%;
    margin: 5px auto;
    color: #1a1a1a;
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