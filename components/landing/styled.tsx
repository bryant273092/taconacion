import styled from 'styled-components';
import { FlexColumn, FlexRow, Grid, Image} from '../layout';

interface LandingSectionHeaderProps {
    $topMargin?: string;
}
export const LandingSectionHeader = styled.h2<LandingSectionHeaderProps>`
    width: auto;
    color: white;
    margin-top: ${(props) => props.$topMargin || "7.5%"};
    text-align: center;
    border-radius: 20px;
    font-size: 3.2em;
    @media (max-width: 640px) {
        font-size: 2em;
    }
`

interface HomeBannerProps {
    $image?: string;
}
export const HomeBanner = styled(FlexColumn)<HomeBannerProps>`
    width: 100%;
    height: auto;
    background-image: ${(props) => props.$image|| "url(/taco_catering.webp)"};
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
export const ListItem = styled.li`
    width: 100%;
    color: #ee971c;
    font-size: 25px;
    margin: 20px 5px;
    text-align: center;
    list-style: none;
`
export const RowContainer = styled(FlexRow)`
    width: 90%;
    align-items: center;
    margin: 20px auto;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`