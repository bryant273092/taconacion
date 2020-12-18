import styled from 'styled-components';
import { FlexColumn, FlexRow, Grid, Image} from '../layout';

export const HomeBanner = styled(FlexColumn)`
    width: 100%;
    height: auto;
    background-image: ${(props) => props.image|| "url(/taco_catering.webp)"};
    background-size: cover;
    border-radius: 5px;
    background-repeat: no-repeat;
    
    background-position: center;
`
export const TextGrid = styled(FlexColumn)`
    width: 100%;
    height: 100%;
`
export const List = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: auto;
    align-items: center;
    padding: 0;
`
export const ListItem = styled.h5`
    width: 100%;
    color: #ee971c;
    font-size: 25px;
    margin: 20px 5px;
    text-align: center;
`
export const RowContainer = styled(FlexRow)`
    width: 90%;
    align-items: center;
    margin: 20px auto;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`