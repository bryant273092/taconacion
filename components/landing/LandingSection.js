import { faRProject } from '@fortawesome/free-brands-svg-icons';
import Home from '../../pages';
import {Container, Grid, HeaderOne, HeaderTwo, HeaderThree, Button, Content, Text} from '../layout';
import {HomeBanner, TextGrid, List, ListItem} from './styled'
import {ImageFilter, BannerButtonGrid, BannerHeader} from '../banner/styled'


export const LandingSection = () => {
    return(
        <Container color={"transparent"}style={{marginTop:"100px"}}>
            <HomeBanner>
                <ImageFilter>
                    <Content>
                        <BannerHeader >Want Catering At Your Next Event?</BannerHeader>
                        <HeaderThree> Contact us for more info or to place an order</HeaderThree>
                        <BannerButtonGrid>
                            <Button title= "Call Taco Nacion"href={'tel:9099062045'}>
                                Call Now
                            </Button>
                        </BannerButtonGrid>
                    </Content> 
                </ImageFilter>
                
            </HomeBanner>
            <div style={{height: "100px"}}>

            </div>
            <HomeBanner image={"url(/taco_beer.webp)"}>
                <ImageFilter>
                        <TextGrid>
                            <BannerHeader topMargin="1%">Now Serving Tap and Draft Beer</BannerHeader>
                            <List>
                                <ListItem>Golden Cart</ListItem>
                                <ListItem>Bud Light</ListItem>
                                <ListItem>Bud Light Seltzer</ListItem>
                                <ListItem>Corona</ListItem>
                                <ListItem>Modelo</ListItem>
                                <ListItem>Dos X</ListItem>
                                <ListItem>Michelob Ultra</ListItem>
                                <ListItem>Pacifico</ListItem>
                                <ListItem>Sol</ListItem>
                                <ListItem>Tecate</ListItem>
                            </List>
                            <BannerHeader style={{marginBottom:"20px"}}topMargin="10%">Happy Hour: All Draft Beer</BannerHeader>
                            <BannerHeader style={{color: "#ee971c"}}topMargin="0">$2.99</BannerHeader>
                            <HeaderTwo>2PM - Closing</HeaderTwo>
                            <HeaderThree >16oz Only</HeaderThree>
                            
                        </TextGrid>
                </ImageFilter>
                
            
            </HomeBanner>
        </Container>
    )
}