import { Text, Heading } from './styled'
import { Button, CenteredDiv } from '../layout'
import Link from 'next/link';

export const CovidModal = ({setIsOpen}) => {
    return (
        <>
            <Heading>COVID-19 Update</Heading>
            <Text>The well-being of our collaborators and customers is our top
            priority, so we are taking all the required precautions to protect us and you!
                Give us a call for any questions or concerns.</Text>
            <CenteredDiv>
                <Button>
                    <a title="Call Taco-Nacion" href="tel:9099062045">
                        Call Now
                    </a>
                </Button>
                <Button onClick={ () => {
                    setIsOpen(false)
                }}>
                        Close
                </Button>


            </CenteredDiv>




        </>
    )
}