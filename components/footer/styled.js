import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../layout'

export const FooterContainer = styled(FlexColumn)`
    width: 90%;
    margin: 200px auto 10px auto;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6)
    
    
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
    font-size: 25px;
`
export const IconContainer = styled(FlexRow)`
    width: 70%;
    margin: 0px auto;
    justify-content: space-between;
    @media (max-width: 850px) {
        width: 80%
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
    width: 90%;
    margin: 0px auto;
    @media (max-width: 1050px) {
        font-size: 13px
    } ;
    
`
export const Hours = styled(FlexColumn)`
    width: 60%;
`
export const Days = styled(FlexColumn)`
    width: 40%;
`
export const HoursText = styled.h4`
    color: white;
    margin: 2px;
    text-align: right;
    margin-top: 5px;
    
`
export const DaysText = styled.h4`
    color: white;
    margin: 2px;
    text-align: left;
    margin-top: 5px;
`
export const FooterItems = styled(FlexRow)`
    
    @media (max-width: 850px) {
        flex-direction: column;
    } ;

`
export const CopyRight = styled.h5`
    color: white;
    padding-top: 10px;
`