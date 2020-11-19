import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../layout';

export const MenuContainer = styled(FlexColumn)`
    width: 90%;
    margin: 0px auto;
    background-color: rgba(0,0, 0, 0.6);
    border-radius: 30px 0px;
    padding: 10px;
`
export const MenuNavContainer = styled(FlexRow)`
    width: 80%;
    margin: 0px auto;
    height: 30px;
    border-radius: 25px;
    background-color: #ee971c;
`
export const MenuButton = styled.a`
    color: black;
    text-align: center;
    margin: auto;
    border-bottom: 2px solid black;
    font-size: 20px;
`
export const ItemListContainer = styled(FlexColumn)`
    width: 80%;
    margin: 0px auto;
`
export const CategoryHeading = styled.h2`
    color: white;
    text-align: center;
    
`   
export const ItemRow = styled(FlexRow)`
    justify-content: space-between;
`

export const TextContainer = styled(FlexColumn)`
    text-align: left;
`
export const ItemHeading = styled.h3`
    color: #ee971c;
`
export const ItemDescription = styled.p`
    font-size: 15px;
    color: white;
    margin: 0;
`
export const ItemPrice = styled.h3`
    color: #ee971c; 
    text-align: right;
`
export const MeatSection = styled(FlexColumn)`
    width: 100%;
    background-color: #ee971c;
    height: auto;
    margin: 0px auto;
    border-radius: 5px;
`
export const MeatHeading = styled.h3`
    color: black;
    text-align: center;
    margin-bottom: 0px;
`
export const MeatOptions = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    margin: 0px auto;
    padding: 0px 5px;
`
export const MeatText = styled.h4`
    color: white;
    text-align:  center;
    padding: 0px 5px;
`
export const AltLang = styled.span`
    color: black;
    font-size: 12px;
    display: block;
`
export const OptionDescription = styled.h5`
    color: #ee971c;
    text-align: center;
    font-style: italic;
    margin-top: 0px;

`